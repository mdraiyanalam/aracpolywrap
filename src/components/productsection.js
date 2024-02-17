import React from 'react';

// custom CSS import
import '../styles/productsection.css';


// from https://animate.style/ for animation
import '../styles/animate.min.css';


// img import
import img1 from './images/product/Stretch-Film-Roll.jpg';
import img2 from './images/product/Shrink.jpg';
import img3 from './images/product/fmcg.jpg';
import img4 from './images/product/Agri.jpg';
import img5 from './images/product/PRO.jpg';
import img6 from './images/product/Untitled-55.jpg';


function productsection() {
    return (
        
        <div id="gtco-services">
            <div class="gtco-container">

                <br></br>

                <div class="row animate-box">
                    <div class="col-md-12 col-md-offset-2 text-center gtco-heading">
                        <h2>Our Products</h2>
                    </div>
                </div>

                <div class="animate-box">

                    <div class="gtco-tabs">
                    {/* <ul class="gtco-tab-nav">
                        <li class="active"><a href="#" data-tab="1"><span class="hidden-xs"><b>Stretch Film</b></span></a></li>
                        <li><a href="#" data-tab="2"><span class="hidden-xs"><b>Shrink Film</b></span></a></li>
                        <li><a href="#" data-tab="3"><span class="hidden-xs"><b>FMCG Lamination Film</b></span></a></li>
                        <li><a href="#" data-tab="4"><span class="hidden-xs"><b>Agricultural Film</b></span></a></li>
                        <li><a href="#" data-tab="5"><span class="hidden-xs"><b>Protection Film</b></span></a></li>
                        <li><a href="#" data-tab="6"><span class="hidden-xs"><b>Custom Made Films</b></span></a></li>
                    </ul> */}

                        <div class="gtco-tab-content-wrap">

                            <div class="row">
                                <div class="col-2"></div>
                                <div class="col">
                                
                                    <div class="card" style={{ width: '90%' }}>
                                        <div class="card-body">
                                            <div class="gtco-tab-content tab-content active" data-tab-content="1">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        {/* <div class="gtco-video gtco-bg" style={{backgroundImage: img1}}></div> */}
                                                        <img class="defaultimgsize" src={img1} alt="Description" />
                                                    </div>
                                                    <div class="col-md-6">
                                                        <h2>STRETCH FILM</h2>
                                                        <p ><b>Our stretch films are made with premium quality
                                                            raw materials and Masterbatches. State of the
                                                            Art production lines ensure consistent quality
                                                            and performance. The unique features of our
                                                            stretch films include:</b>
                                                        </p>
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <p>
                                                                    <i class="icon-circle-check"></i>
                                                                    <b>Superior Pallet Load Retention in A/B/C load categories</b>
                                                                </p>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <p><i class="icon-circle-check"></i> <b>Excellent Tear Strength and Mechanical Properties</b></p>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <p><i class="icon-circle-check"></i><b> Maximum Stretch Properties </b></p>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <p><i class="icon-circle-check"></i> <b>Innovative Technologies that enable down gauging to thinner films</b></p>
                                                            </div>
                                                        </div>
                                                        <p>
                                                            <i class="icon-circle-check"></i>
                                                            <b>Available in Machine Roll, Hand Roll, Table Roll, Mini Roll, Jumbo Roll and Custom sizes.</b>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        </div>
                                    </div>

                                    <br></br>

                                    <div class="card" style={{ width: '90%' }}>
                                        <div class="card-body">

                                            <div class="gtco-tab-content tab-content" data-tab-content="2">
                                                <div class="row">
                                                    
                                                    <div class="col-md-6 col-md-pull-6">
                                                        <h2>SHRINK FILM</h2>
                                                        <p>
                                                            <b>
                                                                Arac Polywrap produces an innovative range of Shrink Film products, which can be multi-purpose or  specialized to meet the needs of the Industrial and Consumer Market.
                                                            </b>
                                                        </p>

                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <p>
                                                                    <i class="icon-circle-check"></i>
                                                                    <b>Excellent Tensile Strength & Puncture Resistance</b>
                                                                </p>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <p>
                                                                    <i class="icon-circle-check"></i>
                                                                    <b>Exceptional Optical Properties</b>
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <p>
                                                                    <i class="icon-circle-check"></i>
                                                                    <b>Wide range of Shrink Percentages</b>
                                                                </p>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <p>
                                                                    <i class="icon-circle-check"></i>
                                                                    <b> Variable Thickness for Heavy & Light Duty </b>
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <p>
                                                                    <i class="icon-circle-check"></i>
                                                                    <b> Anti Fog & Other Additives</b>
                                                                </p>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <p>
                                                                    <i class="icon-circle-check"></i>
                                                                    <b> Corona Treatment</b>
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <p>
                                                                    <i class="icon-circle-check"></i>
                                                                    <b> Bundling Shrink Films</b>
                                                                </p>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <p>
                                                                    <i class="icon-circle-check"></i>
                                                                    <b> Shrink Sleeves</b>
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <p>
                                                                    <i class="icon-circle-check"></i>
                                                                    <b> Superior Sealing Performance</b>
                                                                </p>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <p>
                                                                    <i class="icon-circle-check"></i>
                                                                    <b> Highest Strength to Weight Ratio</b>
                                                                </p>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div class="col-md-6 col-md-push-6">
                                                        <img class="defaultimgsize" src={img2} alt="Description" />
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    
                                    <br></br>

                                    <div class="card" style={{ width: '90%' }}>
                                        <div class="card-body">

                                            <div class="gtco-tab-content tab-content" data-tab-content="3">
                                                <div class="row">

                                                    <div class="col-md-6 col-md-push-6">
                                                        <img class="defaultimgsize" src={img3} alt="Description" />
                                                    </div>

                                                    <div class="col-md-6 col-md-pull-6">
                                                        <div class="feature-left animate-box" data-animate-effect="fadeInLeft">
                                                            <div class="feature-copy">
                                                                <h3>FMCG LAMINATION FILM</h3>
                                                                <p>
                                                                    <b>
                                                                    FMCG markets have expanded worldwide and subsequently the need for premium grade process films has increased exponentially.
                                                                    </b>	
                                                                </p>

                                                                <p>
                                                                    <i class="icon-circle-check"></i>
                                                                    <b>
                                                                        Our multi layered lamination films are formulated and manufactured in an advanced process to give unique properties which help achieve perfect sealability in FFS lines. This reduces leakage and contamination, and increases profitability.
                                                                    </b>
                                                                </p>
                                                                <p>
                                                                    <i class="icon-circle-check"></i>
                                                                    <b>
                                                                        We can produce a wide variety of lamination films in various thicknesses and sizes.
                                                                    </b>
                                                                </p>

                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                    <br></br>

                                    <div class="card" style={{ width: '90%' }}>
                                        <div class="card-body">

                                            <div class="gtco-tab-content tab-content" data-tab-content="4">
                                                <div class="row">
                                                    
                                                
                                                    <div class="col-md-6 col-md-pull-6">
                                                        <h2>AGRICULTURAL FILM</h2>

                                                        <p>
                                                            <b>
                                                                    The use of modern technology in traditional
                                                                farming is on the rise. Agricultural films can
                                                                be used to enhance crop yield and reduce
                                                                irrigation costs. Our Agricultural product line
                                                                can help reduce weed growth, control humidity
                                                                and protect roots.
                                                            </b>
                                                        </p>
                                                        
                                                        <p><b>ARAC POLYWRAP’s Agricultural film line offers:</b></p>

                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <p><i class="icon-circle-check"></i> <b>Greenhouse film</b></p>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <p><i class="icon-circle-check"></i><b> Silage film</b></p>
                                                            </div>
                                                        </div>

                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <p><i class="icon-circle-check"></i><b> Mulch film</b></p>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <p><i class="icon-circle-check"></i><b> UV Protections</b></p>
                                                            </div>
                                                        </div>

                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <p><i class="icon-circle-check"></i> <b>Weathering Resistance</b></p>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <p><i class="icon-circle-check"></i> <b>Opacity Variance</b> </p>
                                                            </div>
                                                        </div>

                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <p><i class="icon-circle-check"></i><b> Biodegradability</b></p>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div class="col-md-6">
                                                        <img class="defaultimgsize02" src={img4} alt="Description" />
                                                    </div>

                                                </div>
                                    
                                            </div>
                                            
                                        </div>

                                    </div>

                                    <br></br>

                                    <div class="card" style={{ width: '90%' }}>
                                        <div class="card-body">
                                            <div class="gtco-tab-content tab-content" data-tab-content="5">

                                                <div class="row">

                                                    <div class="col-md-6">
                                                        <img class="defaultimgsize" src={img5} alt="Description" />
                                                    </div>

                                                    <div class="col-md-6">
                                                        <h2>PROTECTION FILM</h2>
                                                        <p>
                                                            <b>ARAC POLYWRAP offers specialized cling
                                                            films for protecting surfaces.</b>
                                                        </p>

                                                        <p>
                                                            <i class="icon-circle-check"></i>
                                                            <b>These films can be used to protect furniture,
                                                            glass, metal and plastics.</b>
                                                        </p>

                                                        <p>
                                                            <i class="icon-circle-check"></i>
                                                            <b>
                                                                Vapor corrosion inhibitors can be added
                                                                to protect valuable metal goods which are
                                                                vulnerable to rust and oxidation
                                                            </b>
                                                        </p>

                                                        <p>
                                                            <i class="icon-circle-check"></i>
                                                            <b>
                                                                Tough scratch resistant films can be used
                                                                as surface and paint protection for goods
                                                                during transportation and manufacturing.
                                                            </b>
                                                        </p>
                                                    
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <br></br>

                                    <div class="card" style={{ width: '90%' }}>
                                        <div class="card-body">

                                            <div class="gtco-tab-content tab-content" data-tab-content="6">
                                                <div class="row">
                                                
                                                    <div class="col-md-6 col-md-pull-6">
                                                        <h2>CUSTOM MADE FILMS </h2>
                                                        <p>
                                                            <b>ARAC POLYWRAP offers a wide range of Custom products
                                                                that can be manufactured to ASTM specifications using a
                                                                variety of PE and specialty Master batches.
                                                            </b>
                                                        </p>
                                                        <p>
                                                            <i class="icon-circle-check"></i>
                                                            <b>	Our unique multi-layer co-extrusion process allows us to
                                                                consistently produce high quality industrial grade films.
                                                            </b>
                                                        </p>
                                                        <p>
                                                            <i class="icon-circle-check"></i>
                                                            <b>
                                                                Key Features of our Films can include :
                                                            </b>
                                                        </p>


                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <p><i class="icon-circle-check"></i><b> Barrier Properties</b></p>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <p><i class="icon-circle-check"></i> <b>Unique Colors</b></p>
                                                            </div>
                                                        </div>

                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <p>Anti- Static</p>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <p><i class="icon-circle-check"></i> <b>High Gloss/Clarity</b> </p>
                                                            </div>
                                                        </div>

                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <p><i class="icon-circle-check"></i><b> Various Sizes & Thicknesses</b></p>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <p><i class="icon-circle-check"></i><b>Corona Treatment</b> </p>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>

                                                    <div class="col-md-6 col-md-push-6">
                                                        <img class="defaultimgsize" src={img6} alt="Description" />
                                                    </div>

                                                </div>
                                        </div>

                                        </div>
                                    </div>

                                </div>

                                <div class="col-1"></div>

                            </div>
                        </div>                            
                    </div>                          
                </div>
            </div>
            <br></br>
        </div>

    );
}

export default productsection;