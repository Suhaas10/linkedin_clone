import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderNavIcon from "./HeaderNavIcon";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

import { useDispatch } from "react-redux";
import { auth } from "../firebase";
import { logout } from "../../features/userSlice";

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <HeaderNavIcon Icon={HomeIcon} title="Home" />
        <HeaderNavIcon Icon={PeopleIcon} title="Network" />
        <HeaderNavIcon Icon={WorkIcon} title="Jobs" />
        <HeaderNavIcon Icon={MessageIcon} title="Messaging" />
        <HeaderNavIcon Icon={NotificationsActiveIcon} title="Notifications" />
        <HeaderNavIcon onClick={logoutOfApp} title="logout" avatar={true} />
      </div>
    </div>
  );
}

export default Header;
