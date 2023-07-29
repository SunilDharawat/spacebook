import React from "react";
import "./topbarStyle.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons' 
import { faUser, faBell, faComment } from "@fortawesome/free-regular-svg-icons";
 
function Topbar(){
        return(
            <div className="topbar-container">
                <div className="topbar-left">
                 <span className="logo">SpaceBook</span>
                </div>
                <div className="topbar-center">
                <div className="search-bar">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <input className="search-input" placeholder="Search for Friends, Post or Videos"/>
                </div>
                </div>
                <div className="topbar-right">
                    <div className="topbar-links">
                        <span className="topbar-link">Homepage</span>
                        <span className="topbar-link">Timeline</span>
                    </div>
                    <div className="topbar-icons">
                        <div className="topbar-icon-items">
                            <FontAwesomeIcon icon={faUser} className="icons" />
                            <span className="topbar-icon-badge">50</span>      
                        </div>
                         <div className="topbar-icon-items">
                            <FontAwesomeIcon icon={faBell} className="icons"/>
                            <span className="topbar-icon-badge">50</span>      
                        </div>
                         <div className="topbar-icon-items">
                            <FontAwesomeIcon icon={faComment} className="icons"/>
                            <span className="topbar-icon-badge">50</span>      
                        </div>
                    </div>
                   <img className="topbar-img" src="Sunil.png" alt="sunil-img" />
                </div>
            </div>
        )
    }
export default Topbar;
