import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import DashboardComponent from '../Components/DashboardComponent';
import { RecibeImages } from '../Providers/StorageProvider';
import { useAuth } from '../Providers/AuthProvider';




export  function ImagesHandler() {
  const[Images, SetImages] = useState ([])

  const { user } = useAuth();
  

    useEffect(() =>{
      RecibeImages(SetImages, user.displayName)
     
    }, [])

    


  return (
    <>
    <Container fluid >
        <Row className="m-2 justify-content-center">
          <DashboardComponent Images={Images}></DashboardComponent>
        </Row>
    </Container>
    </>
  )
}