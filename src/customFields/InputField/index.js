import PropTypes from 'prop-types';
import { ErrorMessage, Form } from 'formik';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
    placeholder: PropTypes.string,
};
InputField.defaultProps = {
    type: 'text',
    placeholder: 'Enter Something ....',
    label: '',
    disable: false,
};

function InputField(props) {
    const { field, form, label, placeholder, type, disable } = props;
    console.log('🚀 ~ file: index.js ~ line 21 ~ InputField ~ form', form);
    // console.log(props);
    const { name, value, onChange, onBlur } = field;

    const { errors, touched } = form;
     
    const isShowError =  !!( errors[name] && touched[name]);

    // console.log(Input)

    return (
        <FormGroup>
            <Label for={name}>{label}</Label>
            <Input
                id={name}
                {...field}
                placeholder="Enter something..."
                disabled={disable}
                invalid ={isShowError}
            />
            {/* {isShowError && <FormFeedback>{errors[name]}</FormFeedback>} */}
            <ErrorMessage className='error-message' name={name} component={FormFeedback}  />
        </FormGroup>
    );
}

export default InputField;
