import React from "react";
import "./Thumbnail.css";
export default function Thumbnail(index) {
  return (
    <div className="col-sm-6 col-md-3  mb-5 d-flex justify-content-center align-items-center">
      <img
        onmouseover="showProfile(1)"
        onmouseout="hideProfile()"
        className="profile-thumbnail  border border-5 "
        src={`./img/${index}.png`} // use string interpolation 
        alt="bio picture"
      />
    </div>
  );
}
