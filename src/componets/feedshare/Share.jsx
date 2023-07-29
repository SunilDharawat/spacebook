import React from "react";
import "./shareStyle.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhotoFilm, faSmile, faVideo} from '@fortawesome/free-solid-svg-icons' 
function Share() {
    return (
        <div className="share">
            <div className="share-wrapper">
                <div className="share-top">
                    <img src="./Sunil.png" alt="img" className="share-img" />
                    <input placeholder="What's in your mind..." className="share-input"/>
                </div>
                <hr className="share-hr"/>
                <div className="share-button">
                    <div className="share-options">
                        <div className="share-option">
                            <FontAwesomeIcon icon={faVideo} className="share-icon" />
                            <span className="share-option-text">Live Videos</span>
                        </div>
                        <div className="share-option">
                            <FontAwesomeIcon icon={faPhotoFilm} className="share-icon1"/>
                            <span className="share-option-text">Photos/Videos</span>
                         </div>
                        <div className="share-option">
                             <FontAwesomeIcon icon={faSmile} className="share-icon2" />
                            <span className="share-option-text">Feelings/Activities</span>
                       
                        </div>

                    </div>

                </div>
            
            </div>
        </div>
    )
}
export default Share;