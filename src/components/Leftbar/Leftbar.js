import { Avatar } from "@mui/material";
import React from "react";
import "./Leftbar.css";
import { useSelector } from "react-redux";
import { selectUser } from "./../../features/userSlice";

const Leftbar = () => {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hashtag">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8fHw3D&w=1000&q=80"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <div className="sidebar__statNumber">2443</div>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <div className="sidebar__statNumber">7456</div>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactJS")}
        {recentItem("programming")}
        {recentItem("nextJS")}
        {recentItem("redux")}
        {recentItem("web workers")}
      </div>
    </div>
  );
};

export default Leftbar;
