import React, { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";


function Signup() {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Fullname", fullname);
        console.log("Email", email);
        console.log("Password", password);
        alert("Your response updated successfully: "+ fullname)
    }

    return (
        <div className="outer-box">
            <div className="inner-box">
                <header className="signup-header">
                    <h1>Spacebook Login </h1>
                    <p>It just takes 30 seconds</p>
                </header>
                <main className="signup-body">
                    <form name="demo" action="#" >
                        <p>
                            <label htmlFor="fullname">Full Name</label>
                            <input type="text" className="fullname" value={fullname} name="fullname" placeholder="enter your name" required onChange={(e)=>setFullname(e.target.value)}/>
                        </p>
                         <p>
                            <label htmlFor="email">Your Email</label>
                            <input type="email" className="email" value={email} name="email" placeholder="enter your email" required onChange={(e)=>setEmail(e.target.value)}/>
                        </p>
                         <p>
                            <label htmlFor="password">Your Password</label>
                            <input type="password" className="password" value={password} name="password" placeholder="at least 8 characters" required onChange={(e)=>setPassword(e.target.value)} />
                        </p>
                        <p>
                            {/* <input type="submit"  className="submit" value="Login"  onClick={handleSubmit}/> */}
                            <Link to="/" className="submit" onClick={handleSubmit} >Login</Link>
                         </p>
                    </form>
                </main>
                <footer className="signup-footor">
                  <p>Already hava an Account? <a href="">Create Account</a></p>
                </footer>
            </div>    
            <div className="circle c1"></div>
            <div className="circle c2"></div>
       
        </div>
)
}
export default Signup;
