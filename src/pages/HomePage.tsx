import * as React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import UserList from '../components/UserList';

const HomePage: React.FC = () => {
    const users = useSelector((state: RootState) => state.user);

    return (
        <div>
            <h1>Home Page</h1>
            <Link to="/create">Create User</Link>
            <UserList users={users} />
        </div>
    );
};

export default HomePage;
