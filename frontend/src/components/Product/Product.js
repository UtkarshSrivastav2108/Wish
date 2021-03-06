import React from 'react'
import { Card } from 'react-bootstrap'

import Rating from './Rating'
import { Link } from "react-router-dom"

const Product = ({ product }) => {
    return (
        <Card className="my-3 p-3 rounded shadow-lg p-3 mb-5 ">

            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant="top" />
            </Link>


            <Card.Body >

                <Link to={`/product/${product._id}`}>
                    <Card.Title as="div">
                        <strong>
                            {product.name}
                        </strong>
                    </Card.Title>
                </Link>
                <hr></hr>
                <Card.Text as="div">
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                </Card.Text>
                <br></br>
                <Card.Text as="h3">
                    &#8377;{product.price}
                </Card.Text>
            </Card.Body>


        </Card >
    )
}

export default Product
