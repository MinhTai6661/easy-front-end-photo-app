import React from "react";
import { Route, Routes, useMatch } from "react-router-dom";
import NotFound from "../../components/NotFound";
import AddEditPage from "../pages/AddEdit";
import MainPage from "../pages/Main";

Photo.propTypes = {};

function Photo(props) {
    const match = useMatch('/photos');
    console.log({ match });
    console.log(match.pathnameBase)

    return (
        <div>photo</div>
    );
}

export default Photo;
