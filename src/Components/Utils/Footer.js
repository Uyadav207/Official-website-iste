import React from 'react';

const Footer = () => {
    return(
        <>
            <section classNameName="py-5 bg-dark text-white ">
            <div className="container">
        <div className="row">
            <div className="col-md-3">
                <p>There are many variations of passages of Lorem Ipsum available, but the majo rity have suffered alteration</p>
            </div>
            <div className="col-md-3">
                <h4><b>Quick Links</b></h4>
                <ul className="list-unstyled mt-3">
                    <li><a href="/" className="text-white">How it works?</a></li>
                    <div className="mb-2"></div>
                    <li><a href="/" className="text-white">Career</a></li>
                    <div className="mb-2"></div>
                    <li><a href="/" className="text-white">Privacy Policy</a></li>
                    <div className="mb-2"></div>
                    <li><a href="/" className="text-white">Terms & Conditions</a></li>
                </ul>
            </div>
            <div className="col-md-3">
                <h4><b>Support</b></h4>
                <ul className="list-unstyled mt-3">
                    <li><a href="/" className="text-white">About Us</a></li>
                    <div className="mb-2"></div>
                    <li><a href="/" className="text-white">Contact Us</a></li>
                    <div className="mb-2"></div>
                    <li><a href="/" className="text-white">Our Team</a></li>
                    <div className="mb-2"></div>
                    <li><a href="/" className="text-white">Testimonials</a></li>
                </ul>
            </div>
            <div className="col-md-3">
                <h4><b>Contact Us</b></h4>
                <ul className="list-unstyled mt-3">
                    <li><a href="/" className="text-white">How it    works?</a></li>
                    <div className="mb-2"></div>
                    <li><a href="/" className="text-white">Career</a></li>
                    <div className="mb-2"></div>
                    <li><a href="/" className="text-white">Privacy Policy</a></li>
                    <div className="mb-2"></div>
                    <li><a href="/" className="text-white">Terms & Conditions</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            </section>
            <div className="container">
				<div className="row">
					<div className="col-md-12 text-center">
						<div className="copyright">
							<p>© <span>2020</span> <a href="/" className="transition">ISTE SRM NCR</a> All rights reserved.</p>
						</div>
					</div>
				</div>
			</div>
        </>
    )
}

export default Footer;