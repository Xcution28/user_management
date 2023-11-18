import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import UserCard from '../components/UserCard';
import EditUserForm from '../components/EditUserForm';

const UserPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const userId = parseInt(id, 10);
    const users = useSelector((state: RootState) => state.user);
    const user = users.find((u) => u.id === userId);

    const [isEditFormOpen, setIsEditFormOpen] = React.useState(false);

    const handleEditClick = () => {
        setIsEditFormOpen(true);
    };

    const handleCloseEditForm = () => {
        setIsEditFormOpen(false);
    };

    return (
        <div>
            <h1>User Details Page</h1>
            <Link to="/">Back to Home</Link>
            {user && (
                <div>
                    <UserCard user={user} />
                    <button onClick={handleEditClick}>Edit User</button>
                    {isEditFormOpen && (
                        <EditUserForm user={user} onClose={handleCloseEditForm} />
                    )}
                </div>
            )}
        </div>
    );
};

export default UserPage;
