import React from "react";

import burgerLogo from "../../assets/Images/burger-logo.png";
import classes from "./Logo.css";

function Logo(props) {
  return (
    <div className={classes.Logo}>
      <img src={burgerLogo} alt="ChenBurger" />
    </div>
  );
}

export default Logo;
