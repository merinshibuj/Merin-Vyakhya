import { useState } from "react";
import './Home.css';
import './Aboutus.css';
import React from "react";
import Footer from "./Footer";
import Pdetails from "./Pdetails";



function Aboutus() {
  return (
    <div style={{ margin: "30px" }}>
      <img
        width="1190px"
        height="500px"
        src="https://gumlet.assettype.com/deshdoot%2F2021-06%2Fd9eeb89d-2a97-477e-a8db-88e5d32f684a%2FtripXOXO_e1558439144643.jpg?format=auto"
      />
      <br />
      <br />
      <br />
      <h3 style={{ textAlign: "center", fontWeight: "bolder", letterSpacing: "10px", wordSpacing: "20px" }}>ABOUT US</h3>
      <br />
      <br />

      <p style={{ borderBottom:"1px solid black", paddingBottom:"30px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum." Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </p>
      <br />
      <br />
      <br />
      <h3>OUR BACKSTORY</h3>
      <br />
      <br />
      <div className="container" style={{ borderBottom:"1px solid black", paddingBottom:"30px" }}>
        <div style={{ float: "left" }} width="50%">
          <video width="450" height="250" controls preload="auto">
            <source
              src="https://media.geeksforgeeks.org/wp-content/uploads/20190616234019/Canvas.move_.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div style={{ marginTop:"0px", paddingTop:"0px" }}>
            <h3>WHO WE ARE</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. 
          </p>
        </div>
      </div>
      <br/><br/><br/>
      <h3>FOUNDER</h3>
      <div className="container1" >
        
      <div  style={{ marginTop:"0px", paddingTop:"0px"}}>
            
           
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. 
          </p>
        </div>
        <div>
            <img width="400px" src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/02/Female_Portrait_1296x728-header-1296x729.jpg?w=1155&h=2268"/>
        </div>
        
      </div>
      <br/><br/><br/><br/>
      <h3>CO-FOUNDER</h3>
      <br/><br/>
      <div className="container1" style={{ borderBottom:"1px solid black", paddingBottom:"30px"}}>
         <div>
            <img width="400px" src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/02/Female_Portrait_1296x728-header-1296x729.jpg?w=1155&h=2268"/>
        </div>
      <div  style={{ marginTop:"0px", paddingTop:"0px"}}>
            
            
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. 
          </p>
        </div>
      </div>
      <br/><br/><br/>
      <div>
        <Footer />
      </div>
    </div>
    
  );
}
export default Aboutus;
