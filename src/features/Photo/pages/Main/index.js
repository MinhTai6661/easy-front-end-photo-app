import React from "react";
import { Link, Route, Routes, useMatch } from "react-router-dom";
import Banner from "../../../../components/Banner";
import pinkBackground from '../../../../assets/images/pink-bg.jpg';
import Images from "../../../../constants/images";
import { Container } from "reactstrap";

 
// import NotFound from "../../components/NotFound";
// import AddEditPage from "../pages/AddEdit";
// import MainPage from "../pages/Main";
 

MainPage.propTypes = {};

function MainPage(props) {
    console.log('pinkBackground',pinkBackground)
    const match = useMatch('/photos');
    
    return (
        <div className="photo-main">
            <Banner title='Your awesome photo' backgroundURL={Images.ORANGE_BG}/>
            <Container>
                <Link to='/photos/add'> Click to add images</Link>
            </Container>
        </div>
    );
}

export default MainPage;
