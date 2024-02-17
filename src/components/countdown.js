import React from 'react';

// custom CSS import
import '../styles/countdown.css';

import NumScroller from '../components/NumScroller';

function Countdown() {
  const containerStyle = {
    backgroundColor: '#3498db',
    padding: '20px',
    textAlign: 'center',
    color: '#fff',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const imageStyle = {
    backgroundImage: 'url("path/to/your/image.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // width: '100%',
    // height: '200px',
  };

  const textStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const flexContainerStyle = {
    display: 'flex',
    // justifyContent: 'space-between', // Adjust as needed
    alignItems: 'center', // Center items vertically
  };
  
  

  return (


      <div style={containerStyle}>
            <div style={flexContainerStyle}>

                <div class="container-fluid text-center">
                    <div class="row">
                        <div class="col">
                            
                            <div style={imageStyle}>
                                <NumScroller maxCount={100} />
                            </div>
                            <div style={textStyle}>
                                Happy Client
                            </div>

                        </div>
                        <div class="col">
                            
                            <div style={imageStyle}>
                                <NumScroller maxCount={12} />
                            </div>
                            <div style={textStyle}>
                                Country Exported
                            </div>

                        </div>
                        <div class="col">

                            <div style={imageStyle}>
                                <NumScroller maxCount={287} />
                            </div>
                            <div style={textStyle}>
                                Shipment Done
                            </div>

                        </div>
                    </div>
                    
                </div>

            </div>
        </div>

  );
}

export default Countdown;
