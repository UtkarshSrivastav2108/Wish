import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./footer.css"
const Footer = () => {
    return (
        <footer className="footer shadow-lg ">
            <Container>



                <div className="footer-area footer-padding ">
                    <div className="container">
                        <div className="row d-flex justify-content-between">
                            <div className="col-xl-3 col-lg-3 col-md-5 col-sm-6">
                                <div className="single-footer-caption mb-50">
                                    <div className="single-footer-caption mb-30">

                                        <div className="footer-logo">
                                            <Link to="/"><img className="h1-logo" src="/images/Wish.png" ></img></Link>

                                            <hr style={{ color: "white" }}></hr>
                                        </div>
                                        <div className="footer-tittle">
                                            <div className="footer-pera">
                                                <p>Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf sed do eiusmod
                                                    tem.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-3 col-sm-5">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4 style={{ paddingBottom: "13px" }}>Quick Links</h4>

                                        <hr style={{ color: "white" }}></hr>
                                        <ul>
                                            <li><Link to="/"> <i style={{ color: "white" }} class="fas fa-angle-double-right"></i> &nbsp;  About</Link></li>
                                            <li><Link to="/"><i style={{ color: "white" }} class="fas fa-angle-double-right"></i> &nbsp; Offers</Link></li>
                                            <li><Link to="/"><i style={{ color: "white" }} class="fas fa-angle-double-right"></i> &nbsp;  Get Coupon</Link></li>
                                            <li><Link to="/"><i style={{ color: "white" }} class="fas fa-angle-double-right"></i> &nbsp;  Contact Us</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-7">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4 style={{ paddingBottom: "13px" }}>New Products</h4>
                                        <hr style={{ color: "white" }}></hr>
                                        <ul>
                                            <li><Link to="/"><i style={{ color: "white" }} class="fas fa-angle-double-right"></i> &nbsp;Edibles</Link></li>
                                            <li><Link to="/"><i style={{ color: "white" }} class="fas fa-angle-double-right"></i> &nbsp; Clothing</Link></li>
                                            <li><Link to="/"><i style={{ color: "white" }} class="fas fa-angle-double-right"></i> &nbsp; Art & Crafts</Link></li>
                                            <li><Link to="/"><i style={{ color: "white" }} class="fas fa-angle-double-right"></i> &nbsp;  Painting</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-5 col-sm-7">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4 style={{ paddingBottom: "13px" }}>Support</h4>
                                        <hr style={{ color: "white" }}></hr>
                                        <ul>
                                            <li><Link to="/"><i style={{ color: "white" }} class="fas fa-angle-double-right"></i> &nbsp; Frequently Asked Questions</Link></li>
                                            <li><Link to="/"><i style={{ color: "white" }} class="fas fa-angle-double-right"></i> &nbsp; Terms & Conditions</Link></li>
                                            <li><Link to="/"><i style={{ color: "white" }} class="fas fa-angle-double-right"></i> &nbsp; Privacy Policy</Link></li>
                                            <li><Link to="/"><i style={{ color: "white" }} class="fas fa-angle-double-right"></i> &nbsp; Report a Payment Issue</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr style={{ color: "white", borderTop: "4px double white" }}></hr>

                        <div className="row align-items-center">
                            <div className="col-xl-7 col-lg-8 col-md-7">
                                <div className="footer-copy-right">
                                    <p>
                                        Copyright &copy;
                                        <script>document.write(new Date().getFullYear());</script> All rights reserved | Wish
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-4 col-md-5">
                                <div className="footer-copy-right f-right">

                                    <div className="footer-social">
                                        <Link to="/"><i className="fab fa-instagram"></i></Link>
                                        <Link to="https://www.facebook.com/sai4ull"><i className="fab fa-facebook-f"></i></Link>

                                        <Link to="/"><i className="fab fa-linkedin"></i></Link>
                                        <Link to="/"><i className="fab fa-behance"></i></Link>
                                        <Link to="/"><i className="fab fa-twitter"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </Container>
        </footer>
    )
}

export default Footer
