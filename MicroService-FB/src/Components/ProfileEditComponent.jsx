import { updateCurrentUser, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { v4 } from 'uuid';
import { upDate, useAuth } from '../Providers/AuthProvider';





export function ProfileEdit() {
  const [values, setValues] = useState(initialState);
  const [file, setFile] = useState(null)
  const { user } = useAuth()


  const initialState = {
    Name:"",
    Bio: "",
    
  };

  
 

  


  const handleInputChange = ({ target: { name, value }}) =>{
   try {
    setValues({ ...values, [name]: value })
   } catch (error) {
    console.log("no se pudo")
   }
    
  }


  const handleChange = (e) => {
    setFile(e.target.files[0])
    
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("funciona rey")
    upDate()
};


  return (
    <>
      <Form className="m-2  col-8 " onSubmit={handleSubmit}>
        <Form.Control type="text" placeholder="Name"  name="Name" onChange={handleInputChange}/>
        <Form.Control type="text" placeholder="Bio"  name="Bio" onChange={handleInputChange}/>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Upload Profile Image</Form.Label>
          <Form.Control type="file" placeholder="Enter file"  />
          
        </Form.Group>
      <Button type="submit" variant="primary">Edit Bio</Button>
      </Form>
    </>
  );
}

