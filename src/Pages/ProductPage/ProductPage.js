import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
import {overwriteProductList} from "./ProductPageSlice";
import {API_URL} from "./../../constants/config";


function showProducts(product_list) {
    let result = null;
    if (product_list.length) {
        result = product_list.map((item, index) => {
            return <ProductItem
                key={index}
                no={index+1}
                name={item.name}
                price={item.price}
                status={item.status}
                code={item.code}
                __id = {item.id}
            />
        });
    }
    return result;
}

function ProductPage() {
    const product_list = useSelector((state) => state.productPage);
    const dispatch = useDispatch();

    useEffect(()=>{
        fetch(`${API_URL}/product`)
        .then(res => res.ok ? res.json() : null)
        .then(payload => dispatch(overwriteProductList(payload)))
        .catch(err => console.log(err));
    },[])

    return (
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <ProductList>{showProducts(product_list)}</ProductList>
                <Link to="/management/add" style={{ float: 'right' }} className="btn btn-success">Add new item</Link>
            </div>
        </div>
    );
}

export default ProductPage;