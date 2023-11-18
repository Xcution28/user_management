import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/:id" element={<UserPage />} />
            </Routes>
        </Router>
    );
};

export default App;
