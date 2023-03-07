import React from "react";
import "./header.css";
import { Avatar } from "@mui/material";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <Avatar className="header__avatar" alt="header-image" />
        <AccessAlarmsIcon />
      </div>
      <div className="header__search">
        <SearchIcon />
        <input placeholder="search clever programmer.." />
      </div>
      <div className="header__right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
};

export default Header;
