import React from 'react'
import { GiButterfly } from "react-icons/gi";
import { IoSearchSharp } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { GoHome } from "react-icons/go";
import { FaRegNewspaper } from "react-icons/fa";
import { FaRegRectangleList } from "react-icons/fa6";
import { MdOutlinePersonOutline } from "react-icons/md";
import { PiSignOutBold } from "react-icons/pi";
import { IoIosNotifications } from "react-icons/io";

function Sidebar() {

const activeStyles = {
  backgroundColor: "red"
}

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        
        <div className="logo-icon"><GiButterfly /></div>
        <div className="search-icon"><IoSearchSharp /></div>
        
        <div className="sidebar-tools">
          <NavLink to={"/"} style={({isActive}) => isActive ? activeStyles : null} >
            <div className="sidebar-tools-icon selected "><GoHome  /></div>
          </NavLink>
          <NavLink to={"/1"} style={({isActive})=>isActive? activeStyles: null } >
            <div className="sidebar-tools-icon"><FaRegNewspaper  /></div>
          </NavLink>
          <NavLink to={"2"} style={({isActive})=>isActive? activeStyles: null } >
            <div className="sidebar-tools-icon"><FaRegRectangleList  /></div>
          </NavLink>
          <NavLink to={"3"} style={({isActive})=>isActive? activeStyles: null } >
            <div className="sidebar-tools-icon"><MdOutlinePersonOutline  /></div>
          </NavLink>
        </div>
      </div>

      <div className="sidebar-bottom">
        <div className="notification-icon"><IoIosNotifications /></div>
        <div className="signout-icon"><PiSignOutBold /></div>
      </div>
    </div>
  )
}

export default Sidebar