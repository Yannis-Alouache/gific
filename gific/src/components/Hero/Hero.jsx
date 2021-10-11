import React from 'react'
import image from '../../assets/image/hero.jpg'
import "./Hero.css"

const Hero = () => {
    return (
        <>
            <section class="relative hero-section flex flex-col items-center justify-center text-center text-white py-0 px-3">
                <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
                    <img src={image} class="min-w-full min-h-full absolute object-cover"></img>
                </div>
                <div class="video-content space-y-2">
                    <h1 class="text-6xl">GIFIC C'EST VOTRE SOURCE DE GIFS TENDANCE !</h1>
                </div>
            </section>
        </>
    )
}

export default Hero
