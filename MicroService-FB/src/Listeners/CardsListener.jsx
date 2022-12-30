import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { RecibeContacts } from '../Providers/ContactProvider';
import CardsComponent from '../components/CardsComponent';


export  function CardsHandler() {
  const[Cards, SetCards] = useState ([])

    useEffect(() =>{
      RecibeContacts(SetCards);
    }, [])


  return (
    <>
    
    <Container fluid >
    <Row className="m-2 justify-content-center">
           
        <CardsComponent Cards={Cards}></CardsComponent>  
        

      </Row>
      </Container>
    </>
  )
}


