import { Dialog, DialogTitle, DialogContent, TextField } from '@mui/material';
import { useState } from 'react';
import { auth } from '../Login/firebase'; 
import Button from '@mui/material/Button';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'; 
import { GoogleAuthProvider } from 'firebase/auth'; 


export default function LoginForm({ open, onClose, setLoginStatus, setUserName, setMail, loginmsg, setLoginmsg }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const u = await signInWithEmailAndPassword(auth, email, password);
            setMail(email);
            setLoginmsg("✓ Logged in successfully !");
            console.log("Logged in!!");
            console.log(u);
            setUserName(u.user.displayName);
            setLoginStatus(true);
            localStorage.setItem('hasLoggedin', 'true');
            localStorage.setItem('username', u.user.displayName);
            localStorage.setItem('email', email);
        } catch (error) {
            console.log("Failed");
        }
    };

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const g=await signInWithPopup(auth, provider);
            console.log(g);
            console.log(g);
            setUserName(g.user.displayName);
            setLoginStatus(true);
            localStorage.setItem('hasLoggedin', 'true');
            localStorage.setItem('username', g.user.displayName);
             localStorage.setItem('email', g.user.email);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle className='dialog-title'>Login</DialogTitle>
            <DialogContent className="dialog">
                <form onSubmit={handleLoginSubmit} className='form'>
                    <TextField label="Email" fullWidth className="text-field" sx={{ mb: 3,marginTop: 2  }} onChange={(e) => setEmail(e.target.value)} />
                    <TextField label="Password" className="text-field" sx={{ mb: 3 }} onChange={(e) => setPassword(e.target.value)} type="password" fullWidth />
                    {loginmsg && <p className='login-confirm'>{loginmsg}</p>}
                    <Button type="submit" variant="contained" color="primary" fullWidth className='log-but1'>Submit</Button>
                </form>
                <h2 >------------ OR -------------</h2>
                <div className='auth-div'>
                    <button className="login-with-google-btn" onClick={handleGoogleSignIn}>Sign In with google
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
