import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const navigate = useNavigate();

  const onLoginClicked = async () => {
    alert('login not implemented yet');
  }

  return ( 
    <Container>
      <Row>
        <Col xs={7} className='m-auto'>
          <Card className='pb-5'>
            <Card.Body>
              <h1 className='mb-5'>Login</h1>
              {errorMessage && <Alert variant='danger'>{errorMessage}</Alert>}
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control 
                    value={emailValue}
                    onChange={e => setEmailValue(e.target.value)}
                    type="email" 
                    placeholder="Enter email" 
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control 
                    value={passwordValue}
                    onChange={e => setPasswordValue(e.target.value)}
                    type="password" 
                    placeholder="Password" 
                  />
                </Form.Group>
                
                <Stack gap={3} className='col-md-5 mx-auto'>
                  <Button 
                    disabled={!emailValue || !password}
                    onClick={onLoginClicked}
                    variant="primary" 
                    type="submit" 
                  >
                    Login
                  </Button>

                  <Button 
                    onClick={() => navigate('/forgot-password')}
                    variant="primary" 
                    type="submit"
                  >
                    Forgot your password?
                  </Button>

                  <Button 
                    onClick={() => navigate('/signup')}
                    variant="primary" 
                    type="submit"
                  >
                    Don't have an account? Sign Up
                  </Button>
                </Stack>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
 
export default LoginPage;