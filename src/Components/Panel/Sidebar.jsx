import React from "react";
import "./panel.css";
import { MdHomeFilled, MdVideocam, MdOutlineMessage } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import userImage from "./Resources/user.png";

function Sidebar({ user, toggleShowChat }) {
  const navigate = useNavigate();
  const toggleClass = (e) => {
    e.currentTarget.classList.toggle("sidebar-btn-active");
  };

  return (
    <div className="sidebar">
      <div className="top">
        <div className="logo">MU</div>
      </div>
      <div className="mid">
        <div className="sidebar-btn" onClick={() => navigate("/")}>
          <MdHomeFilled size={22} className="mid-op" />
        </div>
        <div className="sidebar-btn sidebar-btn-active">
          <MdVideocam size={22} className="mid-op" />
        </div>
        <div
          className="sidebar-btn"
          onClick={(e) => {
            toggleClass(e);
            toggleShowChat();
          }}
        >
          <MdOutlineMessage size={22} className="mid-op" />
        </div>
      </div>
      <div className="bottom">
        {user?.picture ? (
          <img src={user?.picture} className="user-img" />
        ) : (
          <img src={userImage} className="user-img" />
        )}
      </div>
    </div>
  );
}

export default Sidebar;
