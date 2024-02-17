import './App.css';
// import './fontawesome.css';

import React from 'react';
import NavBar from './components/NavBar';
import ProductSection  from './components/productsection';
import Countdown  from './components/countdown';
import ContactUs  from './components/contactus';
import Footer  from './components/footers';

import './bootstrap/dist/css/bootstrap.min.css';
import './bootstrap/dist/js/bootstrap.min.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div>
      <NavBar />
      
      {/* Product Starts*/}
      {/* <section id="Home"> */}
          <ProductSection  /> 
          <Countdown  />   
          <ContactUs  />   
          <Footer  />   
      {/* </section> */}
      {/* Product Ends*/}

      
      

      {/* Product Starts*/}
      {/* <section id="Product">
                  
      </section> */}
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

export default App;
