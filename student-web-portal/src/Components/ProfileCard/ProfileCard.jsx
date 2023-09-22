import React from "react";
import "./ProfileCard.css";
export default function ProfileCard() {


  return (
    <section className="panel-hover d-flex justify-content-center align-items-center p-5 mx-auto flex-wrap col-sm-12 col-md-6 mx-auto">
      <div className="col-sm-12 col-md-4 mx-auto justify-content-center align-items-center">
        <figure className=" d-flex justify-content-center align-items-center ">
          <img
            id="panel-profile-photo"
            className=" mx-0 border border-5 "
            src="./img/1.png"
            alt="bio picture"
    />
        </figure>
      </div>
      <div className="col-sm-12 col-md-8 d-flex flex-column justify-content-center align-items-center">
        <h2 className="text-start h2 p-3 text-black " id="panel-profile-name">
        KRINALBEN PATEL
        </h2>
        <p className="px-5 py-3 text-black h3 text-md-start">
        After graduating from high school, I really wanted to tie my life with
        computer development because I believe technologies are our future!
        </p>
      </div>
    </section>
  );
}
