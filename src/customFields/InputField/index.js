import PropTypes from 'prop-types';
import { Form } from 'formik';
import { FormGroup, Input, Label } from 'reactstrap';

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

    // console.log(props);
    const { name, value, onChange, onBlur } = field;

    // console.log(Input)

    return (
        <FormGroup>
            <Label for={name}>{label}</Label>
            <Input
                id={name}
                {...field}
                placeholder="Enter something..."
                disabled={disable}
            />
        </FormGroup>
    );
}

export default InputField;
