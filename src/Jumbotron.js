import React from 'react';
import './Jumbotron.css';
import Carousel from 'react-bootstrap/Carousel';
import Placeholder from './images/placeholder.jpg';

function Jumbotron() {
	return (
		<div className = "container pagesh">
			<Carousel>
			  	<Carousel.Item>
				    <img
				      className="d-block w-100"
				      src={Placeholder}
				      alt="First slide"
				    />
			    	
			  	</Carousel.Item>

			  	<Carousel.Item>
				    <img
				      className="d-block w-100"
				      src={Placeholder}
				      alt="Third slide"
				    />

				    
			  	</Carousel.Item>

			  	<Carousel.Item>
				    <img
				      className="d-block w-100"
				      src={Placeholder}
				      alt="Third slide"
				    />
				    
			  	</Carousel.Item>
			</Carousel>
		</div>
	)
}

export default Jumbotron;