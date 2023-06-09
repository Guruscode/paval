import React from "react";
import { useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  Offcanvas,
  Collapse
} from "react-bootstrap";
import '../styles/main.css';
import background  from "../Assets/Images/Background.png"
import { BsFillPhoneFill } from 'react-icons/bs';
import { BiWallet } from 'react-icons/bi';
import { AiOutlineScan  } from 'react-icons/ai';
// const Background = require("../Assets/Images/Background.png");
const LogoImg = require("../Assets/Images/logo.png");
const Qr = require("../Assets/Images/qr.png");
const Bar = require("../Assets/Images/bar.png");

function LandingPage () {
const navigate = useNavigate()

//STYLES 
const myLogo = {
          width: "322px",
          height: "222px",
          marginLeft: "-250px",
          top: "0px"

}
const landyBody = {
     
   background: 'linear-gradient(to bottom,rgba(11, 118, 92, 0.30), rgba(255, 255, 255, 0))',
}
const supportButton = {
          width: "150px",
          height: "61px",
          left: "835px",
          top: "83px",
   
          
} 
const supportButtona = {
       color: "#045441",
       width: "104px",
          height: "223px",
          left: "863px",
          top: "97px",
}

const hero1 = {
          display: 'flex',
          justifyContent:'center',
          alignItems:'center',
          height: '62vh',
          position: "static"
}

const heroh5 = {
          color: "black",
          fontSize: 36,
          textAlign: "center",
     
}
const herop = {
         color: "black",
           fontSize: 24,
             textAlign: "center",
}

const heroqr = {
          width: "275px",
          height: "300px",
              justifyContent: "center",
          alignItems: "center",
          marginLeft: "85px",
          }

const button ={
       backgroundColor: "white",
       color: "black",
          width: "200px",
          height: "64px",
          left: "40px",
          top: "767px",
          justifyContent: "center",
          alignItems: "center",
           marginLeft: "110px",
         
          
}

const boxh5 = {
          position: "absolute",
          width: "234px",
          height: "10px",
          left: "50px",
          top: "101px",
          color: "white"
          }
const boxh6 = {
          position: "absolute",
          width: "245px",
          height: "29px",
          left: "50px",
          top: "200px",
          color: "white"
          }
const boxh7 = {
          position: "absolute",
          width: "200px",
          height: "29px",
          left: "50px",
          top: "250px",
          color: "white"
          }
const boxh8 = {
          position: "absolute",
          width: "245px",
          height: "29px",
          left: "50px",
          top: "300px",
          color: "white"
          }
return(
    <div style={landyBody} className="landingBody">
      <div className="navigation container">
        <Navbar expand={"sm"} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="/">
               <img src={LogoImg} alt="Build" style={myLogo} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"sm"}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${"sm"}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${"sm"}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"sm"}`}>
                  LEMS
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                      <Nav.Link href="#about"><div class="dropdown">
  <button class="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">en
  <span class="caret"></span></button>
  <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
    <li role="presentation"><a role="menuitem" href="#">HTML</a></li>
    <li role="presentation"><a role="menuitem" href="#">CSS</a></li>
    <li role="presentation"><a role="menuitem" href="#">JavaScript</a></li>
    <li role="presentation" class="divider"></li>
    <li role="presentation"><a role="menuitem" href="#">About Us</a></li>
  </ul>
</div></Nav.Link>
                         <Form className="d-flex">
                      <Button style={supportButton} className="loginBtn" variant="outline-secondary" onClick={() => navigate('/login')}>
                              <a style={supportButtona}>Support</a></Button>
                         </Form>
                
          
                </Nav>
               
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
        {/* hero 1 */}
      <div className="lHero1 container" >
        <div className="mb-3 border-0 mt-5">
          <div className="row g-0">
            <div className="col-md-8" style={hero1}>
              <div className="">
                <h5 style={heroh5}>Use Pavel Alert on Computer</h5>
                <div className="p-4">
                  <p className="card-text" style={herop}>
                  Scan the QR Code below to begin
                  </p>
                 
                  <div className="d-flex" style={heroqr}>
                     {/* <img
                src={Qr}
                className="image1  rounded-start"
                alt="..."
              /> */}
              <img
              class="image"
                src={Bar}
                className="image1"
                alt="..."
                
                
              />
                  </div>
                   <p className="card-text" style={herop}>
                 Can’t Connect?
                  </p>
                  <button type="button" className="btn btn-dark" style={button}>Generate New QR</button>
                </div>
              </div>
            </div>


            <div className=" col-md-4 parent" >
             <div className="" class="mainbox">
                    <h3 className="card-tittle fw-bold" style={boxh5}>Pavel Linking Guide</h3>
                   <p className="card-text" style={boxh6}>
                  <BsFillPhoneFill /> Open Pavel on your phone
                  </p> <br></br>
                    <p className="card-text" style={boxh7} >
                  <BiWallet /> Go to Wallet Page Scan QR
                  </p>
                    <p className="card-text" style={boxh8}>
                  <AiOutlineScan /> Point your phone at this screen to confirm login
                  </p>
             </div>
           
            </div>
          </div>
        </div>
      </div>
      {/* hero 1 */}


   {/* sticky footer */}
        <div className="stickyFooter">
          {/* <!-- Footer --> */}
          <footer className=" text-center text-white">
            {/* <!-- Grid container --> */}
            <div className="container p-4">
              {/* <!-- Section: Links --> */}
             
              {/* <!-- Section: Form --> */}
              <section className="">
             
                  {/* <!--Grid row--> */}
                  <div className="row d-flex justify-content-center">
                    {/* <!--Grid column--> */}
                    <div className="col-auto" class="footer">
                      <p className="pt-2 mt-3" >
                        <h6> ©2023 Build— All Rights Reserved</h6>
                      </p>
                    </div>
                    {/* <!--Grid column--> */}

                    {/* <!--Grid column--> */}
                    <div className="col-md-5 col-12">
                      {/* <!-- Email input --> */}
                      <div className="form-outline form-white mt-3">
                        <div className="row">
                         
                         
                        </div>
                      </div>
                    </div>
                    {/* <!--Grid column--> */}

                    {/* <!--Grid column--> */}
                    <div className="col-auto">

          
                    </div>
                    {/* <!--Grid column--> */}
                  </div>
                  {/* <!--Grid row--> */}
           
              </section>
              {/* <!-- Section: Form --> */}
            </div>
            {/* <!-- Grid container --> */}
          </footer>
          {/* <!-- Footer --> */}
        </div>
        {/* sticky footer */}



</div>
 );
}

export default LandingPage