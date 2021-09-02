
import React from 'react'
import "./Sidebar.css"
import ReactDOM from 'react-dom';



const Sidebar = () => {
    return (
        <div>
            <div class="widget catagory mb-50">

                <h5 style={{ paddingTop: "3px" }}> Catagories</h5>

                <div class="catagories-menu">
                    <ul id="menu-content2" class="menu-content collapse show" style={{ marginTop: "2.5rem" }}>

                        <li data-toggle="collapse" data-target="#clothing" >
                            <hr ></hr>
                            <a href="#" style={{ color: "black", fontWeight: "900" }}>clothing</a>
                            <ul class="sub-menu collapse show" id="clothing" >
                                <li ><a style={{ color: "grey", fontWeight: "200" }} href="#">All</a></li>
                                <li ><a style={{ color: "grey", fontWeight: "200" }} href="#">Bodysuits</a></li>
                                <li ><a style={{ color: "grey", fontWeight: "200" }} href="#">Dresses</a></li>
                                <li ><a style={{ color: "grey", fontWeight: "200" }} href="#">Hoodies &amp; Sweats</a></li>
                                <li ><a style={{ color: "grey", fontWeight: "200" }} href="#">Jackets &amp; Coats</a></li>
                                <li ><a style={{ color: "grey", fontWeight: "200" }} href="#">Jeans</a></li>
                                <li ><a style={{ color: "grey", fontWeight: "200" }} href="#">Pants &amp; Leggings</a></li>
                                <li ><a style={{ color: "grey", fontWeight: "200" }} href="#">Rompers &amp; Jumpsuits</a></li>
                                <li ><a style={{ color: "grey", fontWeight: "200" }} href="#">Shirts &amp; Blouses</a></li>
                                <li ><a style={{ color: "grey", fontWeight: "200" }} href="#">Shirts</a></li>
                                <li ><a style={{ color: "grey", fontWeight: "200" }} href="#">Sweaters &amp; Knits</a></li>
                            </ul>
                        </li>

                        <li data-toggle="collapse" data-target="#shoes" class="collapsed">
                            <a href="#" style={{ color: "black", fontWeight: "900" }}>Edibles</a>
                            <ul class="sub-menu collapse" id="shoes">
                                <li><a href="#">All</a></li>
                                <li><a href="#">Bodysuits</a></li>
                                <li><a href="#">Dresses</a></li>
                                <li><a href="#">Hoodies &amp; Sweats</a></li>
                                <li><a href="#">Jackets &amp; Coats</a></li>
                                <li><a href="#">Jeans</a></li>
                                <li><a href="#">Pants &amp; Leggings</a></li>
                                <li><a href="#">Rompers &amp; Jumpsuits</a></li>
                                <li><a href="#">Shirts &amp; Blouses</a></li>
                                <li><a href="#">Shirts</a></li>
                                <li><a href="#">Sweaters &amp; Knits</a></li>
                            </ul>
                        </li>

                        <li data-toggle="collapse" data-target="#accessories" class="collapsed">
                            <a href="#" style={{ color: "black", fontWeight: "900" }}>Art & Crafts</a>
                            <ul class="sub-menu collapse" id="accessories">
                                <li><a href="#">All</a></li>
                                <li><a href="#">Bodysuits</a></li>
                                <li><a href="#">Dresses</a></li>
                                <li><a href="#">Hoodies &amp; Sweats</a></li>
                                <li><a href="#">Jackets &amp; Coats</a></li>
                                <li><a href="#">Jeans</a></li>
                                <li><a href="#">Pants &amp; Leggings</a></li>
                                <li><a href="#">Rompers &amp; Jumpsuits</a></li>
                                <li><a href="#">Shirts &amp; Blouses</a></li>
                                <li><a href="#">Shirts</a></li>
                                <li><a href="#">Sweaters &amp; Knits</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <hr style={{ marginTop: "2rem" }}></hr>
            <div class="widget price mb-50" style={{ marginTop: "2rem" }}>

                <h6 class="widget-title mb-30">Filter by</h6>

                <p class="widget-title2 mb-30" style={{ marginTop: "2rem" }}>Price</p>

                <div class="widget-desc" style={{ marginTop: "2rem" }}>
                    <div class="slider-range">
                        <input type="range" class="form-range" id="customRange1" />
                        <div class="range-price" style={{ marginTop: "2rem" }}>Range: $49.00 - $360.00</div>
                    </div>
                </div>
            </div>
            <hr style={{ marginTop: "2rem" }}></hr>
            <div class="widget color mb-50">

                <p class="widget-title2 mb-30" style={{ marginTop: "2rem" }}>Color</p>
                <div class="widget-desc" style={{ marginTop: "2rem" }}>
                    <ul class="d-flex">
                        <li><a href="#" class="color1"></a></li>
                        <li><a href="#" class="color2"></a></li>
                        <li><a href="#" class="color3"></a></li>
                        <li><a href="#" class="color4"></a></li>
                        <li><a href="#" class="color5"></a></li>
                        <li><a href="#" class="color6"></a></li>
                        <li><a href="#" class="color7"></a></li>
                        <li><a href="#" class="color8"></a></li>
                        <li><a href="#" class="color9"></a></li>
                        <li><a href="#" class="color10"></a></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Sidebar
