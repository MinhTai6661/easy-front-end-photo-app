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

PhotoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function PhotoForm() {
    const initialValue = {
        title: '',
        category: null,
    };
    return (
        
        <Formik initialValues={initialValue}>
            {(formikProps) => {
                const { values, errors, touched } = formikProps;
                console.log('formikSProps: ', { values, errors, touched });
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
                        <FormGroup>
                            <Label for="categoryId">Photo</Label>

                            <div>
                                <Button type="button" outline color="primary">
                                    Random a photo
                                </Button>
                            </div>
                            <div>
                                <img
                                    width="200px"
                                    height="200px"
                                    src={Images.COLORFUL_BG}
                                    alt="colorful background"
                                />
                            </div>
                        </FormGroup>
                    </Form>
                );
            }}
        </Formik>
    );
}

export default PhotoForm;
