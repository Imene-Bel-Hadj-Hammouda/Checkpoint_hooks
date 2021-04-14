import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Nav_bar = (props) => {
   
    return (
      
     
      <div >

        <Navbar className="nav" bg="dark" variant="dark" >
        <Navbar.Brand href="#home">NetMovies</Navbar.Brand>
        
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#pricing">List</Nav.Link>
          <Nav.Link href="#pricing">LogIn</Nav.Link>
          <Nav.Link href="#pricing">SignIn</Nav.Link>
          <Nav.Link href="#features">
         
          
         </Nav.Link>

         
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Enter type of movie" className="mr-sm-2" />
          <Button variant="outline-info">OK</Button>
        </Form>
      </Navbar>
      </div>
      
            
        
     )
     
 };

 export default Nav_bar
 