import PhotoForm from 'features/Photo/components/PhotoForm';

import Banner from '../../../../components/Banner';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoto, deletePhoto } from 'features/Photo/photoSlice';
import { useNavigate } from 'react-router-dom';

// import PhotoForm from "../../components/PhotoForm";

AddEditPage.propTypes = {};

function AddEditPage(props) {
    const dispatch = useDispatch();
    const dataRedux = useSelector((state) => state.photos);
    const navigate = useNavigate();

    const handleSubmit = (value) => {
        return new Promise((resolve) => {

            setTimeout(()=>{

                dispatch(addPhoto(value));
                navigate('/photos');
            },2000)

        });

        // console.log('dataRedux: ', dataRedux);
    };
    return (
        <div className="photo-edit">
            <Banner title="ADD EDIT PAGE" />

            <div className="photo-edit__form">
                <PhotoForm onSubmit={handleSubmit} />
            </div>
        </div>
    );
}

export default AddEditPage;
