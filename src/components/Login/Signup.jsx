import { Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import { useState } from 'react';
import Button from '@mui/material/Button';

import { auth } from '../Login/firebase';
import { createUserWithEmailAndPassword, updateProfile, fetchSignInMethodsForEmail } from 'firebase/auth';
export default function ({ open, onClose }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    function checkIfEmailExists(email) {
        return fetchSignInMethodsForEmail(auth, email);
    }
    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                 await updateProfile(userCredential.user, {
                   displayName: username
                          });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <Dialog open={open} onClose={onClose}>
                <DialogTitle className='dialog-title'>Sign Up</DialogTitle>
                <DialogContent className="dialog" sx={{ overflow: 'hidden' }}>
                    <form onSubmit={handleSignupSubmit} >
                        <TextField label="Username" sx={{ mb: 2, mt: 4 }} className="text-field" onChange={(e) => setUsername(e.target.value)} fullWidth />
                        <TextField label="Email" sx={{ mb: 2 }} className="text-field" onChange={(e) => setEmail(e.target.value)} type="email" fullWidth />
                        <TextField label="Password" sx={{ mb: 2 }} className="text-field" onChange={(e) => setPassword(e.target.value)} type="password" fullWidth />
                        <Button type="submit" sx={{ mb: 2 }} variant="contained" color="primary" fullWidth>Submit</Button>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}