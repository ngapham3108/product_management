import style from "./ProductItem.module.css"

function ProductItem(props) {
    return (
        <tr>
            <td>{props.no}</td>
            <td>{props.code}</td>
            <td>{props.name}</td>
            <td>{'$'+props.price}</td>
            <td>{props.status ? "In Stock" : "Out Of Stock"}</td>
            <td>
                <button type="button" className={"btn btn-warning " + style.marginRight}>Edit</button>
                <button type="button" className="btn btn-danger">Delete</button>
            </td>
        </tr>
    );
}

export default ProductItem;


