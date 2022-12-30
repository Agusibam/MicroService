import { useState } from "react";
import { FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addOrEditLinks } from "../Providers/ContactProvider";

const initialState = {
    Email: "",
    Name: "",
    Textarea: "",
  };



function ContactForm(props) {
    const [values, setValues] = useState(initialState);

    const handleInputChange = ({ target: { name, value } }) =>{
        setValues({ ...values, [name]: value });
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)
        addOrEditLinks(values)
    };

    


  return (
    <Form  onSubmit={handleSubmit}  className="m-2  col-8 ">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="Email" onChange={handleInputChange}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" name="Name" onChange={handleInputChange}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Label>Message</Form.Label>
      <FloatingLabel
        controlId="floatingTextarea"
        label="Comments"
        className="mb-3"
      >
        <Form.Control as="textarea" placeholder="leave your message" name="Textarea" onChange={handleInputChange}/>
      </FloatingLabel>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;