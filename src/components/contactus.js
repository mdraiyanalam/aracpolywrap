import React from 'react';

// custom CSS import
import '../styles/contactus.css';

function ContactUs() {
  return (
    <>
      <br />
      <div>
        <h2 className='text-center'>Contact Us</h2>
        <br />
        <div className="container">
          <div className="row">
            {/* <div className="col"></div> */}
            <div className="col">
              {/* Add your contact form or other content here */}
              {/* <p>This is a placeholder for your Contact Us content.</p> */}
              <h2>Head Office</h2>
              <ul>• House 50 (13th floor), Road 11, Block C, Banani, Dhaka-1213.</ul>
              <h2>Corporate Office</h2>
              <ul>• House 16 (1st floor), Road 127, Gulshan-1, Dhaka-1212</ul>
            </div>
            <div className="col">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3636.699060158806!2d90.4182548748085!3d24.287239667956147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37567057adf39b2d%3A0xa96eaae4c2af96b5!2sARAC%20Polywrap%20Limited!5e0!3m2!1sen!2sbd!4v1708185321676!5m2!1sen!2sbd"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
