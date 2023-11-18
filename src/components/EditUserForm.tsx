import * as React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { editUser } from '../slices/userSlice';
import { User } from '../types';

interface EditUserFormProps {
    user: User;
    onClose: () => void;
}

const EditUserForm: React.FC<EditUserFormProps> = ({ user, onClose }) => {
    const dispatch = useDispatch();

    const initialValues = {
        avatar: user.avatar || '',
        firstName: user.firstName,
        lastName: user.lastName,
        patronymic: user.patronymic || '',
        email: user.email,
        about: user.about || '',
    };

    const validationSchema = Yup.object().shape({
        avatar: Yup.string().url('Invalid URL format'),
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        patronymic: Yup.string(),
        email: Yup.string().email('Invalid email address').required('Required'),
        about: Yup.string(),
    });

    const handleSubmit = (values: typeof initialValues) => {
        dispatch(editUser({ id: user.id, ...values }));
        onClose();
    };

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            <Form>
                <div>
                    <label htmlFor="avatar">Avatar (URL):</label>
                    <Field type="text" id="avatar" name="avatar" />
                    <ErrorMessage name="avatar" component="div" />
                </div>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <Field type="text" id="firstName" name="firstName" />
                    <ErrorMessage name="firstName" component="div" />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <Field type="text" id="lastName" name="lastName" />
                    <ErrorMessage name="lastName" component="div" />
                </div>
                <div>
                    <label htmlFor="patronymic">Patronymic:</label>
                    <Field type="text" id="patronymic" name="patronymic" />
                    <ErrorMessage name="patronymic" component="div" />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <Field type="text" id="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                </div>
                <div>
                    <label htmlFor="about">About:</label>
                    <Field as="textarea" id="about" name="about" />
                    <ErrorMessage name="about" component="div" />
                </div>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default EditUserForm;
