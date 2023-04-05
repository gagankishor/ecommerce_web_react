import {
  Container,
  Navbar,
  Button,
  Form,
  Nav,
  NavDropdown,
  Col,
  Row
  
} from "react-bootstrap";
import style from "./Navbar.css"
import { FaShoppingCart,FaUserTie } from 'react-icons/fa';
const Navbar1 = () => {
return(
  <>
  <div>
    <Row >
      <Col>
    <img className="logo ms-2" sm={1} src={require("../../../image/logo1.png")} alt="" />
  </Col>
    <Col sm={9} className="mt-2 "> <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          
        </Form>
    </Col>
    <Col className="mt-2 icon1 ">
      
      <FaShoppingCart className="icon1 "/>
      {/* </Col>
      <Col className="mt-2"> */}
      <FaUserTie className="icon1 ms-3"/>

    </Col>
  </Row></div>
    <Navbar className="Navcss"    expand="lg">
    <Container fluid>
      <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link>
          <NavDropdown title="Link" id="navbarScrollingDropdown">
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
            Link
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
)
};
export default Navbar1;