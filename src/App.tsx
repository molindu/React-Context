import React, { useState } from 'react';
import Login from './screens/Login';
import Profile from './screens/Profile';
import { LoginContext } from './Contexts/LoginContext';

export default function App() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showProfile, setShowProfile] = useState(false);
    return (
        <LoginContext.Provider value={{ username, setUsername, password, setPassword, setShowProfile }}>
            {showProfile ?
                <Profile /> :
                <Login />
            }
        </LoginContext.Provider>
    );
}