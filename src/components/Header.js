import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import {Link} from 'react-router-dom';


function Header(){

    return(
        <>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Netflix Clone</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="favmovies">FavMovies</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
        </>
    )
}
export default Header;