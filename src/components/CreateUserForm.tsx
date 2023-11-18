import * as React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addUser } from '../slices/userSlice';

const CreateUserForm: React.FC = () => {
    const dispatch = useDispatch();

    const initialValues = {
        avatar: '',
        firstName: '',
        lastName: '',
        patronymic: '',
        email: '',
        about: '',
    };

    const validationSchema = Yup.object({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
    });

    const handleSubmit = (values: typeof initialValues) => {
        dispatch(addUser(values));
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form>
                <label htmlFor="firstName">First Name:</label>
                <Field type="text" id="firstName" name="firstName" />
                <ErrorMessage name="firstName" component="div" />

                <label htmlFor="lastName">Last Name:</label>
                <Field type="text" id="lastName" name="lastName" />
                <ErrorMessage name="lastName" component="div" />

                <label htmlFor="patronymic">Patronymic:</label>
                <Field type="text" id="patronymic" name="patronymic" />
                <ErrorMessage name="patronymic" component="div" />

                <label htmlFor="email">Email:</label>
                <Field type="email" id="email" name="email" />
                <ErrorMessage name="email" component="div" />

                <label htmlFor="about">About:</label>
                <Field as="textarea" id="about" name="about" />
                <ErrorMessage name="about" component="div" />

                <button type="submit">Create User</button>
            </Form>
        </Formik>
    );
};

export default CreateUserForm;
