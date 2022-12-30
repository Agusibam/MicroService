import { Container } from 'react-bootstrap';
import LoginComponent from '../components/LoginComponent';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAuth } from '../Providers/AuthProvider';
import { useNavigate } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';

export function LoginPage() {

const inputs = {
  email:'',
  password:'',

}

  const { login } = useAuth()
  const [data, setData] = useState(inputs)

  
  
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const  handleChange = ({target: {name, value}}) => setData({...data, [name]: value})

 

  const handleError =(FirebaseError) =>{
  if( FirebaseError === "auth/weak-password"){
        setError("*Constraseña débil")
  }
  else if( FirebaseError === "auth/invalid-email"){
    setError("*Email no válido")
  }
  else if( FirebaseError === "auth/email-already-in-use"){
    setError("*El email ya está en uso")
  }
}


  const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
      setError("")
      await login(data.email, data.password);
      console.log("Login success")
      navigate("/Home");
    } 
    catch (error) {
      console.log(error.code)
      handleError(error.code)
      }
      
    }
  
  return (
    <Container className="m-2 justify-content-center d-flex flex-sm-wrap">
      
        <LoginComponent ></LoginComponent>
        <Form onSubmit={handleSubmit} className="bg-light rounded col-4 m-2  d-flex row flex-fill justify-content-center ">
      <Form.Group className="m-3" controlId="formBasicEmail">
        <Form.Label className="m-2 col-6">Email address</Form.Label>
        <Form.Control className=" " type="text" name="email" placeholder="Enter email" 
        onChange={handleChange}/>
        <Form.Text>
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="m-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" onChange={handleChange}/>
      </Form.Group>
      
      {error && <Form.Label className="m-3 h6 text-danger">{error}</Form.Label>}

      <Button variant="warning" className="m-4 col-3" type="submit">
        Login
      </Button>
      <Alert.Link href="/Register" className="m-2 text-center">Register</Alert.Link>
      <Alert.Link href="/Recovery" className="m-2 text-center">Forgot your Password?</Alert.Link>
    </Form>
          
    </Container>
    
  );
}

export default LoginPage;
