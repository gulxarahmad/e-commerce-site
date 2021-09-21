import React from 'react'
import {Nav, Navbar, Container} from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
  <Navbar.Brand href="/">My Shop</Navbar.Brand>
  <Container>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="ml-auto"
    >
      <Nav.Link href="/cart"><i className='fas fa-shopping-cart'>Cart</i></Nav.Link>
      <Nav.Link href="/login"><i className='fas fa-user'>Login</i></Nav.Link>
    </Nav>

  </Navbar.Collapse>
  </Container>
</Navbar>
        </header>
    )
}

export default Header
