import React, { Component } from "react";
import "./About.css";
import Rajaghatta_Ruchitha_Headshot from "../assets/Rajaghatta_Ruchitha_Headshot.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={Rajaghatta_Ruchitha_Headshot}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Ruchitha Rajaghatta</div>
            <div className="brief_description">
              Hello! I'm Ruchitha! I'm a rising junior at Cornell University, studying Computer Science. <br></br>
              I love:
              <li>problem-solving</li>
              <li>cooking</li>
              <li>being social!</li>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
