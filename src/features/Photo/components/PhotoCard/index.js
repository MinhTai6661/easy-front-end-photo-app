import { Button } from 'reactstrap';
import './photoCard.scss';

function PhotoCard(props) {
    const { photo, onEditClick, onRemoveClick } = props;

    const handleOnlickRemove = () => {
        onRemoveClick(photo.id);
    };

    const handlEditClick = () => {
        onEditClick(photo);
    };
    return (
        <div className="photo">
            <img className="photo__img" src={photo.photo}></img>
            <div className="photo__overlay">
                <h3 className="photo__title">{photo.title}</h3>
                <div className="photo__group-btn">
                    <Button
                        onClick={handleOnlickRemove}
                        className="btn-remove"
                        color="danger"
                        outline
                    >
                        Remove
                    </Button>
                    <Button
                        onClick={handlEditClick}
                        className="btn-edit"
                        color="success"
                        outline
                    >
                        edit
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default PhotoCard;
