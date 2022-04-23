import { useNavigate } from "react-router-dom";
import {API_URL} from "./../../constants/config"

function submit(navigate) {
    let payload = {
        code: document.getElementById('code').value,
        name: document.getElementById('name').value,
        price: document.getElementById('price').value,
        status: document.getElementById('status').checked,
    }
    fetch(`${API_URL}/product`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    }).then(res => {
        if (res.ok) {
            navigate(-1);
            alert("Successfully submitted")
        } else {
            throw new Error("Failed To Save");
        }
    }).catch (err => {throw err});
}

function ActionPage() {
    const navigate = useNavigate();
    return (
        <>
        <form role="form">
            <legend>Add new product</legend>

            <div className="form-group">
                <label htmlFor="">Code</label>
                <input type="text" className="form-control" id="code"/>
                <label htmlFor="">Name</label>
                <input type="text" className="form-control" id="name"/>
                <label htmlFor="">Price</label>
                <input type="text" className="form-control" id="price"/>
                <label htmlFor="">Status</label>
                <input style={{marginLeft: '10px'}} type="checkbox" id="status"/>
            </div>
        </form>
        <button onClick={() => submit(navigate)} className="btn btn-primary">Submit</button>
        </>
    );
}

export default ActionPage;

