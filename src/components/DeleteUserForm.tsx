import * as React from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../slices/userSlice';

interface DeleteUserFormProps {
    userIds: number[];
    onClose: () => void;
}

const DeleteUserForm: React.FC<DeleteUserFormProps> = ({ userIds, onClose }) => {
    const dispatch = useDispatch();

    const handleDeleteUsers = () => {
        userIds.forEach((userId) => {
            dispatch(deleteUser(userId));
        });

        onClose();
    };

    return (
        <div>
            <p>Are you sure you want to delete selected users?</p>
            <button onClick={handleDeleteUsers}>Yes</button>
            <button onClick={onClose}>No</button>
        </div>
    );
};

export default DeleteUserForm;
