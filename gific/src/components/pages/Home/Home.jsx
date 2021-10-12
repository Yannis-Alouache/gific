import React from 'react'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import Hero from '../../Hero/Hero'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false
    };

    return (
        <>
            <Header />
            <Hero />
            <br />
            <br />

            <div className="container mx-auto">
                <Slider {...settings}>
                    <div>
                        <img className="rounded-lg shadow-lg " src="https://media.tenor.com/images/1a6e398331272fbd91c1f5b4d87d4418/tenor.gif" />
                    </div>
                    <div>
                        <img className="rounded-lg shadow-lg" src="https://media.tenor.com/images/1a6e398331272fbd91c1f5b4d87d4418/tenor.gif" />
                    </div>
                    <div>
                        <img className="rounded-lg shadow-lg" src="https://media.tenor.com/images/1a6e398331272fbd91c1f5b4d87d4418/tenor.gif" />
                    </div>
                    <div>
                        <img className="rounded-lg shadow-lg" src="https://media.tenor.com/images/1a6e398331272fbd91c1f5b4d87d4418/tenor.gif" />
                    </div>
                    <div>
                        <img className="rounded-lg shadow-lg" src="https://media.tenor.com/images/1a6e398331272fbd91c1f5b4d87d4418/tenor.gif" />
                    </div>
                    <div>
                        <img className="rounded-lg shadow-lg" src="https://media.tenor.com/images/1a6e398331272fbd91c1f5b4d87d4418/tenor.gif" />
                    </div>
                    <div>
                        <img className="rounded-lg shadow-lg" src="https://media.tenor.com/images/1a6e398331272fbd91c1f5b4d87d4418/tenor.gif" />
                    </div>
                    <div>
                        <img className="rounded-lg shadow-lg" src="https://media.tenor.com/images/1a6e398331272fbd91c1f5b4d87d4418/tenor.gif" />
                    </div>
                    <div>
                        <img className="rounded-lg shadow-lg" src="https://media.tenor.com/images/1a6e398331272fbd91c1f5b4d87d4418/tenor.gif" />
                    </div>
                    <div>
                        <img className="rounded-lg shadow-lg" src="https://media.tenor.com/images/1a6e398331272fbd91c1f5b4d87d4418/tenor.gif" />
                    </div>
                    <div>
                        <img className="rounded-lg shadow-lg" src="https://media.tenor.com/images/1a6e398331272fbd91c1f5b4d87d4418/tenor.gif" />
                    </div>
                    <div>
                        <img className="rounded-lg shadow-lg" src="https://media.tenor.com/images/1a6e398331272fbd91c1f5b4d87d4418/tenor.gif" />
                    </div>
                    <div>
                        <img className="rounded-lg shadow-lg" src="https://media.tenor.com/images/1a6e398331272fbd91c1f5b4d87d4418/tenor.gif" />
                    </div>
                    <div>
                        <img className="rounded-lg shadow-lg" src="https://media.tenor.com/images/1a6e398331272fbd91c1f5b4d87d4418/tenor.gif" />
                    </div>

                    

                </Slider>
            </div>
            

            <br />
            <br />
            <Footer />
        </>
    )
}

export default Home
