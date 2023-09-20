import React from 'react'

export default function Thumbnail() {



  return (

    <div class="col-sm-6 col-md-3  mb-5 d-flex justify-content-center align-items-center">
    <img class="profile-thumbnail" onmouseover="showProfile(1)" onmouseout="hideProfile()" class="  border border-5 " src="./img/1.png"
      alt="bio picture">
  </div>


  )
}
