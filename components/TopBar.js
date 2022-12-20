import React from "react";
import './CSS/topbar.css'
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <div className="topbar-main">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
        <g fill="none" fill-rule="evenodd">
          <circle cx="24" cy="24" r="24" fill="#FFF" />
          <path
            fill="#0B0D17"
            d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
          />
        </g>
      </svg>
        <div className="navBar">
          <div className="nav">
            <Link className = 'link' to="/">
              <b>00</b> Home
            </Link>
          </div>
          <div className = 'nav'>
            <Link className = 'link' to="/destination">
              <b>01</b> Destination
            </Link>
          </div>
          <div className = 'nav'>
            <Link className = 'link' to="/crew">
              <b>02</b> Crew
            </Link>
          </div>
          <div className = 'nav'>
            <Link className = 'link' to="/technology">
              <b>03</b> Technology
            </Link>
          </div>
        </div>
    </div>
  );
}

export default Topbar;
