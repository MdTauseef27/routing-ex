import React from "react";
import {Navbar,Nav} from "react-bootstrap";
import {Home} from "./Home";
import {Contactus} from "./Contactus";
import {Aboutus} from "./Aboutus";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
   <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/contactus">
            <Contactus />
          </Route>
          <Route path="/aboutus">
            <Aboutus />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
        </div>
    )
}