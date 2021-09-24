import React from "react";
import ReactBootstrap, {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button, Badge
} from "react-bootstrap";

function Header() {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="#" className="mx-3">
          E-Cart
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-between">
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button
              variant="outline-secondary"
              style={{ backgroundColor: "white" }}
            >
              <i class="fas fa-search fa-x" style={{ color: "black" }}></i>
            </Button>
          </Form>
          <Nav
            className="mr-auto my-2 my-lg-0 d-flex"
            style={{ maxHeight: "100px" }}
            navbarScroll style={{paddingRight: "20px"}}
          >
            <NavDropdown title="Akanksha" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              <i class="fas fa-heart" style={{color:"#adb5bdcf"}}></i>
            </Nav.Link>
            <Nav.Link href="#" disabled>
              <i class="fas fa-shopping-cart" style={{color:"#0d6efd", position: "relative"}}></i>
              <Badge pill bg="light" text="dark" className="pb-2" style={{position: "absolute", top: "3px"}}>0</Badge>

            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
