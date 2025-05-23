import React from "react";

import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="topbar-container" styles={{position:"fixed"}}>
      <Menu />
    </div>
  );
};

export default TopBar;


    