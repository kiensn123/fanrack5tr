import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";


function Mennu(){
    return(
        <>
        <div className='Navbar'>
            <div className='Nav'>
                <div className='conten'>
                    <h1>NAV</h1>
                </div>
                <i class="bi bi-house"></i>
                <NavLink to={"/"} className="nav-link">Home</NavLink>
                <NavLink to={"/hentai"} className="nav-link">Hentai</NavLink>
 
            </div>
          
      </div>
        </>
    )
        
    
}

export default Mennu