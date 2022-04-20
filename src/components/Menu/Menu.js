import {Link, useMatch, useResolvedPath, Router} from "react-router-dom";

import style from "./Menu.module.css";

function CustomLink (props) {
    const path = useResolvedPath(props.to);
    console.log('path', path);
    const match = useMatch(path.pathname);
    console.log('match', match);

    return (
        <Link to={props.to} className={`nav-link ${match ? style.active : ""}`}>{props.name}</Link>
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
    <nav className="nav justify-content-center|justify-content-end">
        {showMenuList(menu)}
    </nav>
    );
}

export default Menu;