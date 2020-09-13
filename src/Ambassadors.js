import React from 'react';
import './Ambassadors.css';
import Placeholder from './images/placeholder.jpg';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'

function Ambassadors() {
	return (
		<div className = "container">
		<Carousel>
		<Carousel.Item>
			<div className = "row">
				<div className = "col-3">
				
		   				<Image src={Placeholder} roundedCircle />
	 				
	 			</div>

	 			<div className = "col-3">
				
		   				<Image src={Placeholder} roundedCircle />
	 				
	 			</div>

	 			<div className = "col-3">
				
		   				<Image src={Placeholder} roundedCircle />
	 				
	 			</div>

	 			<div className = "col-3">
				
		   				<Image src={Placeholder} roundedCircle />
	 				
	 			</div>
	 		</div>	
	 		</Carousel.Item>
	 		</Carousel>
	 		
		</div>
	)
}

export default Ambassadors;