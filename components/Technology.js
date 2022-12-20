import React, { useState, useEffect } from "react";
import "./CSS/technology.css";
import launch from "./images/technology/image-launch-vehicle-landscape.jpg";
import capsule from "./images/technology/image-space-capsule-landscape.jpg";
import spaceport from "./images/technology/image-spaceport-landscape.jpg";

function Technology() {
  const [heading, setHeading] = useState(null);
  const [description, setDescription] = useState(null);
  const [image, setImage] = useState(null);

  const circle = document.getElementsByClassName("circles");

  function switchLaunch() {
    const _heading = "launch vehicle";
    const _description =
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earths surface to space, usually to Earth orbit or beyond. Our WEB-carrier rocket is the most powerful in operation. Standing 150 metres tall, it s quite an awe-inspiring sight on the launch pad!";

    setHeading(_heading);
    setDescription(_description);
    setImage(launch);

    circle[0].setAttribute("id", "effect");
    circle[1].setAttribute("id", "");
    circle[2].setAttribute("id", "");
  }

  useEffect(() => {
    switchLaunch();
  }, []);

  function switchCapsule() {
    const _heading = "space capsule";
    const _description =
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earths atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";

    setHeading(_heading);
    setDescription(_description);
    setImage(capsule);

    circle[0].setAttribute("id", "");
    circle[1].setAttribute("id", "effect");
    circle[2].setAttribute("id", "");
  }

  function switchSpaceport() {
    const _heading = "spaceport";
    const _description =
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";

    setHeading(_heading);
    setDescription(_description);
    setImage(spaceport);

    circle[0].setAttribute("id", "");
    circle[1].setAttribute("id", "");
    circle[2].setAttribute("id", "effect");
  }

  return (
    <div className="technology-main">
      <div className="technology-mainbody">
        <div className="technology-left">
          <div className="circleDiv">
            <div className="circles" onClick={switchLaunch}>
              1
            </div>
            <div className="circles" onClick={switchCapsule}>
              2
            </div>
            <div className="circles" onClick={switchSpaceport}>
              3
            </div>
          </div>

          <div className="leftBody">
            <h3 className="terminology">The terminology...</h3>
            <h1 className="heading">{heading}</h1>
            <h3 className="description">{description}</h3>
          </div>
        </div>

        <div className="technology-right">
          <img src={image} className="rightImg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Technology;
