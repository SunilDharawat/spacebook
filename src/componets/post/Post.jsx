 import React from "react";
import "./postStyle.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical} from '@fortawesome/free-solid-svg-icons' 
import { faComment, faHeart, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { Users } from "../../data";

export default function Post({post}){
    const user=Users.filter((u)=>u.id===post.userId)[0].username;
    const userPhoto=Users.filter((u)=>u.id===post.userId)[0].profilePicture;
    return(
        <div className="post">
            <div className="post-wrapper">
                <div className="post-top">
                    <div className="post-top-left">
                        <img src={userPhoto}alt="img" className="post-img"/>
                        <span className="post-user-name">{user}</span>
                        <span className="post-date">{post.date}</span>
                    </div>
                    <div className="post-top-right">
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                    </div>

                </div>
                <div className="post-center">
                    <span className="post-text">{post.desc}</span>
                    <img src={post.photo} alt="img" className="img-post"/>

                </div>
                <div className="post-bottom">
                    <div className="post-button-left">
                        <FontAwesomeIcon icon={faHeart} className="post-icon-one" />
                        <FontAwesomeIcon icon={faThumbsUp}  className="post-icon-two" />
                        <span className="post-like-counter">{post.like} people like it</span>                    
                    </div>
                    <div className="post-button-right">
                    <FontAwesomeIcon icon={faComment} className="post-comment"/>
                        <span className="post-comment-counter">{post.comment} Comments</span>

                    </div>

                </div>

            </div>

        </div>
    )
}