import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/technology.module.css'
// import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react'

const Technology: NextPage = () => {

    const active = "w-[3rem] h-[3rem] rounded-full border-[1px] border-white flex items-center justify-center cursor-pointer bg-white text-black"
    const inactive = "w-[3rem] h-[3rem] rounded-full border-[1px] border-white flex items-center justify-center cursor-pointer text-white hover:bg-white hover:text-black"

    const [launchEffect, setLaunchEffect] = useState(inactive)
    const [capsuleEffect, setCapsuleEffect] = useState(inactive)
    const [portEffect, setPortEffect] = useState(inactive)

    const [heading, setHeading] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
  
    // const circle = document.getElementsByClassName("circles");
  
    function switchLaunch() {
      const _heading = "launch vehicle";
      const _description =
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earths surface to space, usually to Earth orbit or beyond. Our WEB-carrier rocket is the most powerful in operation. Standing 150 metres tall, it s quite an awe-inspiring sight on the launch pad!";
  
      setHeading(_heading);
      setDescription(_description);
      setImage("/images/technology/image-launch-vehicle-landscape.jpg");
  
      setLaunchEffect(active)
      setCapsuleEffect(inactive)
      setPortEffect(inactive)
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
      setImage("/images/technology/image-space-capsule-landscape.jpg");
  
      setLaunchEffect(inactive)
      setCapsuleEffect(active)
      setPortEffect(inactive)
    }
  
    function switchSpaceport() {
      const _heading = "spaceport";
      const _description =
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
  
      setHeading(_heading);
      setDescription(_description);
      setImage("/images/technology/image-spaceport-landscape.jpg");
  
      setLaunchEffect(inactive)
      setCapsuleEffect(inactive)
      setPortEffect(active)
    }

  return (
    <div className={` h-[100vh] w-[100vw] font-opensans flex flex-col justify-end items-center ${styles.technology_main}`}>
      <Head>
        <title>Solaris | Technology</title>
        <meta name="description" content="Solaris: CodeByDolapo" />
        <link rel="icon" href="/icons/logo.png" />
      </Head>

      <Navbar/>

      <div className={`w-[100%] h-[80vh] flex justify-between items-around`}>
        <div className={`w-[55%] h-full flex justify-around items-center`}>
          <div className={`w-[10%] h-[20rem] flex flex-col items-center justify-around`}>
            <div className={launchEffect} onClick={switchLaunch}>
              1
            </div>
            <div className={capsuleEffect} onClick={switchCapsule}>
              2
            </div>
            <div className={portEffect} onClick={switchSpaceport}>
              3
            </div>
          </div>

          <div className={`w-[80%] h-[20rem] flex flex-col justify-around items-left`}>
            <h3 className={`uppercase text-white text-base tracking-wide`}>The terminology...</h3>
            <h1 className={`uppercase text-white text-[2.5rem] tracking-wider`}>{heading}</h1>
            <h3 className={`text-white`}>{description}</h3>
          </div>
        </div>

        <div className={`w-[45%] h-full flex items-center justify0center`}>
          <img src={image} className={`w-full h-auto rounded-xl`} alt="" />
        </div>
      </div>

    </div>
  );

}

export default Technology
