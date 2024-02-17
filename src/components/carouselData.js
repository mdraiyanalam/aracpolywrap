import React from 'react';

// custom CSS starts
import '../styles/carouselData01.css';
// custom CSS ends

// Carousel Starts
import { Carousel, CarouselItem } from 'react-bootstrap';
// carouselimg
import carouselimg1 from './images/carousel/1.jpg';
import carouselimg2 from './images/carousel/2.jpg';
import carouselimg3 from './images/carousel/3.jpg';
import carouselimg4 from './images/carousel/4.jpg';
// Carousel Ends


const Carousel01 = () => {
    const items = [
        {
            src: carouselimg1,
            // altText: 'Slide 1',
            // caption: 'Caption 1'
        },
        {
            src: carouselimg2,
            // altText: 'Slide 2',
            // caption: 'Caption 2'
        },
        {
            src: carouselimg3,
            // altText: 'Slide 3',
            // caption: 'Caption 3'
        },
        {
            src: carouselimg4,
            // altText: 'Slide 3',
            // caption: 'Caption 3'
        }
    ];

    return (
        // <div class="container-fluid">
            <Carousel>
                {items.map((item, index) => (
                <Carousel.Item key={index}>
                    <img
                    className="d-block w-100 carouselData01Img"
                    src={item.src}
                    alt={item.altText}
                    />
                    <Carousel.Caption>
                    <h3>{item.caption}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                ))}
            </Carousel>
        // </div>
    );
}

export default Carousel01;
