import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../Providers/AuthProvider';
import { deleteFunc, deleteImagen } from '../Providers/StorageProvider';


export default function DashboardComponent(props) {

  const { user } = useAuth();


    

   const handleDelete = async (e) =>{
      e.preventDefault()
      
       try {
         await deleteImagen(e.target.dataset.change)
         deleteFunc(e.target.dataset.id,  user.displayName)
       } catch (error) {
         console.log(error)
       }
      
    }
    
    const Images = props.Images
    
    
        
    return (
        <>
          {props.Images.map(link => (
            <Card style={{ width: '18rem' }} bg="warning"  key= {link.id} className="m-2">   
            <img src={link.url} className="card-img-top" alt="{link.name}"></img>
            <Card.Body>
            <Card.Title className="mb-2 ">{link.name}</Card.Title>
            <Card.Title className="mb-2 ">{link.update}</Card.Title>
            
          </Card.Body>
          <Button variant="danger" className="m-2" data-id={link.id} data-change={link.fullPath} onClick={handleDelete}>Delete</Button>
          </Card> 
    ))}
        </>
          )
    
}      

