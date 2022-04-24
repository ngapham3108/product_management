import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useMatch } from "react-router-dom";

import {API_URL} from "./../../constants/config"

function submit(navigate, match) {
    let payload = {
        code: document.getElementById('code').value,
        name: document.getElementById('name').value,
        price: document.getElementById('price').value,
        status: document.getElementById('status').checked,
    }
    let id;
    if (match) {
        id = match.params.id;
    }
    fetch(`${API_URL}/product/${id ? id : ""}`, {
        method: id ? "PUT" : "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    }).then(res => {
        if (res.ok) {
            navigate(-1);
            alert("Successfully saved")
        } else {
            throw new Error("Failed To Save");
        }
    }).catch (err => {throw err});
}

function ActionPage() {
    const navigate = useNavigate();
    const match = useMatch("/management/edit/:id");
    useEffect(()=>{
        let id;
        if (!match) {
            return;
        }
        id = match.params.id;

        fetch(`${API_URL}/product/${id}`)
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                alert("Failed to load resouce");
            }
        }).then (payload => {
            document.getElementById('code').value = payload.code;
            document.getElementById('name').value = payload.name;
            document.getElementById('price').value = payload.price;
            document.getElementById('status').value = payload.status;
        }). catch(err => {throw err});

    }, []);


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
        <button onClick={() => submit(navigate, match)} className="btn btn-primary">Save</button>
        </>
    );
}

export default ActionPage;