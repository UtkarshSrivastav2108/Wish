import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Carousel } from 'react-bootstrap'
const MainScreen = () => {
    return (
        <>

            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="/images/Industries_hero.jpg" alt="First slide" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default MainScreen
