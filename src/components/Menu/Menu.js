import {Link, useMatch, useResolvedPath, Router} from "react-router-dom";

import style from "./Menu.module.css";

function CustomLink (props) {
    const path = useResolvedPath(props.to);
    const match = useMatch(path.pathname);

    return (
        <li className={`active ${match ? style.active : ""}`}>
            <Link to={props.to}>{props.name}</Link>
        </li>
    );
}
const menu = [
    {
        to: "/",
        name: "Home"
    },
    {
        to: "/management",
        name: "Management"
    }
];

function showMenuList(menu) {
    let result = null;
    if (menu.length) {
        result = menu.map((link, index)=>{
            return <CustomLink key={index} to={link.to} name={link.name} />
        });
    }
    return result;
}

function Menu (props) {
    return (
    <nav className="navbar" role="navigation">
        <ul className="nav navbar-nav">
            {showMenuList(menu)}
        </ul>
    </nav>
    );
}

export default Menu;