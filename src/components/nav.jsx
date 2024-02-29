import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import img9 from "../assets/images/car3.jpeg"

function Menu() {
  return (
    <Navbar expand="lg" className="bg-primary">
      <Container>
        <NavLink to="/">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Navbar.Brand href="#home"><img src={img9} width="40px" height="40px" alt="" /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink to="/" style={{ color: "white", textDecoration: "none" }}>
                HOME
              </NavLink>
            </Nav.Link>

            <Nav.Link>
              <NavLink to="/about" style={{ color:"pink", textDecoration: "none" }}>
                ABOUT
              </NavLink>
            </Nav.Link>

            <Nav.Link>
              <NavLink to="/product" style={{ color: "white", textDecoration: "none" }}>
                PRODUCT
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/blog" style={{ color:"pink", textDecoration: "none" }}>
                BLOGS
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/Register" style={{ color:"white", textDecoration: "none" }}>
                REGISTER
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/Login" style={{ color:"pink", textDecoration: "none" }}>
                LOGIN
              </NavLink>
            </Nav.Link>

            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </NavLink>
        
      </Container>
    </Navbar>
  );
}

export default Menu;