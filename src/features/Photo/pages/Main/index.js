import React from 'react';
import { Link, Route, Routes, useMatch } from 'react-router-dom';
import Banner from '../../../../components/Banner';
import pinkBackground from '../../../../assets/images/pink-bg.jpg';
import Images from '../../../../constants/images';
import { Button, Container } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import PhotoList from 'features/Photo/components/PhotoList';
import { deletePhoto,editPhoto } from 'features/Photo/photoSlice';
import { useNavigate } from 'react-router-dom';


// import NotFound from "../../components/NotFound";
// import AddEditPage from "../pages/AddEdit";
// import MainPage from "../pages/Main";

MainPage.propTypes = {};

function MainPage(props) {
    const navigate = useNavigate()
    const photoList = useSelector((state) => state.photos);
    const dispatch = useDispatch();
   

    const match = useMatch('/photos');
    const handleRemoveClick = (id) => {
        const action = deletePhoto(id);
        dispatch(action);
    };
    const handleEditClick = (photo) => {

        const editPhotoUrl = `/photos/${photo.id}`
        navigate(editPhotoUrl)
    };
    return (
        <div className="photo-main">
            <Banner
                title="Your awesome photo"
                backgroundURL={Images.ORANGE_BG}
            />

            <Container className="photo-main__container">
                <Link className="photo-main__link" to="/photos/add">
                    {' '}
                    Click to add images
                </Link>

                <PhotoList
                    photoList={photoList}
                    onPhotoRemoveClick={handleRemoveClick}
                    onPhotoEditClick={handleEditClick}
                />
            </Container>
        </div>
    );
}

export default MainPage;
