import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAuth } from '../Providers/AuthProvider';
import { useNavigate } from "react-router-dom";




const inputs = {
  email:'',
  password:'',
}

function RegisterPage() {
  const {singup} = useAuth()
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
      await singup(data.email, data.password);
      console.log("registrado")
      //localStorage.setItem()
      navigate("/Profile");
    } catch (error) {
      console.log(error.code)
      handleError(error.code)
        
      }
      
    }
  
  return (
    <Form onSubmit={handleSubmit} className="bg-light rounded  m-2 col-4 d-flex row justify-content-center">
      <Form.Group className="m-3" controlId="formBasicEmail">
        <Form.Label className="m-2 col-6">Email address</Form.Label>
        <Form.Control  type="text" name="email" placeholder="Enter email" 
        onChange={handleChange}/>
        <Form.Text>
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      

      <Form.Group className="m-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check className="m-3" type="checkbox" label="Check me out" />
      </Form.Group>
      {error && <Form.Label className="m-3 h6 text-danger">{error}</Form.Label>}

      <Button variant="warning" className="m-4 col-3" type="submit">
        Register
      </Button>
    </Form>
  );
}

export default RegisterPage;