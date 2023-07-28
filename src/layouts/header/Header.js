import styles from './Header.module.css';
import { Link, Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand as={Link} to="/" className={styles.navbrand}>JMT</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto d-flex gap-5">
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/about">About</Nav.Link>
                                <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>                                                           
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet/>
        </div>
    )
}

export default Navigation;