import { FormFeedback, FormGroup, Label } from 'reactstrap';
import PropTypes from 'prop-types';
import RandomPhoto from 'components/RandomPhoto';
import { ErrorMessage } from 'formik';

RandomPhotoField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
    label: PropTypes.string,
};

function RandomPhotoField(props) {
    const { field, form, label } = props;

    const { value, name, onBlur } = field;
    // console.log("🚀 ~ file: index.js ~ line 15 ~ RandomPhotoField ~ value", value)

    const { errors, touched } = form;
    const isShowMessage = !!(errors[name] && touched[name]);

    const handleImageChange = (imageUrl) => {
        form.setFieldValue(name, imageUrl);
    };
    return (
        <FormGroup>
            <Label>{label}</Label>
            <RandomPhoto
                name={name}
                imageUrl={value}
                onImageChange={handleImageChange}
                onRandomBlur={onBlur}
                className={isShowMessage ? 'is-invalid' : ''}
            />
            {/* <div className={isShowMessage ? `is-invalid` : ''}></div> */}
            <ErrorMessage
                className="error-message"
                name={name}
                component={FormFeedback}
            />
        </FormGroup>
    );
}

export default RandomPhotoField;
