import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
// import {
//   Button,
//   Container,
//   Form,
//   Nav,
//   Navbar,
//   Offcanvas,
//   Collapse
// } from "react-bootstrap";


const  LogoImg = require("../Assets/Images/new-eden-logo.png");
const Qr = require("../Assets/Images/qr.png");

const boxA = { 
           position: "absolute",
       
          height: "1011px",
          width: "602px",
          left: "0px",
              display: "flex",
          justifyContent: "center",
          alignItems: "center",
         borderRight: "2px solid #EAEAEA",
}
const boxC = {
                   position: "absolute",
       
          height: "1011px",
          width: "602px",
          left: "0px",
              display: "flex",
          justifyContent: "center",
          alignItems: "center",
         borderRight: "2px solid #EAEAEA",
}
const avatar ={
    position: "absolute",
width: "52px",
height: "52px",
left: "75px",
top: "58px"
}
const avatartext = {
          position: "absolute",
width: "92px",
height: "22px",
left: "138px",
top: "64px",
}
const card = {
       position: "absolute",
          width: "392px",
          height: "135px",
          left: "63px",
          top: "160px",
       
          borderRadius: "20px",
          background: "#045441",
        
}
const text1 = {
          position: "absolute",
          width: "245px",
          height: "22px",
          left: "127px",
          top: "328px",
          color: "#B3B3B3"
          
}
const box = {
          

          position: "absolute",
          width: "392px",
          height: "367px",
          left: "63px",
          top: "365px",
}

const text2 = {
          
          position: "absolute",
          width: "274px",
          height: "22px",
          left: "109px",
          top: "782px",
}

const button1 = {
          position: "absolute",
width: "197px",
height: "84px",
left: "49px",
top: "821px",
}
 
const button2 = {
          position: "absolute",
width: "197px",
height: "84px",
left: "261px",
top: "821px",
}
const search = {
          position: "absolute",
          width: "453px",
          height: "66px",
          left: "786px",
          top: "55px",

}
const text3 = {
          position: "absolute",
width: "48px",
height: "22px",
left: "596px",
top: "160px",
}

const alertbox = {
          
}

const account = {
          position: "absolute",
          width: "246px",
          height: "22px",
          left: "1350px",
          top: "76px",
}

const box2 = {
         position: "absolute",
width: "335px",
height: "365px",
left: "1329px",
top: "160px",

 
}
const box3 = {
position: "absolute",
width: "335px",
height: "365px",
left: "1329px",
top: "544px",
background: "#045441",
boxShadow: 'linear-gradient(to bottom,rgba(11, 118, 92, 0.45), rgba(255, 255, 255, 0))',
borderRadius: "18px"
}

const alertBoxx = {
          position: "absolute",
          width: "59px",
          height: "52px",
          // left: "595px",
          top: "58px",
          background: "#F5F5F5",
          borderRadius: "10px",
}

const alertText1 = {
          position: "absolute",
          width: "73px",
          height: "22px",
          left: "83px",
          top: "58px",

}
const alertText2 = {
      position: "absolute",
          width: "73px",
          height: "22px",
          left: "313px",
          top: "58px",
}

function Page1 () {

          const landyBody = {
     
   background: 'linear-gradient(to bottom,rgba(11, 118, 92, 0.45), rgba(255, 255, 255, 0))',
}
          return(


<>
          <div style={landyBody} className="landingBody">

          <div class="container text-center">
          <div class="row">
                    {/* First Container */}
                              <div class="col" style={boxA}>
                                        <div class="row">
                                        <div class="col">
                                                  <div style={avatar} class="bg-info rounded-circle">Hello</div>


                                        </div>
                                                  <div class="col" style={avatartext}>
                                                       Avatar  Text 
                                                   </div>
                                        </div>
                               
                                                          
                                        

                                     
                            
                            
                              <div className="p-4">

                                        <div style={card}>

                                        </div>
                              <p className="card-txt"  style={text1} >
                              Receive Payment with Qr Code
                              </p>
                              
                  <div className="d-flex" style={box} >
                     <img
                src={Qr}
                className="image1 img-fluid rounded-start"
                alt="..."
              />
                  </div>
                   <p className="card-text" style={text2} >
                Request Payment from Customers
                  </p>
                  <div className="d-flex ">
                    <button type="button" className="btn btn-outline-secondary" style={button1}>Request Money</button>
                    <button type="button" className="mx-4 btn btn-outline-secondary" style={button2}>View Request</button>
                  </div>
                </div>
             
         
          </div>



                    {/* Second Container  */}
                    <div  >
                              <div class="col" style={search} >
                             <input type="search" class="form-control" placeholder="Search..." aria-label="Search"></input>
                                <p className="card-text" style={text3}>
                               Alerts</p>        
                              <div class="alertbox" style={alertbox}>

                             <div class="row" >
                              <div class="col">
                              <div style={alertBoxx}>
                              <p>alert</p>
                              </div>
                                                  
                              </div>
                               <div class="col" style={alertText1}>Name</div>

                                <div class="col" style={alertText2}>Price</div>
                             </div>
                             </div>

                              </div>


                    </div>

                    {/* Third Container  */}
                    <div style={boxC}>
                              <div class="col">
                             
 <p className="card-text" style={account}>
                             Account Number: 08071307798 
                  </p>
 <div className="d-flex " style={box2} >
                     <img
                src={Qr}
                className="image1 img-fluid rounded-start"
                alt="..."
              />
                  </div>
                   <div className="d-flex "  style={box3}>
                     {/* <img
                src={Qr}
                className="image1 img-fluid rounded-start"
                alt="..."
              /> */}
                  </div>

                              </div>

</div>

          </div>
          </div>
          
          </div>

</>
          );
}

export default Page1