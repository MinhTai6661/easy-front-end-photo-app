import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import { FormGroup, Label } from 'reactstrap';

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
    
const selectedOption = options.find(option => option.value === value)

    const handeChangeSelect = (option) => {
        const fakeEvent = {
            target: {
                value: option.value ||null,
                name,
            },
        };
        
        field.onChange(fakeEvent)
    };
    // console.log(field);
    return (
        <FormGroup>
            <Label for={name}>category</Label>
            <Select
                id={name}
                {...field}
                value ={selectedOption}
                onChange={handeChangeSelect}
                options={options}
            />
        </FormGroup>
    );
}

export default SelectField;
