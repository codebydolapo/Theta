import React, { useState, useEffect } from "react";
import "./CSS/crew.css";
import douglas from "./images/crew/image-douglas-hurley.webp";
import anousheh from "./images/crew/image-anousheh-ansari.webp";
import mark from "./images/crew/image-mark-shuttleworth.webp";
import victor from "./images/crew/image-victor-glover.webp";

function Crew() {
  const [post, setPost] = useState(null);
  const [name, setName] = useState(null);
  const [intro, setIntro] = useState(null);
  const [image, setImage] = useState(null);
  
  const effect = document.getElementsByClassName('circle')

  function switchDouglas() {
    const _post = "commander";
    const _name = "douglas hurley";
    const _intro =
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
    const _image = douglas;

    setPost(_post);
    setName(_name);
    setIntro(_intro);
    setImage(_image);

    effect[0].setAttribute('id', 'effect')
    effect[1].setAttribute('id', '')
    effect[2].setAttribute('id', '')
    effect[3].setAttribute('id', '')
    
  }

  useEffect(() => {
    switchDouglas();
  }, []);

  function switchAnousheh() {
    const _post = "flight engineer";
    const _name = "anousheh ansari";
    const _intro =
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.";
    const _image = anousheh;

    setPost(_post);
    setName(_name);
    setIntro(_intro);
    setImage(_image);

    effect[0].setAttribute('id', '')
    effect[1].setAttribute('id', 'effect')
    effect[2].setAttribute('id', '')
    effect[3].setAttribute('id', '')
    
  }

  function switchMark() {
    const _post = "mission specialist";
    const _name = "mark shuttleworth";
    const _intro =
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
    const _image = mark;

    setPost(_post);
    setName(_name);
    setIntro(_intro);
    setImage(_image);

    effect[0].setAttribute("id", "");
    effect[1].setAttribute("id", "");
    effect[2].setAttribute("id", "effect");
    effect[3].setAttribute("id", "");
    
  }

  function switchVictor() {
    const _post = "pilot";
    const _name = "victor glover";
    const _intro =
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.";
    const _image = victor;

    setPost(_post);
    setName(_name);
    setIntro(_intro);
    setImage(_image);

    effect[0].setAttribute('id', '')
    effect[1].setAttribute('id', '')
    effect[2].setAttribute('id', '')
    effect[3].setAttribute('id', 'effect')
    
  }

  return (
    <div className="crew-main">
      <div className="crew-mainbody">
        <div className="crew-left">
          <div className="expContainer">
            <h1 className="meetCrew">02 meet your crew</h1>

            <h1 className="post">{post}</h1>

            <h1 className="name">{name}</h1>

            <h3 className="intro">{intro}</h3>
          </div>
          <div className="circleCont">
            <div
              className="circle"
              onClick={switchDouglas}
            >
              1
            </div>
            <div
              className="circle"
              onClick={switchAnousheh}
            >
              2
            </div>
            <div
              className="circle"
              onClick={switchMark}
            >
              3
            </div>
            <div
              className="circle"
              onClick={switchVictor}
            >
              4
            </div>
          </div>
        </div>

        <div className="crew-right">
          <img src={image} className="personnelImg" alt = ''/>
        </div>
      </div>
    </div>
  );
}

export default Crew;
