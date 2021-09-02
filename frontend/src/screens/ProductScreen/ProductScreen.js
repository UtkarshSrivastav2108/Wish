import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../../components/Product/Rating'

import axios from "axios"
import '../../index.css'
import { Container } from 'react-bootstrap'

const ProductScreen = ({ match }) => {
    const [product, setProduct] = useState({})


    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`/api/products/${match.params.id}`);
            setProduct(data)
        }

        fetchProduct()
    }, [match]);





    return (
        <>
            <Container>

                <br></br><br></br><br></br><br></br>

                <Link className='btn  my-3' style={{ backgroundColor: "#f7a399", color: "white" }} to='/shop'>
                    Go Back
                </Link>
                <br></br><br></br>
                <Row >
                    <Col style={{ marginBottom: "10rem" }} md={6}>
                        <Image src={product.image} alt={product.name} fluid />
                    </Col>
                    <Col md={3}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h3>{product.name}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating
                                    value={product.rating}
                                    text={`${product.numReviews} reviews`}
                                />
                            </ListGroup.Item>
                            <ListGroup.Item>Price: &#8377; &nbsp;{product.price}</ListGroup.Item>
                            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Price:</Col>
                                        <Col>
                                            <strong>&#8377; &nbsp;{product.price}</strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <Row>
                                        <Col>Status:</Col>
                                        <Col>
                                            {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item >
                                    <Button style={{ width: "100%", backgroundColor: "#f7a399", color: "white" }} className='btn-block text-center' type='button' disabled={product.countInStock === 0}>
                                        Add To Cart
                                    </Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default ProductScreen
