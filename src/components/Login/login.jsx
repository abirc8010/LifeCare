import { Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import { useState } from 'react';
import { auth } from '../Login/firebase';
import Button from '@mui/material/Button';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword,updateProfile } from 'firebase/auth';
export default function ({ open, onClose, setLoginStatus ,setUserName}) 
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
      const handleLoginSubmit = async(e) => {
        e.preventDefault();
         try {
           const u= await signInWithEmailAndPassword(auth,email, password);
           console.log("Logged in!!");
           setUserName(u.user.displayName);
           setLoginStatus(true);       
           localStorage.setItem('hasLoggedin', 'true');          
        } catch (error) {
            console.log("Failed");
        }
    };
    return (
        <>
            <Dialog open={open} onClose={onClose}>
                <DialogTitle className='dialog-title'>Login</DialogTitle>
                <DialogContent className="dialog">
                    <form onSubmit={handleLoginSubmit}>
                        <TextField label="Email" fullWidth className="text-field" sx={{ mb: 3 }} onChange={(e) => setEmail(e.target.value)} /><br />
                        <TextField label="Password" className="text-field" sx={{ mb: 4 }} onChange={(e) => setPassword(e.target.value)} type="password" fullWidth />
                        <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>

                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}