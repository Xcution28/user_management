import * as React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../types';
import DeleteUserForm from '../components/DeleteUserForm';

interface UserListProps {
    users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
    const sortedUsers = users.slice().sort((a, b) => new Date(b.createDate).getTime() - new Date(a.createDate).getTime());

    const [selectedUserIds, setSelectedUserIds] = React.useState<number[]>([]);
    const [isDeleteFormOpen, setIsDeleteFormOpen] = React.useState(false);

    const handleDeleteClick = (userId: number) => {
        setSelectedUserIds([userId]);
        setIsDeleteFormOpen(true);
    };

    const handleDeleteUsers = () => {
        setIsDeleteFormOpen(true);
    };

    const handleCloseDeleteForm = () => {
        setIsDeleteFormOpen(false);
        setSelectedUserIds([]);
    };

    return (
        <div>
            {sortedUsers.map((user) => (
                <div key={user.id}>
                    <img src={user.avatar} alt={`${user.firstName} ${user.lastName}`} />
                    <div>
                        <h3>{`${user.firstName} ${user.lastName}`}</h3>
                        <p>{user.email}</p>
                    </div>
                    <Link to={`/${user.id}`}>View Details</Link>
                    <button onClick={() => handleDeleteClick(user.id)}>Delete User</button>
                </div>
            ))}


            {isDeleteFormOpen && (
                <DeleteUserForm userIds={selectedUserIds} onClose={handleCloseDeleteForm} />
            )}
        </div>
    );
};

export default UserList;
