import React from "react";
import {useState} from 'react'


function Planeteer({planeteer}) {

  const [planeteerLocation, setPlaneteerLocation] =useState([])

  const checkPlaneteerLocation = (planeteer) => {
    return (planeteer).fromUSA ? setPlaneteerLocation('from USA') : setPlaneteerLocation('Working overseas')
  }

  
  // const profileClickHandler = () => {

  // }

  return (
    <li className="cards__item">
      <div className="card">
        <img
          src={planeteer.pictureUrl}
          alt={planeteer.name}
          className="card__image"
          // onClick=''
        />
        <div className="card__content">
          <div className="card__title">{planeteer.name}</div>
          <p className="card__text">{"CONDITIONALLY RENDER BIO OR QUOTE"}</p>
          <div className="card__detail">
            <p>{planeteer.twitter}</p>
            <p>{
             <p>
              {/* I got stuck on this creating a loop. No idea why. RIP*/}
              {/* {checkPlaneteerLocation(planeteer)}
                {planeteerLocation} */}
              </p>
            }
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;
