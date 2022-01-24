import { Container, Col, Row, Form, Button } from 'react-bootstrap';
const Login = () => {

    return(
        <Container className=" bg-light min-vh-100">
        <Row className="py-4 bg-white">
          <Col>
          < div className="px-5 mx-3 my-1 bg-primary">
            Welcome to three60
          </div>
          </Col>
          <Col >
          < div className="px-5 mx-3 my-1 bg-white">
          <div className="mb-2">
          <img src={require('./images/logo1.png')} alt="logo" width="30" height="30" class="d-inline-block align-text-center"/>
     <h5 className="text-primary d-inline-block mx-1" id="t60">three60</h5>
          </div>
        <h3 className="fw-bold mb-3">Create Account</h3>
          <Form>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label id="labels">Email/Username</Form.Label>
    <Form.Control id="labels" type="email" placeholder="Email/Username" />
  </Form.Group>
  <Form.Group className="mb-4" controlId="formGroupPassword">
    <Form.Label id="labels">Password</Form.Label>
    <Form.Control id="labels" type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-4" controlId="formGroupPassword">
    <Form.Label id="labels">Confirm Password</Form.Label>
    <Form.Control id="labels" type="password" placeholder=" Confirm Password" />
  </Form.Group>
  <Button  variant="primary" size="md" className="w-100 mb-3">
 <span id="input-text">Sign Up</span>
  </Button>
  <Button id="signIn-input"  className="w-100 mb-3 align-text-center">
  <img src={require('./images/google1.png')} alt="icon" width="12" height="12" class="d-inline-block"/>
   <span className="d-inline-block mx-2">Sign up with Google</span>
  </Button>
</Form>
<p
 className="mb-4"
  id='signup-text'
  >
  <span >Already have an account?</span>
  <a className="mx-1"  href="/"> Sign in to your account here</a>
  </p>
<p className="text-muted fs-6">Privacy Policy and Terms of Service</p>
</div>
          </Col>
        </Row>
      </Container>
    )
}

export default Login;