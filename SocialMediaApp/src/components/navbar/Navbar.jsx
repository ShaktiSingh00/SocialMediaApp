import "./navbar.scss";
import HomeIcon from '@mui/icons-material/Home';
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
// import image from "../../assets/images/myImg.jpeg";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";


const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>UseBook</span>
        </Link>
        <HomeIcon />
        {darkMode ? <DarkModeOutlinedIcon onClick={toggle}/> : <WbSunnyOutlinedIcon onClick={toggle} /> }     
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          
            <img src={currentUser.profilePic} alt=""/>
            <span>{currentUser.name}</span>          
        </div>
      </div>
    </div>
  );
};

 export default Navbar;
