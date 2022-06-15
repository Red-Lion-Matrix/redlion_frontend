import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { GlobalContext } from "../../../context/GlobalProvider";
import image from '../../../shared/assets/images/logo.png';
import "./styles.scss";

import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

// import component 👇
import Drawer from 'react-modern-drawer';
//import styles 👇
import 'react-modern-drawer/dist/index.css';

const Navbar = () => {
    const navigate = useNavigate();

    const {
        authState: {
            isAuthenticated,
            user
        },
        authDispatch
    } = useContext(GlobalContext);

    const handleLogout = () => {
        authDispatch({ type: "LOGOUT" });
        toast.dismiss();
        navigate("/login");
    }

    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <nav className="navbar" style={{ position: 'sticky', width: "100%" }}>
            <div className="brand-title">
                <img width="55px" height="55px" style={{ borderRadius: '50%' }} src={image} id="Avatar" />
                <h1 className="title">
                    RED LION
                </h1>
            </div>
            <div className="navbar-links">
                <ul className="nav-area">
                    <li className="navbar-list"><a className="cool-link" onClick={() => navigate('/')}>Home</a></li>
                    <li className="navbar-list"><a className="cool-link" onClick={() => navigate('/form')}>Earnings</a></li>
                    <div className="dropdown ">
                        <li className="navbar-list">
                            {/* <img width="55px" height="55px" style={{ borderRadius: '50%' }} src='https://picsum.photos/200/200' id="Avatar" /> */}
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                sx={{ display: "flex", justifyContent: "flex-end" }}
                                onClick={toggleDrawer}
                            >
                                <MenuIcon sx={{ fontSize: "35px" }} />
                            </IconButton>
                        </li>
                        {/* <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                            sx={{
                                borderTopLeftRadius: "10px",
                                borderBottomLeftRadius: "10px",
                                overflow: "hidden",
                            }}
                        >
                            {list(anchor)}

                        </Drawer> */}
                        {/*  */}

                        <Drawer
                            open={isOpen}
                            onClose={toggleDrawer}
                            direction='right'
                            className='drawer'

                        >
                            {/* <div style={{ color: "black" }}>Hello World</div> */}
                            {/* <div className="dropdown-content">
                                <li className="navbar-list"><a className="cool-link">Profile</a></li>
                                <li className="navbar-list"><a className="cool-link">Settings</a></li>
                                <li className="navbar-list"><a className="cool-link" onClick={handleLogout}>Logout</a></li>
                            </div> */}
                            <div className='drawer-content'>
                                <h1 className="drawer-header">Welcome {user.name.split(' ')[0]}</h1>
                                <div className="seperator"/>
                                <li className="navbar-list"><a className="cool-link">Profile</a></li>
                                <li className="navbar-list"><a className="cool-link">Settings</a></li>
                                <li className="navbar-list"><a className="cool-link" onClick={handleLogout}>Logout</a></li>
                            </div>
                        </Drawer>
                    </div>
                </ul>
            </div>

        </nav>
    );
}


export default Navbar;