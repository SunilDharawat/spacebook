import React from "react";
import "./homeStyle.css";
import Topbar from "../componets/topbar/Topbar";
import Leftbar from "../componets/leftbar/Leftbar";
import Centerbar from "../componets/centerbar/Centerbar";
import Rightbar from "../componets/rightbar/Rightbar";
import { Link } from "react-router-dom";

class Home extends React.Component{
    render(){
        return(
            <div>
                <Link to="/"></Link>
                <Topbar />
                <div className="home-container">
                <Leftbar />
                <Centerbar />
                <Rightbar />
                </div>
               
            </div>
        )
    }
}
export default Home;