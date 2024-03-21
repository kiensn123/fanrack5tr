
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Mennu(){
    // return(
    //     <>
    //     <div className='Navbar'>
    //         <div className='Nav'>
    //             <div className='conten'>
    //                 <h1>NAV</h1>
    //             </div>
    //             <i class="bi bi-house"></i>
    //             <NavLink to={"/"} className="nav-link">Home</NavLink>
    //             <NavLink to={"/hentai"} className="nav-link">Hentai</NavLink>
 
    //         </div>
          
    //   </div>
    //     </>
    // )
        
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand >Bài Thi Kiên trịnh</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                    <NavLink to={"/"} className="nav-link">Home</NavLink>
                    <NavLink to={"/hentai"} className="nav-link">More information</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    
    
}

export default Mennu