import React from 'react'
import ContactForm from "../components/ContactFormComponent";
import { CardsHandler } from "../Listeners/CardsListener";
import { Container, Row } from "react-bootstrap";


export default function ContactPage() {

  return (
    <Container fluid >
      <Row  className="m-2 justify-content-center">
        <ContactForm />
        <CardsHandler />
        </Row>
    </Container>   
  )
}

