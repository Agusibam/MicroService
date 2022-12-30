import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { deleteFunc } from '../Providers/ContactProvider';


export default function CardsComponent(props) {

const handleDelete = (e) =>{
  e.preventDefault()
  deleteFunc(e.target.dataset.id)
}


    
return (
    <>
    {props.Cards.map((link) => (
    <Card style={{ width: '18rem' }} bg="warning"  key= {link.id} className="m-2">   
          <Card.Body  >
          <Card.Title className="mb-2 ">{link.email}</Card.Title>
          <Card.Subtitle className="mb-2 ">{link.name}</Card.Subtitle>
          <Card.Text>
            {link.text}
          </Card.Text>
        </Card.Body>
        <Button variant="danger" className="m-2" data-id={link.id} onClick={handleDelete}>Delete</Button>
        </Card> 
    ))}
     </>
      )

    }        