import React from "react";
import "./Post.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";
import InputOption from "./InputOption.js";

const Post = ({ name, description, message, photoUrl }) => {
  return (
    <div className="post">
      <div className="post__header">
        <AccountCircleIcon style={{ fontSize: 50 }} />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltIcon} title="like" color="gray" />
        <InputOption Icon={CommentIcon} title="comment" color="gray" />
        <InputOption Icon={ShareIcon} title="share" color="gray" />
        <InputOption Icon={SendIcon} title="send" color="gray" />
      </div>
    </div>
  );
};

export default Post;
