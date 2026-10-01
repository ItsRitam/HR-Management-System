import React from 'react';
import { useAuth } from '../context/Authcontext.jsx';
import AdminSidebar from '../components/Dashboard/AdminSidebar.jsx';
import Navbar from '../components/Dashboard/Navbar.jsx';
import AdminSummary from '../components/Dashboard/AdminSummary.jsx';
import SummaryCard from '../components/Dashboard/SummaryCard.jsx';


const AdminDashboard = () => {
    const {user } = useAuth() 
    
    
    return (
     <div className='flex'>
        <AdminSidebar/>
        <div className='flex-1 ml-64 bg-gray-100 h-screen'>
        <Navbar />
        <AdminSummary/>    
        </div>
     </div>   
    )
}

export default AdminDashboard;