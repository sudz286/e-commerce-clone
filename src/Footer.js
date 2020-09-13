import React from 'react';
import './Footer.css';

function Footer() {
	return (
	<footer id="footer" class="footer-1">
	<div class="main-footer widgets-dark typo-light">
		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-sm-6 col-md-3">
						<div class="widget subscribe no-box">
						<h5 class="widget-title">YOUR LOGO<span></span></h5>
						<p>About the company, little discription will goes here</p>
					</div>
				</div>

				<div class="col-xs-12 col-sm-6 col-md-3">
					<div class="widget no-box">
						<h5 class="widget-title">MAIN PAGES<span></span></h5>
						<ul class="thumbnail-widget">
							<li>
								<div class="thumb-content"><a href="#.">Get Started</a></div>	
							</li>
							<li>
								<div class="thumb-content"><a href="#.">Top Leaders</a></div>	
							</li>
							<li>
								<div class="thumb-content"><a href="#.">Success Stories</a></div>	
							</li>
							<li>
								<div class="thumb-content"><a href="#.">Event/Tickets</a></div>	
							</li>
							<li>
								<div class="thumb-content"><a href="#.">News</a></div>	
							</li>
							<li>
								<div class="thumb-content"><a href="#.">Lifestyle</a></div>	
							</li>
							<li>
								<div class="thumb-content"><a href="#.">About</a></div>	
							</li>
						</ul>
					</div>
				</div>

				<div class="col-xs-12 col-sm-6 col-md-3">
					<div class="widget no-box">
						<h5 class="widget-title">POLICY<span></span></h5>
						<p>Lorem Ipsum Dolor Isets</p>
						<a class="btn" href="#." target="_blank">Register Now</a>
					</div>
				</div>

				<div class="col-xs-12 col-sm-6 col-md-3">
					<div class="widget no-box">
					<h5 class="widget-title">SUBSCRIBE<span></span></h5>

					<p><a href="mailto:info@domain.com" title="glorythemes">info@domain.com</a></p>
					<ul class="social-footer2">
					</ul>
				</div>
				</div>

			</div>
		</div>
	</div>
	  
	<div class="footer-copyright">
		<div class="container">
		<div class="row">
		<div class="col-md-12 text-center">
		<p>Copyright Company Name © 2016. All rights reserved.</p>
		</div>
		</div>
		</div>
		</div>
	</footer>
	)
}

export default Footer;