import React from 'react';

// custom CSS import
import '../styles/footers.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faSkype } from '@fortawesome/free-brands-svg-icons';

function Footers() {
  return (
    <>
      <br />
      <div className="container text-center">
        <div className="row">
          <div className="col">
            &#169;2024 All Rights Reserved. Designed by{' '}
            <a href="https://www.linkedin.com/in/mdraiyanalam/" target="_blank" rel="noopener noreferrer">
              Md Raiyan Alam
            </a>
          </div>
          <div className="col"></div>
          <div className="col">
            <ul className="social-links">
              <li>
                <a href="https://www.facebook.com/aracpoly" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li>
                <a href="https://join.skype.com/invite/U0B0PM1mxx9k" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faSkype} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footers;
