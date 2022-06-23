import PropTypes from 'prop-types';
import { Button, FormGroup, Spinner } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import InputField from 'customFields/InputField';
import RandomPhotoField from 'customFields/RandomPhotoField';
import SelectField from 'customFields/SelectField';
import { FastField, Form, Formik } from 'formik';
import * as yup from 'yup';

PhotoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function PhotoForm(props) {
    const { isAddmode, initialValue, onSubmit } = props;

    const vaidationSchema = yup.object().shape({
        title: yup.string().required('this feild is not empty'),
        category: yup.number().required('this field is not empty!').nullable(),
        photo: yup.string().when('category', {
            is: 1,
            then: yup.string().required('this field is not empty!'),
            otherwise: yup.string().notRequired(), //same logic of else
        }),
    });
    return (
        <Formik
            initialValues={initialValue}
            onSubmit={onSubmit}
            validationSchema={vaidationSchema}
        >
            {(formikProps) => {
                const { values, errors, touched, isSubmitting } = formikProps;
                // console.log(
                //     '🚀 ~ file: index.js ~ line 27 ~ PhotoForm ~  { values, errors, touched } ',
                //     { values, errors, touched }
                // );
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
                            <Button type="submit" color={isAddmode ? 'primary': 'success'}>
                                {isAddmode ? '  Add to album' : 'Update Photo '}

                                {isSubmitting && <Spinner size='sm' />}
                            </Button>
                        </FormGroup>
                    </Form>
                );
            }}
        </Formik>
    );
}

export default PhotoForm;
