import { Button, FormGroup, Input, Label } from 'reactstrap';
import PropTypes from 'prop-types';
import Select from 'react-select';
// import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants/global";
// import Images from "../../../../constants/images";
import 'bootstrap/dist/css/bootstrap.min.css';
import Images from 'constants/images';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import { Formik, Form, FastField } from 'formik';
import InputField from 'customFields/InputField';
import SelectField from 'customFields/SelectField';
import RandomPhotoField from 'customFields/RandomPhotoField';

PhotoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function PhotoForm() {
    const initialValue = {
        title: '',
        category: null,
        photo:''
    };
    return (
        <Formik initialValues={initialValue} onSubmit={(data)=>{console.log('data: ',data)}}>
            {(formikProps) => {
                const { values, errors, touched } = formikProps;
                console.log(
                    '🚀 ~ file: index.js ~ line 27 ~ PhotoForm ~  { values, errors, touched } ',
                    { values, errors, touched }
                );
                return (
                    <Form>
                        <FastField
                            //props of FastField
                            name="title"
                            component={InputField}
                            //props passed to InputFeild
                            label="Title"
                            placeholder="Enter something..."
                        />

                        <FastField
                            name="category"
                            component={SelectField}
                            label="Category"
                            placeholder="input something..."
                            options={PHOTO_CATEGORY_OPTIONS}
                        />

                        {/* <FormGroup>
                            <Label for="category-id">category</Label>
                            <Select
                                id="category-id"
                                placeholder="Enter something..."
                                options={PHOTO_CATEGORY_OPTIONS}
                            />
                        </FormGroup> */}
                        <FastField
                            name="photo"
                            component={RandomPhotoField}
                            label="Photo"
                        />

                        <FormGroup>
                            <Button type="submit" color="primary">
                                Add to album
                            </Button>
                        </FormGroup>
                    </Form>
                );
            }}
        </Formik>
    );
}

export default PhotoForm;
