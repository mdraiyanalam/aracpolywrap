import React from 'react';

// custom CSS import
import '../styles/NavBar.css';


// Carousel From caroselData01.js
import Carousel01 from './carouselData';
import Product01 from './productsection';


// Logo img import
import imgLogo from './images/navbar/logo.png';


function NavBar() {
    return (
        <div class="container-fluid">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand" href="#"><img src={imgLogo} alt="My Image" style={{ width: '50%', height: 'auto' }} /></a>
                    <div class="collapse navbar-collapse d-flex" id="navbarTogglerDemo03">

                    <div class="container text-center">
                        <div class="row">
                            <div class="col">
                            {/* Column */}
                            </div>
                            <div class="col">
                            {/* Column */}
                            </div>
                            <div class="col">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#Home">Home</a>
                                    </li> 
                                    <li class="nav-item">
                                    <a class="nav-link" href="#Product">Product</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" href="#Services">Services</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" href="#Testimonials">Testimonials</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" href="#TeamMembers">Team Members</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" href="#AboutUs">About Us</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" href="#ContactUs">Contact Us</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" href="#Download">Download</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    </div>
                </div>
            </nav>

            {/* Product Starts*/}
            <section id="Home">
                <Carousel01 />
                <br></br>
            </section>
            {/* Product Ends*/}
            

            {/* Product Starts*/}
            <section id="Product">
                <Product01 />
            </section>
            {/* Product Ends*/}


            {/* Services Starts*/}
            <section id="Services">
                        
            </section>
            {/* Services Ends*/}


            {/* Testimonials Starts*/}
            <section id="Testimonials">
                        
            </section>
            {/* Testimonials Ends*/}


            {/* About Us Starts*/}
            <section id="AboutUs">
                        
            </section>
            {/* About Us Ends*/}


            {/* Contact Us Starts*/}
            <section id="ContactUs">
                        
            </section>
            {/* About Us Ends*/}


            {/* Download Starts*/}
            <section id="Download">
                        
            </section>
            {/* Download Ends*/}
        </div>
    );
}

export default NavBar;
