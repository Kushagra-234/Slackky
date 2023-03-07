import React from "react";
import "./sidebar.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Clever Programmer</h2>
          <h3>
            <FiberManualRecordIcon />
            Kushagra Gupta
          </h3>
        </div>
        <CreateIcon/>
      </div>
    </div>
  );
};

export default Sidebar;
