import { Container } from 'react-bootstrap';
import ImageFormComponent from '../components/ImageFormComponent';
import { ImagesHandler } from '../Listeners/ImagesListener';
//import { ImagesHandler } from '../Listeners/ImagesListener';




export default function DashboardPage() {

    return (
        <Container className='p-3 m-2 bg-light text-dark"'>
        <ImageFormComponent/>
        <ImagesHandler/>
      </Container>
    )
}
