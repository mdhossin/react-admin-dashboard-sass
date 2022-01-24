import React from "react";
import SidebarMenuItem from "../sidebarMenuItem/SidebarMenuItem";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <SidebarMenuItem />
      </div>
    </div>
  );
};

export default Sidebar;
