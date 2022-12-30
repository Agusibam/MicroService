import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { uploadfile } from '../Providers/StorageProvider';
import { useState } from 'react';
import { useAuth } from '../Providers/AuthProvider';

export default function ImageFormComponent() {
  const [file, setFile] = useState(null)
  
  
  const { user } = useAuth();

  
  const handleChange = (e) => {
    setFile(e.target.files[0])
    
  }

  const uploadHandler = async (e) =>{

    e.preventDefault()
    
    {file ?
      await uploadfile(file, 'Dashboard',  user.displayName)
    : 
      console.log("no hay nada pa")}
    //const result = await uploadfile(file, 'Dashboard',  user.displayName) 
    } 
   
  return (
    <Form onSubmit={uploadHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Upload file</Form.Label>
          <Form.Control type="file" placeholder="Enter file" onChange={handleChange} />
          
        </Form.Group>
  
        
        <Button variant="primary" type="submit" >
          Upload
        </Button>
      </Form>
  )
}
