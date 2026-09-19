import React from 'react';
import { useAuth } from '../context/Authcontext.jsx';


const AdminDashboard = () => {
    const {user } = useAuth() 
    
    
    return (
        <div>AdminDashboard {user.name}</div>
    );
}

export default AdminDashboard;