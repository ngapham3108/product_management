import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";

const product_list = [
    {
        name: "IP 13 Pro Max",
        code: "IP13PMAX",
        price: "$1000",
        status: "In Stock",
    },
    {
        name: "IP 12 Pro Max",
        code: "IP12PMAX",
        price: "$900",
        status: "Out Of Stock",
    }
]

function showProducts(product_list) {
    let result = null;
    if (product_list.length) {
        result = product_list.map((item, index) => {
            return <ProductItem
                key={index}
                no={index}
                name={item.name}
                price={item.price}
                status={item.status}
                code={item.code}
            />
        });
    }
    return result;
}

function ProductPage() {
    return (
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <ProductList>{showProducts(product_list)}</ProductList>
                <button style={{ float: 'right' }} type="button" className="btn btn-success">Add new item</button>
            </div>
        </div>
    );
}

export default ProductPage;