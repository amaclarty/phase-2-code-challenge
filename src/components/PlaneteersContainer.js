import React from "react";
import Planeteer from "./Planeteer";
import {useState, useEffect} from 'react'
 
function PlaneteersContainer() {
  const [planeteers, setPlaneteers] =useState([])

  useEffect( () => {
      const getPlaneteers = async () => {
      let req = await fetch("http://localhost:8003/planeteers")
      let res = await req.json()
      setPlaneteers(res)
      }
    getPlaneteers()
    }, [])
    console.log(planeteers)

  return (
    <ul className="cards">
      {planeteers.map((planeteer) => {
        return(
        <Planeteer planeteer={planeteer} key={planeteer.id}/>
        )
      })}
    </ul>
  );
}

export default PlaneteersContainer;
