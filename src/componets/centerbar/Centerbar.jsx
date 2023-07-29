import React from "react";
import "./centerbarStyle.css";
import Share from "../feedshare/Share";
import Post from "../post/Post";
import { Posts } from "../../data";
function Centerbar() {
    return (
        <div className="centerbar">
            <div className="centerbar-wrapper">
                <Share/>
                {Posts.map((p)=>(<Post key={p.id} post={p}/>))}
            </div>
        </div>
    )
}
export default Centerbar;