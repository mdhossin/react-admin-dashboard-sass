import React from "react";
import "./topbar.scss";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import Avatar from "@mui/material/Avatar";
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar__wrapper">
        <div className="topbar__wrapper__left">
          <span className="topbar__wrapper__left-logo">Dashboard</span>
        </div>
        <div className="topbar__wrapper__right">
          <div className="topbar__wrapper__right__iconContainer">
            <NotificationsNoneIcon />
            <span className="topbar__wrapper__right__iconContainer-badge">
              2
            </span>
          </div>
          <div className="topbar__wrapper__right__iconContainer">
            <LanguageIcon />
            <span className="topbar__wrapper__right__iconContainer-badge">
              2
            </span>
          </div>
          <div className="topbar__wrapper__right__iconContainer">
            <SettingsIcon />
          </div>
          <div className="topbar__wrapper__right__iconContainer">
            <Avatar>H</Avatar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
