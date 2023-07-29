import React from "react";
import "./leftbarStyle.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faBriefcase, faCalendarDay, faGraduationCap, faMessage, faQuestion, faRss, faUserGroup, faVideo } from '@fortawesome/free-solid-svg-icons' 
function Leftbar() {
    return (
        <div className="leftbar">
            <div className="leftbar-wrapper">
                <ul className="leftbar-list">
                    <li className="leftbar-list-items">
                        <FontAwesomeIcon icon={faRss} className="leftbar-icon" />
                        <span>Feed</span>
                    </li>
                     <li className="leftbar-list-items">
                        <FontAwesomeIcon icon={faMessage} className="leftbar-icon" />
                        <span>Chat</span>
                    </li>
                     <li className="leftbar-list-items">
                        <FontAwesomeIcon icon={faVideo} className="leftbar-icon" />
                        <span>Videos</span>
                    </li>
                     <li className="leftbar-list-items">
                        <FontAwesomeIcon icon={faUserGroup} className="leftbar-icon" />
                        <span>Groups</span>
                    </li>
                      <li className="leftbar-list-items">
                        <FontAwesomeIcon icon={faBookmark} className="leftbar-icon" />
                        <span>Bookmark</span>
                    </li>
                     <li className="leftbar-list-items">
                        <FontAwesomeIcon icon={faQuestion} className="leftbar-icon" />
                        <span>Questions</span>
                    </li>
                     <li className="leftbar-list-items">
                        <FontAwesomeIcon icon={faBriefcase} className="leftbar-icon" />
                        <span>Jobs</span>
                    </li>
                     <li className="leftbar-list-items">
                        <FontAwesomeIcon icon={faCalendarDay} className="leftbar-icon" />
                        <span>Events</span>
                    </li>
                    <li className="leftbar-list-items">
                        <FontAwesomeIcon icon={faGraduationCap} className="leftbar-icon" />
                        <span>Courses</span>
                    </li>
                </ul>
                <button className="leftbar-button">Show More</button>
                <hr className="leftbar-hr" />
                <ul className="leftbar-friend-list">
                    <li className="leftbar-friend">
                        <img src="./Sunil.png" alt="" className="leftbar-friend-img" />
                        <span className="leftbar-friend-name">Mr.Sunil</span>
                    </li>
                    <li className="leftbar-friend">
                        <img src="./Sunil.png" alt="" className="leftbar-friend-img" />
                        <span className="leftbar-friend-name">Mr.Sunil</span>
                    </li>
                    <li className="leftbar-friend">
                        <img src="./Sunil.png" alt="" className="leftbar-friend-img" />
                        <span className="leftbar-friend-name">Mr.Sunil</span>
                    </li>
                    <li className="leftbar-friend">
                        <img src="./Sunil.png" alt="" className="leftbar-friend-img" />
                        <span className="leftbar-friend-name">Mr.Sunil</span>
                    </li>
                    <li className="leftbar-friend">
                        <img src="./Sunil.png" alt="" className="leftbar-friend-img" />
                        <span className="leftbar-friend-name">Mr.Sunil</span>
                    </li>

                </ul>

            </div>
        </div>
    )
}
export default Leftbar;