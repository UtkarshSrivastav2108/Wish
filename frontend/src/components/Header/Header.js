
import React from 'react'
import '../../App.css'
import { Nav, Form, Button, Navbar, Container, FormControl } from 'react-bootstrap'


import { LinkContainer } from 'react-router-bootstrap'
const Header = () => {
    return (
        <header>
            <Navbar className="Navbar shadow-lg p-3 mb-5  fixed-top rounded" expand="lg" collapseOnSelect  >
                <Container >

                    <LinkContainer to="/">
                        <Navbar.Brand><img src="/images/Wish.png" style={{ width: "120px" }}></img> </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ml-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >


                            <LinkContainer to="/b">
                                <Nav.Link  >All States <i class="fas fa-caret-down"></i></Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/shop">
                                <Nav.Link >Shop</Nav.Link>
                            </LinkContainer>


                            <LinkContainer to="/cart">
                                <Nav.Link > Clothing</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/cart">
                                <Nav.Link>  Edibles</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/cart">
                                <Nav.Link >  Art & Crafts</Nav.Link>
                            </LinkContainer>


                        </Nav>
                        <Form className="d-flex ms-auto">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="mr-2"
                                aria-label="Search"
                            />
                            <Button variant="light"><i className="fas fa-search"></i></Button>
                        </Form>
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >


                            <LinkContainer to="/wishlist">
                                <Nav.Link > <i className="fas fa-heart"></i> &nbsp;  </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/cart">
                                <Nav.Link> <i className="fas fa-shopping-cart"></i> &nbsp; </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/cart">
                                <Nav.Link > <i className="fas fa-user"></i> &nbsp; </Nav.Link>
                            </LinkContainer>

                        </Nav>

                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </header>
    )
}

export default Header
