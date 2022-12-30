import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAuth } from '../Providers/AuthProvider';







function RecoveryPage() {
  const { resetPassword } = useAuth()
  const [data, setData] = useState('')
  const [error, setError] = useState('')
  
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
  
  const handleResetPassword = async (e) => {
    e.preventDefault();
      if (!data) return setError("Write an email to reset password");
      try {
        console.log(data.email)
        await resetPassword(data.email);
        setError('We sent you an email. Check your inbox')
      } catch (error) {
        setError(error.message);
        handleError(error.message)
      }
    };

    const  handleChange = ({target: {name, value}}) => {
      console.log(name, value)
      setData({...data, [name]: value})
      console.log(setData)
    }



  return (
    <Form onSubmit={handleResetPassword} className="bg-light rounded  m-2 col-6 d-flex row justify-content-center">
      <Form.Group className="m-3 justify-content-center" controlId="formBasicEmail">
        <Form.Label className="m-2 col-6 h1 text-center">User Email</Form.Label>
        <Form.Control className=" " type="text" name="email" placeholder="Enter email" onChange={handleChange} />
        
      </Form.Group>

    
      {error && <Form.Label className="m-3 h6 text-danger">{error}</Form.Label>}

      <Button variant="warning" className="m-4 col-3" type="submit">
        Send 
      </Button>
    </Form>
  );
}

export default RecoveryPage;