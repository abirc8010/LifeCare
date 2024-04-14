import * as React from 'react';
import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import "./Header.css"
import "../Login/firebase"
import UserLogin from "../Login/login"
import { useNavigate } from "react-router-dom";
import UserSignup from '../Login/Signup';
import { signOut } from 'firebase/auth';
import { auth } from '../Login/firebase';
const pages = [
    { page: 'Home', route: "/" },
    { page: 'Services', route: "/services" },
    { page: 'Nutrition checking', route: "/nutrition" },
    { page: 'Instant Consultancy', route: "/video" },
    { page: 'About', route: "/about" }];
const Before_Login = ['Login', 'Sign Up'];
const After_Login = ['Dashboard', 'My Bookings', 'Log out'];
export default function ({ hasLoggedin, setLoginStatus ,setUsername,setMail}) {

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [signupOpen, setSignupOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const storedLoginStatus = localStorage.getItem('hasLoggedin');
        if (storedLoginStatus) {
            setLoginStatus(storedLoginStatus === 'true');
        }
    }, []);
    const handleLogout = async () => {
        try {
            await signOut(auth);
            console.log("Logged out");
            setLoginStatus(false);
            handleCloseUserMenu();
            setLoginStatus(false);
            setMail('');
              localStorage.removeItem('hasLoggedin');
              localStorage.removeItem('username');
              localStorage.removeItem('email');
              navigate('/');
        }
        catch (error) {
            console.log(error);
        }
    }
    const handleDashboard = () => {
        navigate("/dashboard");
    };
    const handleBooking = () => {
        navigate("/mybooking");
    };
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const sendToRoute = (link) => {
        navigate(link);
        window.location.reload();
    }

    const handleLoginOpen = () => {
        setLoginOpen(true);
        handleCloseUserMenu();
    };

    const handleCloseLogin = () => {
        setLoginOpen(false);
    };

    const handleSignupOpen = () => {
        setSignupOpen(true);
        handleCloseUserMenu();
    };

    const handleCloseSignup = () => {
        setSignupOpen(false);
    };

    return (
        <>
            <AppBar className="top-bar">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <div className="Lifecare">
                                <img src="health.webp" className="health-icon" />
                                LifeCare
                            </div>
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page.page} onClick={() => sendToRoute(page.route)}>
                                        <Typography textAlign="center">{page.page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <div className="Lifecare">
                                <img src="health.webp" className="health-icon"></img>
                                LifeCare
                            </div>
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page.page}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                    className='link'
                                    onClick={() => sendToRoute(page.route)}
                                >
                                    {page.page}
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="A" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {!hasLoggedin ?
                                    Before_Login.map((setting) => (
                                        <MenuItem key={setting} onClick={setting === 'Login' ? handleLoginOpen : handleSignupOpen}>
                                            <Typography textAlign="center">{setting}</Typography>
                                        </MenuItem>
                                    )) :
                                    After_Login.map((setting) => (
                                        <MenuItem key={setting} onClick={setting === 'Log out' ? handleLogout : setting === 'Dashboard' ? handleDashboard : handleBooking}>
                                            <Typography textAlign="center">{setting}</Typography>
                                        </MenuItem>
                                    ))
                                }
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
                <UserLogin open={loginOpen} onClose={handleCloseLogin} setLoginStatus={setLoginStatus} setUserName={setUsername} setMail={setMail}/>
                <UserSignup open={signupOpen} onClose={handleCloseSignup} />
            </AppBar>
        </>
    );
};