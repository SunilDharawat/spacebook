import React from "react";
import "./rightStyle.css";
function Rightbar() {
    return (
       <div className="rightbar">
        <div className="rightbar-wrapper">
            <div className="birthday-container">
                <img src="./birthday.jpg" alt="" className="brithday-img" />
                <span className="birthday-text"><b>Sunil Dharawat</b> and <b>2 more people </b> have a birthday today.</span>
            </div>
            <img src="./advertisement.jpg" className="adv-img" alt="" />
            <h4 className="rightbar-title"> Online Friends </h4>      
            <ul className="friend-list">
             <li className="right-friend">
                <div className="rightbar-profile-img">
                    <img src="./Sunil2.jpg" alt="" className="friend-img"/>
                    <span className="rightbar-online"></span>
                </div>
                <span className="rightbar-user">Sunil Dharawat</span>

             </li>
             <li className="right-friend">
                <div className="rightbar-profile-img">
                    <img src="./Sunil2.jpg" alt="" className="friend-img"/>
                    <span className="rightbar-online"></span>
                </div>
                <span className="rightbar-user">Sunil Dharawat</span>

             </li>
             <li className="right-friend">
                <div className="rightbar-profile-img">
                    <img src="./Sunil2.jpg" alt="" className="friend-img"/>
                    <span className="rightbar-online"></span>
                </div>
                <span className="rightbar-user">Sunil Dharawat</span>

             </li>
             <li className="right-friend">
                <div className="rightbar-profile-img">
                    <img src="./Sunil2.jpg" alt="" className="friend-img"/>
                    <span className="rightbar-online"></span>
                </div>
                <span className="rightbar-user">Sunil Dharawat</span>

             </li>
            </ul>  
        </div>
       </div>
    )
}
export default Rightbar;