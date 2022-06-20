import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

RandomPhoto.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    onImageChange: PropTypes.func,
    onRandomBlur: PropTypes.func,
};

RandomPhoto.defaultProps = {
    name: '',
    imageUrl: '',
    onImageUrlChange: null,
    onRandomButtonBlur: null,
  }

const randomUrl = () => {
    const randomId = Math.ceil(Math.random() * 2000);
    return ` https://picsum.photos/id/${randomId}/300/300 `;
};

function RandomPhoto(props) {
    const { name, imageUrl, onImageChange, onRandomBlur } = props;

    const handeBtnClick = () => {
        onImageChange(randomUrl());
    };
    return (
        <div className="random-photo">
            <div className="random-photo__btn">
                <Button
                    outline
                    color="primary"
                    onClick={handeBtnClick}
                    onBlur={onRandomBlur}
                    name={name}
                >
                    Random a Photo
                </Button>
            </div>
            <div className="random-photo__img">
                {imageUrl && (
                    <img src={imageUrl} alt="click again to get new image" />
                )}
            </div>
        </div>
    );
}

export default RandomPhoto;
