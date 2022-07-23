import React from 'react'
// import {
//   Link
// } from "react-router-dom";

 export default function Navbar(props) {
   return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/=navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">{props.contact}</a>
          </li>
          <li className="nav-item" >
            <a className="nav-link active" href="/">  {props.about} </a>
          </li>
           
        </ul>
        <div className="d-flex">
          <div className="bg-primary rounded mx-2"  onClick={()=>{props.enablemode('primary')}} style={{height:'20px',width:'20px' 
          , cursor:'pointer'}} ></div>
          <div className="bg-success rounded mx-2"  onClick={()=>{props.enablemode('success')}} style={{height:'20px',width:'20px' 
          , cursor:'pointer'}} ></div>
          <div className="bg-danger rounded mx-2"  onClick={()=>{props.enablemode('danger')}} style={{height:'20px',width:'20px' 
          , cursor:'pointer'}} ></div>
          <div className="bg-info rounded mx-2"  onClick={()=>{props.enablemode('info')}} style={{height:'20px',width:'20px' 
          , cursor:'pointer'}} ></div>
          <div className="bg-secondary rounded mx-2"  onClick={()=>{props.enablemode('secondary')}} style={{height:'20px',width:'20px' 
          , cursor:'pointer'}} ></div>
     
        </div>


        <form className="d-flex" role="search">
          <input className="form-control my-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>


    <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
  <input className="form-check-input" type="checkbox" onClick={()=>{props.enablemode(null)}} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">Mode</label>
</div>

  </nav>
   )
 }
 