import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Product from '../../components/Product/Product'
import axios from 'axios'

import Sidebar from '../../components/SideBar/Sidebar'


const HomeScreen = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get("/api/products");
            setProducts(data)
        }

        fetchProducts()
    }, []);




    return (
        <>
            <br></br><br></br>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="/images/services_hero.jpg" alt="First slide" />
                    </div>
                </div>
            </div>

            <Container style={{ marginTop: "100px" }}>

                <Col>
                    <Row>
                        <Col md={3}>
                            <Col>
                                <Sidebar />
                            </Col>

                            unlimted bacjkup atoerge fpr enfpoint


                        </Col>

                        <Col md={9}>


                            <div className="container-fluid" style={{ marginBottom: "2rem" }}>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12" >
                                        <h5 style={{ paddingTop: "3px", fontWeight: "bold", fontSize: "15px" }}>
                                            <span style={{ color: "#E63946", fontWeight: "bold" }}>   {products.length} </span> PRODUCTS FOUND
                                        </h5>
                                    </div>



                                    <div className="col-lg-6 col-md-6 col-sm-12">

                                        <div style={{ float: "right" }}>
                                            <label for="SORT" ><h5>SORT BY:</h5> </label>
                                            <select name="cars" id="cars" style={{ border: "none", color: "#E63946" }}>
                                                <option value="volvo">HIGHEST RATED</option>
                                                <option value="saab">LATEST</option>
                                                <option value="opel">BLAH</option>
                                                <option value="audi">BLAH</option>
                                            </select>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <hr></hr>
                            <Row >
                                {products.map(product => (
                                    <Col key={product._id} sm={12} md={6} lg={4} xl={4}>
                                        <Product product={product} />
                                    </Col>

                                ))}
                            </Row>
                        </Col>
                    </Row>
                </Col>



            </Container>
        </>
    )
}

export default HomeScreen
