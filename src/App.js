import React from "react";
import { Nav,Navbar,Container } from "react-bootstrap"; 
import { BrowserRouter,Route,Routes,Link} from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Home from './Home';

function App() {
    return (
        <>
        <BrowserRouter>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div>
        <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
      </BrowserRouter>
        
        </>
    )
}

export default App;
