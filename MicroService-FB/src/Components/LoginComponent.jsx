import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import descarga from"../assets/descarga.svg";
import { useAuth } from '../Providers/AuthProvider';




export default function LoginComponent() {
  const [error, setError] = useState("");
  const { loginWithGoogle } = useAuth();

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


  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/Home");
      console.log("Login success")
    } catch (error) {
      setError(error.message);
      handleError(error.message)
      console.log(error)
    }
  };
  



  
  return (
    <Card className="text-center col-4 ">
      
      <Figure className="m-3 justify-content-center" >
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src= {descarga}
        className="rounded-circle"
      />
    </Figure>
    
  

      <Card.Body>
        
        <Button variant="primary" onClick={handleGoogleSignin}>Login with Google</Button>
      </Card.Body>
      {error && <h1>{error}</h1>}
      
      
    </Card>
  );
}

