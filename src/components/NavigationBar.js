import React from "react";
import "./style/NavigationBar.css";


export const NavigationBar = ({setActiveSection}) => {

const savedUser = localStorage.getItem("userProfile");
const avatar = savedUser ? JSON.parse(savedUser).avatar : "default-avatar.png";

  return (
    <nav>
       {/* Company Icon or App Icon */}
      <img src={avatar} alt="User Avatar" style={{ width: 40, borderRadius: "50%" }} />

      {/* Icon Section Here */}
      <div id="IconSection" className="IconSection">
        
        {/* Gallery Section BTN*/}
        <i
          className="fi fi-sr-layout-fluid"
          onClick={() => setActiveSection("gallery")}
        ></i>

        {/* Collections Section BTN*/}
        <i
          className="fi fi-sr-followcollection"
          onClick={() => setActiveSection("collections")}
        ></i>
        
        {/* Profile Section BTN*/}
        <i
          className="fi fi-sr-user"
          onClick={() => setActiveSection("profile")}
        ></i>

        {/* Settings Section BTN*/}
        <i
          className="fi fi-sr-settings"
          onClick={() => setActiveSection("settings")}
        ></i>
        </div>
    </nav>
  );
};