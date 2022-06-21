import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import { FormFeedback, FormGroup, Label } from 'reactstrap';

SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
    placehoder: PropTypes.string,
    options: PropTypes.array.isRequired,
};
SelectField.defaultProps = {
    label: '',
    placehoder: 'Enter Something...',
    disabled: false,
};

function SelectField(props) {
    const { field, form, label, placehoder, options } = props;

    const { value, name, onChange, onBlur } = field;

    const { errors, touched } = form;
    const isShowMessage = !!(errors[name] && touched[name]);

    const selectedOption = options.find((option) => option.value === value);

    const handeChangeSelect = (option) => {
        //cach 1
        // const fakeEvent = {
        //     target: {
        //         value: option.value ||null,
        //         name,
        //     },
        // };

        // field.onChange(fakeEvent)

        //cach 2: easier
        form.setFieldValue(name, option.value || null);
    };
    // console.log(field);
    return (
        <FormGroup>
            <Label for={name}>category</Label>
            <Select
                id={name}
                {...field}
                value={selectedOption}
                onChange={handeChangeSelect}
                options={options}
                className={isShowMessage ? `is-invalid` : ''}
            />

            <ErrorMessage
                className="error-message"
                name={name}
                component={FormFeedback}
            />
        </FormGroup>
    );
}

export default SelectField;
