/* formula para revisar dar ordenes de la mitad de la pantalla*/
const background = position.x < window.innerWidth/2 'pink' : 'orange'; 

/* formula de opercion ternaria con sentencia javascript*/
<h2> { user ? `Hola ${user.name}` : 'bienvenido'}</h2>



/* Puedo traer con cualquier nombre desde un custom hook con un arreglo y puedo me puedo traer 
varias referencias con un objeto*/dssdfsdfjjjsddkfkdkkk  fff

/*comillas simples ALT + 39 */ 

 /*{error && <Form.Label className="m-3 h6 text-danger">{error}</Form.Label>}*/

USEEFFECT: ES UNA ESPECIE DE EVENT LISTENER PARA QUE NO SE RECARGUEN TODOS LOS COMPONENTES

/* 
Siempre que haya un EventListener HAY QUE ELIMINARLO EN EL RETURN CON UNA ARROWfUNCTION
*/  



<Card.Body className=" justify-content-center">
        <Card style={{ width: '18rem' }} className=" d-inline-flex justify-content-center">
      <ListGroup variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>
            
</Card.Body>


        <Figure className="m-3 justify-content-center h-75" >
          <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src= {user.photoURL}
            className="rounded-circle"
          />
        </Figure>
          :
          <Figure className="m-3 justify-content-center h-75" >
          <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src= {descarga}
            className="rounded-circle"
          />
          </Figure>



<Card className="text-center col-6 m-2 h-75 d-inline-block"></Card>


{
  if (user){

  console.log("retorna la tarjeta")
    return 
    <Card className="text-center col-6 m-2 h-75 d-inline-block">
      
    <Figure className="m-3 justify-content-center h-75" >
  <Figure.Image
    width={250}
    height={250}
    alt="171x180"
    src= {user.photoURL.toString().slice(0, -4) + "400-c"}
    className="rounded-circle"
  />
</Figure>
<Card.Body className=" justify-content-center">
<Card style={{ width: '18rem' }} className=" d-inline-flex justify-content-center">
<ListGroup variant="flush">
<ListGroup.Item>{user.displayName}</ListGroup.Item>
<ListGroup.Item>{user.email}</ListGroup.Item>
<ListGroup.Item>{user.photoURL.toString()}</ListGroup.Item>
</ListGroup>
</Card>
    
</Card.Body> 


</Card>
  }else{

    return 
    <Card className="text-center col-6 m-2 h-75 d-inline-block">
    <Figure className="m-3 justify-content-center h-75" >
  <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    src= {descarga}
    className="rounded-circle"
  />
  </Figure>
  <Alert.Link href="/Register" className="m-2 text-center">Register</Alert.Link>
  </Card>
  }