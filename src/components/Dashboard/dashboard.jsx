import React, { useEffect, useState } from 'react';
import { auth } from '../Login/firebase'; 
import "../Dashboard/dashboard.css";
import { useNavigate } from "react-router-dom";
const Dashboard = ({ setLoginStatus}) => {
     const [user, setUsername] = useState('');
     const [email,setEmail]=useState('');
     const navigate = useNavigate();
    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        const e = localStorage.getItem('email');
        if (storedUsername&&e) {
            setUsername(storedUsername);
            setEmail(e);
        } 
    }, []);
     const handleDeleteAccount = () => {
        const user = auth.currentUser;
        user.delete().then(() => {
            setLoginStatus(false);
            navigate("/");
            console.log('Account deleted successfully');

        }).catch((error) => {
            console.error('Error deleting account:', error);
        });
    };
    return (
        <div className='userdiv'>
            <div className='info'>
                <div className='userName'>
                    Username: &nbsp;
                    <input className="inputfield" value={user} disabled/>
                    <button className='edit'>Edit</button>
                </div>
                <br></br>
                <div className='userName'>
                    E-mail: &nbsp;
                    <input className="inputfield" value={email} disabled/>
                    <button className='edit'>Edit</button>
                </div>
                <button className='delete-account' onClick={handleDeleteAccount}>Delete My Account</button>
            </div>
        </div>
    );
};

export default Dashboard;
