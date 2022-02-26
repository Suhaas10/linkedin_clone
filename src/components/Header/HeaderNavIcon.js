import React from "react";
import "./HeaderNavIcon.css";
import { useSelector } from "react-redux";
import { selectUser } from "./../../features/userSlice";
import { Avatar } from "@mui/material";
import profpic from "../../assets/profpic.jpg";

function HeaderNavIcon({ Icon, title, onClick, avatar }) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="header__navbar">
      {Icon && <Icon className="header__icon" />}
      {avatar && (
        <Avatar className="header__icon roundImage">{user?.email[0]}</Avatar>
      )}
      <span className="header__title">{title}</span>
    </div>
  );
}

export default HeaderNavIcon;
