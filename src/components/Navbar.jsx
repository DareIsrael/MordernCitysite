import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import "./nav.css";
// import { Link } from "react-router-dom";

function NavbarCom() {
  return (

    <Navbar bg="warning" expand="lg" fixed="top">
    <Container fluid>
     <h2 className="navcity"><span className="navbrand"><img  className="navImg" src="photos/icons8-home-96.png"></img>Mordern</span>City</h2>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="ms-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link  as={Link} to="/home" className="nav-ul" >Home</Nav.Link>
         <Nav.Link  as={Link} to="/about" className="nav-ul" >About</Nav.Link>
         <Nav.Link  as={Link} to="/faqs" className="nav-ul" >FAQs</Nav.Link>
         <Nav.Link  as={Link} to="/contact" className="nav-ul" >Contact</Nav.Link>
          
          
        </Nav>
       
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}




//     <Navbar clas bg="warning" expand="lg"  fixed="top" >
//       <Container fluid>
//         <Navbar.Brand  className="nav-doc" href="#">City</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav 
            
//             className="ms-auto my-2 my-lg-0 navdoc "
            
//             style={{ maxHeight: '100px'}}
//             navbarScroll
//           >
        
//             <Nav.Link  as={Link} to="/home" className="nav-ul" >Home</Nav.Link>
//             <Nav.Link  as={Link} to="/about" className="nav-ul" >About</Nav.Link>
//             <Nav.Link  as={Link} to="/faqs" className="nav-ul" >FAQs</Nav.Link>
//             {/* <Nav.Link  as={Link} to="/blog" className="nav-ul" >Blog</Nav.Link>
//             <Nav.Link  as={Link} to="/pricing" className="nav-ul" >Pricing</Nav.Link> */}
//             <Nav.Link  as={Link} to="/contact" className="nav-ul"  href="#action2">Contact</Nav.Link>
//             <img className="nav-img" src="photos/prince.jpg"></img>
            
//             </Nav>
         
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   )
// }


export default NavbarCom;