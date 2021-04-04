import {Navbar,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Nav_bar = (props) => {
   
    return (
      <div className="App-header">
      <div className="Navbar">

        <Navbar bg="dark" variant="dark" >
        <Navbar.Brand href="#home">NetMovies</Navbar.Brand>
        
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#pricing">List</Nav.Link>
          <Nav.Link href="#pricing">LogIn</Nav.Link>
          <Nav.Link href="#features">
         
          
         </Nav.Link>

         
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search for a movie" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form> */}
      </Navbar>
      </div>
      </div>
            
        
     )
     
 };

 export default Nav_bar