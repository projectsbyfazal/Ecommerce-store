"use client"
import React, { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';

const slider = [
    {
        image: "/assets/header/header1.jpg",
        // title: "",
    },
    {
        image: "/assets/header/header2.jpg",
        // title: "",
    },
    {
        image: "/assets/header/header3.jpg",
        // title: "",
    },
    {
        image: "/assets/header/header4.jpg",
        // title: "",
    },
]

const HomeBanner = () => {

    const [current_slider, setCurrentSlider] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const autoInterval = setInterval(() => {
            setCurrentSlider(prev => {
                return (prev === slider.length - 1) ? 0 : prev + 1
            })
        }, 10000)

        return () => clearInterval(autoInterval);
    }, [])

    useEffect(() => {
        if (isAnimating) {
            const timer = setTimeout(() => setIsAnimating(false), 1000); // duration of the animation
            return () => clearTimeout(timer);
        }
    }, [isAnimating]);

    useEffect(() => {
        setIsAnimating(true);
    }, [current_slider])

    const nextSlide = () => {
        setCurrentSlider(prev => (prev < slider.length - 1) ? prev + 1 : 0);
    }

    const prevSlide = () => {
        setCurrentSlider(prev => (prev > 0) ? prev - 1 : slider.length - 1);
    }

    return (
        <header>
            <div
                className={`container home_banner ${isAnimating ? 'opacityAnimation' : ''}`}
                style={{ backgroundImage: `url(${slider[current_slider]?.image})` }}
            >

                <div className='slider-buttons'>
                    <button onClick={prevSlide}><ArrowLeft /></button>
                    <button onClick={nextSlide}><ArrowRight /></button>
                </div>
            </div>
        </header>
    )
}

export default HomeBanner
