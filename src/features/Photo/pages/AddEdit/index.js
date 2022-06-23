import PhotoForm from 'features/Photo/components/PhotoForm';

import Banner from '../../../../components/Banner';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoto, editPhoto } from 'features/Photo/photoSlice';
import { useNavigate, useParams } from 'react-router-dom';

// import PhotoForm from "../../components/PhotoForm";

AddEditPage.propTypes = {};

function AddEditPage(props) {
    const { photoId } = useParams();
    const dispatch = useDispatch();
    const editedPhoto = useSelector((state) => {
        return state.photos.find((photo) => photo.id == photoId);
    });
    const navigate = useNavigate();

    const isAddmode = !photoId;

    const initialValue = isAddmode
        ? {
              title: '',
              category: null,
              photo: '',
          }
        : editedPhoto;

    console.log(
        '🚀 ~ file: index.js ~ line 24 ~ AddEditPage ~ initialValue',
        initialValue
    );

    const handleSubmit = (value) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (isAddmode) {
                    const newPhoto = {
                        ...value,
                        id: Math.ceil(Math.random() * 1000),
                    };
                    dispatch(addPhoto(newPhoto));

                    
                }else{

                    dispatch(editPhoto({
                       ...value,
                       id: editedPhoto.id
                    }));
                }

                navigate('/photos');
            }, 1000);
        });

        // console.log('dataRedux: ', dataRedux);
    };
    return (
        <div className="photo-edit">
            <Banner title="ADD EDIT PAGE" />

            <div className="photo-edit__form">
                <PhotoForm
                    onSubmit={handleSubmit}
                    isAddmode={isAddmode}
                    initialValue={initialValue}
                />
            </div>
        </div>
    );
}

export default AddEditPage;
