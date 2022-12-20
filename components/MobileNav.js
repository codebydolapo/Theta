import React, {useState, useEffect} from "react";
import "./CSS/mobilenav.css";
import { Link } from "react-router-dom";
import Menu from '@mui/icons-material/Menu'
import Cancel from '@mui/icons-material/Cancel'

function MobileNav() {

    const [nav, setNav] = useState(false)

    const [media, setMedia] = useState(false);

    
    const query = window.matchMedia("(max-width: 700px)");


    function navigation(){
      if (query.matches){setNav(true)}
    }

    function removeNav(){
        setNav(false)
    }

    useEffect(()=>{
      removeNav()
    }, [])

  return (
    <div className="mobilenav-main">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        className="mobile-svg"
      >
        <g fill="none" fill-rule="evenodd">
          <circle cx="24" cy="24" r="24" fill="#FFF" />
          <path
            fill="#0B0D17"
            d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
          />
        </g>
      </svg>

      <Menu className="mobile-menu" onClick={navigation} />

      {nav && (
        <div className="mobile-navbar">
          <div className="mobile-nav">
            <Link className="mobile-link" to="/" onClick={removeNav}>
              <b>00</b> Home
            </Link>
          </div>
          <div className="mobile-nav">
            <Link className="mobile-link" to="/destination" onClick={removeNav}>
              <b>01</b> Destination
            </Link>
          </div>
          <div className="mobile-nav">
            <Link className="mobile-link" to="/crew" onClick={removeNav}>
              <b>02</b> Crew
            </Link>
          </div>
          <div className="mobile-nav">
            <Link className="mobile-link" to="/technology" onClick={removeNav}>
              <b>03</b> Technology
            </Link>
          </div>
          <Cancel className="mobile-cancel" onClick={removeNav} />
        </div>
      )}
    </div>
  );
}

export default MobileNav;
