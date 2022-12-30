import {  Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import { addOrEditUserBio, recibeBio, useAuth } from '../Providers/AuthProvider';
import { useState } from 'react';

import descarga from"../assets/descarga.svg";
import { ProfileEdit } from './ProfileEditComponent';
import { getExperimentalSetting } from '@firebase/util';


export const HomeComponent =  () =>{
const { user } = useAuth()
const [editForm, setEditForm]= useState(false)

const openFormHandler = (e) =>{
  if(editForm === false){
    setEditForm(true)
  }
  if(editForm === true){
    setEditForm(false)
  }
  
}

const OpenBioEdit = () =>{
  const open = editForm
  if(open === true){   
    return <ProfileEdit/>
  }
}

const Biography =() =>{

  
return (
  <>
  {user ? 
    <Card.Subtitle className="mb-2 "></Card.Subtitle>
    :
    <Card.Subtitle className="mb-2 ">Biography</Card.Subtitle>
  }
  </>
)

}

 return (
    <>
    {user ? 
    <Container className="m-3 justify-content-center col-8" >
      <Card className="text-center col-12">
        <Figure className="m-3 justify-content-center" >
        <Figure.Image
        alt="171x180"
        src= {
          user.photoURL ?
          user.photoURL.toString().slice(0, -4) + "400-c"
        :
          descarga
        }
        className="rounded-circle"
        />
        </Figure>
        <Card.Title className="mb-2 ">{user.displayName}</Card.Title>
        <Card.Subtitle className="mb-2 ">{user.email}</Card.Subtitle>
        
        
        
        
        <Card.Body>
          <Button variant="primary" onClick={openFormHandler}>Edit Profile</Button>
        </Card.Body>
        <OpenBioEdit/>
        </Card>

      </Container>
      :
      <Container className="m-3 justify-content-center col-8" >
        <Card className="text-center col-12">


        </Card>
      </Container>
  }
    </>
 ) 
}

  

