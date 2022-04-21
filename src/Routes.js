import { Route, Routes } from "react-router-dom";

import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import Home from "./Pages/Home/Home";
import ProductPage from "./Pages/ProductPage/ProductPage";

const default_routes = [
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/management",
        element: <ProductPage/>
    },
    {
        path: "*",
        element: <NotFoundPage/>
    }
]

function routeList(routes = default_routes) {
    let result = null;
    if (routes.length) {
        result = routes.map((route, index) => {
            return <Route
                key={index}
                path={route.path}
                element={route.element}
            />
        });
    }
    return <Routes>{result}</Routes>;
}

export default routeList;