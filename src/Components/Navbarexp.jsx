import React from "react";
import {Navbar,Nav} from "react-bootstrap";
export const Navbarexp=()=>{
    return(
        <div>
             <Navbar bg="dark" variant="dark">
     <Nav className="me-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/contactus">Contact Us</Nav.Link>
      <Nav.Link href="/aboutus">About Us</Nav.Link>
    </Nav>
   </Navbar>
        </div>
    )
}