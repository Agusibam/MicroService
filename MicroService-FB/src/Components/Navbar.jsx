import { Navbar, Nav, Container, NavDropdown, Figure } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import { useAuth } from "../Providers/AuthProvider"
import descarga from"../assets/descarga.svg";

const NavBarExample = () => {

  const {user, logOut} = useAuth()
  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error(error.message);
    }
  };

  
  
  
  
    return(
      <>    
      
      <Navbar bg="light" expand="lg" className="col-12 ">
       <Container >
           <Navbar.Brand as={Link} to="/home" >React-Bootstrap</Navbar.Brand>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="me-auto">
               
               <Nav.Link as={Link} to="/contact">Contact</Nav.Link>       
               <Nav.Link as={Link} to="/categories">Categories</Nav.Link> 
          {user ?
            <Nav.Link as={Link} to="/Dashboard">Dashboard</Nav.Link>  
            :
            <Nav.Link as={Link} to="/Dashboard"></Nav.Link> 
        }
               
                     
           </Nav>

           <Nav className="d-flex row justify-content-center align-items-center">
          {user ? 
          <nav className="d-flex justify-content-center align-items-center" >
          <Figure.Image width={40} height={40} alt="200x200" src= {
          user.photoURL
          ?
          user.photoURL.toString().slice(0, -4) + "400-c"
          :
          descarga
        } className="rounded-circle m-0" 
          referrerPolicy="no-referrer"
          />

          <NavDropdown title={user.displayName} id="basic-nav-dropdown">
              <NavDropdown.Item href="/Profile">Profile</NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Home" onClick={handleLogOut}>
                LogOut
              </NavDropdown.Item>
            </NavDropdown> 
            </nav>
            : 
            <Nav.Link as={Link} to="/Login">Login</Nav.Link>
            }
              
           </Nav>
           </Navbar.Collapse>
       </Container>
       </Navbar>  
      </> 
    )
}
export default NavBarExample