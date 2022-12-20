import React from "react";
import './CSS/home.css'
import {Link} from 'react-router-dom'


function Home() {
  return (
    <div className="home-main">
      {/* <img src = './assets/shared/icon-hamburger.svg' id = 'hamburger'>

      <img src = './assets/shared/icon-close.svg' id = 'close'> */}

      <div className="home-mainbody">
        <div className="home-left">
          <h3>So, you want to travel to</h3>
          <h1>Space</h1>
          <h4>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </h4>
        </div>

        <div className="home-right">
          <div className="exploreCont">
            <div className="explore">
              <h1>
                <Link to="/destination">Explore</Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
