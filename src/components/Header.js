import { Container, Col, Navbar, Nav, InputGroup, FormControl } from 'react-bootstrap';

const Header =()=>{

    return(
<Navbar collapseOnSelect expand="lg" bg="white" >
  <Container>
  <Navbar.Brand href="#home">
  <img src={require('./images/logo1.png')} alt="logo" width="30" height="30" class="d-inline-block align-text-center"/>
     <h5 className="d-inline-block mx-1" id="t60">three60</h5>
  </Navbar.Brand>
  <Navbar.Toggle size = "sm" aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto" id="nav-links">
    <Nav.Link  href="#home" id="header-links">
        <i class="fas fa-layer-group"></i>
     <span> Todos</span>
      </Nav.Link>
      <Nav.Link href="#features" id="header-links"><i class="far fa-file"></i>
      <span>Notes</span>
      </Nav.Link>
      <Nav.Link href="#pricing" id="header-links"><i class="fas fa-link"></i>
      <span>Links</span>
      </Nav.Link>
    </Nav>
    <Col sm={4}>
    <InputGroup size="sm"  className="rounded-pill text-muted " id="input-icons">
    <i class="fas fa-search" id="icon"></i> 
      <FormControl
       id="search"
        type="text"
        placeholder="Search terms"
        aria-label="Input group example"
        aria-describedby="btnGroupAddon"
      />
     </InputGroup>
     </Col>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Header;