import React, {useEffect, useState} from "react";
import './CSS/destination.css'
import moon from './images/destination/image-moon.webp'
import mars from './images/destination/image-mars.webp'
import europa from './images/destination/image-europa.webp'
import titan from './images/destination/image-titan.webp'

function Destination() {

  const [image, setImage] =  useState(null);
  const [destination, setDestination] =  useState(null);
  const [destDescription, setDestDescription] =  useState(null);
  const [averageDist, setAverageDist] =  useState(null);
  const [estTravelTime, setEstTravelTime] =  useState(null);

  function switchToMoon(){
    const _image = moon
    const _destination = 'moon'
    const _destDesctiption = 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo11 landing sites.'
    const _averageDist = "384,400km";

    const _estTravelTime = "3 days";

    setImage(_image)
    setDestination(_destination)
    setDestDescription(_destDesctiption)
    setAverageDist(_averageDist)
    setEstTravelTime(_estTravelTime)
  }

  useEffect(()=>{
    switchToMoon()
  }, [])

  function switchToMars() {
    const _image = mars;
    const _destination = "mars";
    const _destDesctiption =
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
    const _averageDist = '225 mil. km';

    const _estTravelTime = "9 months";

    setImage(_image);
    setDestination(_destination);
    setDestDescription(_destDesctiption);
    setAverageDist(_averageDist);
    setEstTravelTime(_estTravelTime);
  }

  function switchToEuropa() {
    const _image = europa;
    const _destination = "europa";
    const _destDesctiption =
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
    const _averageDist = "628 mil. km";

    const _estTravelTime = "3 years";
    setImage(_image);
    setDestination(_destination);
    setDestDescription(_destDesctiption);
    setAverageDist(_averageDist);
    setEstTravelTime(_estTravelTime);
  }

  function switchToTitan() {
    const _image = titan;
    const _destination = "titan";
    const _destDesctiption =
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
    const _averageDist = "1.6 bil. km";
    const _estTravelTime = "7 years";
    setImage(_image);
    setDestination(_destination);
    setDestDescription(_destDesctiption);
    setAverageDist(_averageDist);
    setEstTravelTime(_estTravelTime);
  }

  return (
    <div className="destination-main">
      <div className="destination-mainbody">
        <div className="destination-left">
          <h3>01 Pick Your Destination</h3>
          <img className="planets" src={image} alt = ''/>
        </div>

        <div className="destination-right">
          <div className="destNavBar">
            <div className="moon">
              <a onClick={switchToMoon}>Moon</a>
            </div>
            <div className="mars">
              <a onClick={switchToMars}>Mars</a>
            </div>
            <div className="europa">
              <a onClick={switchToEuropa}>Europa</a>
            </div>
            <div className="titan">
              <a onClick = {switchToTitan}>Titan</a>
            </div>
          </div>

          <h1 className="destHeader">{destination}</h1>

          <h3 className="destDescription">{destDescription}</h3>

          <hr />

          <div className="footer">
            <div className="rightFooter">
              <h3>avg distance</h3>
              <h1 className="averageDist">{averageDist}</h1>
            </div>

            <div className="leftFooter">
              <h3>est travel time</h3>
              <h1 className="estTravelTime">{estTravelTime}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
