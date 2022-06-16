import { Button } from "@mui/material";
import React from "react";

import "./style.scss";
function CustomButton({ text, icon, link, href }) {
  return (
    <Button
      className="custom_btn"
      endIcon={icon ? <div className="btn_icon_container">{icon}</div> : null}
      linkdemo={link}
      href={href}
    >
      {
        link ? <a href ={link} className="linkProject"><span className="btn-text">{text}</span></a> :  <span className="btn-text">{text}</span>
      }
      {/* <span className="btn-text">{text}</span> */}
     
    </Button>
  );
}

export default CustomButton;
