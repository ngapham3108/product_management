import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import style from "./ProductItem.module.css"
import {API_URL} from "./../../constants/config"
import { deleteProduct } from "../../Pages/ProductPage/ProductPageSlice";

function onDelete(id, dispatch) {

    if (window.confirm("Are you about to delete this product?")) {
        fetch(`${API_URL}/product/${id}`, {
            method: "DELETE"
        }).then (res => {
            if (res.ok) {
                dispatch(deleteProduct(id));
            } else {
                alert("Failed to delete this product. Try again later!");
            }
        }).catch(err => {throw err});
    }
}

function ProductItem(props) {
    const dispatch = useDispatch();
    return (
        <tr>
            <td>{props.no}</td>
            <td>{props.code}</td>
            <td>{props.name}</td>
            <td>{'$'+props.price}</td>
            <td>{props.status ? "In Stock" : "Out Of Stock"}</td>
            <td>
                <Link to={`/management/edit/${props.__id}`} className={"btn btn-warning " + style.marginRight}>Edit</Link>
                <button onClick={()=>onDelete(props.__id, dispatch)} type="button" className="btn btn-danger">Delete</button>
            </td>
        </tr>
    );
}

export default ProductItem;


