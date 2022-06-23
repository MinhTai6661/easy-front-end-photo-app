
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import PhotoCard from '../PhotoCard';

PhotoList.propTypes={
    photoList: PropTypes.array.isRequired,
    onPhotoEditClick: PropTypes.func,
    onPhotoRemoveClick: PropTypes.func,

}

function PhotoList(props) {
    const {photoList, onPhotoEditClick, onPhotoRemoveClick} = props
    return (
        <Row>
            {photoList.map((photo) => (
                <Col key={photo.id} xs="12" md="6" lg="3">
                    <PhotoCard
                        photo={photo}
                        onEditClick={onPhotoEditClick}
                        onRemoveClick={onPhotoRemoveClick}
                    />
                </Col>
            ))}
        </Row>
    );
}

export default PhotoList;
