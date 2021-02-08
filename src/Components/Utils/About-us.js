import React from 'react';
import Image1 from '../Assets/development-svg.png';
import Image2 from '../Assets/university-svg.png';
import Image3 from '../Assets/urban-svg.png';

const aboutus = () => {
    return(
        <>
        <div className="row">
            <div className="container">               
                    <div className="text-center">
                        <h1 className="">
                            About ISTE
                        </h1>
                        <p className="description-aboutus mx-auto">
                            We are an evolving society working towards the growth of the community in SRM NCR
                        </p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div class="col-sm-6 col-md-6 col-xs-6">
                    <div class="thumbnail text-center" >
                    <div class="col-sm-6 col-md-6 col-xs-12 image-container">
                        <img src={Image1} alt="HomeImage1" />
                    </div>
                    <div class="col-sm-6 col-md-6 col-xs-12">  
                        <h3>Technical Society</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit adipiscing blandit. Aliquam placerat, velit a fermentum fermentum, mi felis vehicula justo, a dapibus quam augue non massa.</p>
                    </div>
                </div>
                <div class="thumbnail text-center" >
                    <div class="col-sm-6 col-md-6 col-xs-12 image-container">
                        <img src={Image2} alt="HomeImage1" />
                    </div>
                    <div class="col-sm-6 col-md-6 col-xs-12">  
                        <h3>Growing Together</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit adipiscing blandit. Aliquam placerat, velit a fermentum fermentum, mi felis vehicula justo, a dapibus quam augue non massa.</p>
                    </div>
                </div>
                <div class="thumbnail text-center" >
                    <div class="col-sm-6 col-md-6 col-xs-12 image-container">
                        <img src={Image3} alt="HomeImage1" />
                    </div>
                    <div class="col-sm-6 col-md-6 col-xs-12">  
                        <h3>Team Management</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit adipiscing blandit. Aliquam placerat, velit a fermentum fermentum, mi felis vehicula justo, a dapibus quam augue non massa.</p>
                    </div>
                </div>
            </div>  
        </div>
        </>
    )
}

export default aboutus