import React from 'react';
import './ItemList2.css';
import Placeholder from './images/placeholder.jpg';
import Placeholder2 from './images/placeholder2.jpeg';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';


function ItemList2() {
	return (
		<div className = "container">
		<h1 class = "title">NEW ARRIVALS</h1>
		<Carousel>
		<Carousel.Item>
			<div className = "row">
				<div className = "col-3">
					<Card>
		   				<Card.Img variant="top" src={Placeholder} />
					    <Card.Body>
	    					<Card.Title>Product Title</Card.Title>
	    					<Card.Text>Brand</Card.Text>
						    <Card.Text>
							    Some quick example text to build
						    </Card.Text>
						    <Card.Text>
        						<small className="text-muted"><strike>$29.99</strike></small>
        						<small className="text-muted">   $20.99</small>
      						</Card.Text>
					    </Card.Body>
	 				</Card>
	 			</div>

	 			<div className = "col-3">
					<Card>
		   				<Card.Img variant="top" src={Placeholder} />
					    <Card.Body>
	    					<Card.Title>Product Title</Card.Title>
	    					<Card.Text>Brand</Card.Text>
						    <Card.Text>
							    Some quick example text to build
						    </Card.Text>
						    <Card.Text>
        						<small className="text-muted"><strike>$29.99</strike></small>
        						<small className="text-muted">   $20.99</small>
      						</Card.Text>
					    </Card.Body>
	 				</Card>
	 			</div>

	 			<div className = "col-3">
					<Card>
		   				<Card.Img variant="top" src={Placeholder} />
					    <Card.Body>
	    					<Card.Title>Product Title</Card.Title>
	    					<Card.Text>Brand</Card.Text>
						    <Card.Text>
							    Some quick example text to build
						    </Card.Text>
						    <Card.Text>
        						<small className="text-muted"><strike>$29.99</strike></small>
        						<small className="text-muted">   $20.99</small>
      						</Card.Text>
					    </Card.Body>
	 				</Card>
	 			</div>

	 			<div className = "col-3">
					<Card>
		   				<Card.Img variant="top" src={Placeholder} />
					    <Card.Body>
	    					<Card.Title>Product Title</Card.Title>
	    					<Card.Text>Brand</Card.Text>
						    <Card.Text>
							    Some quick example text to build
						    </Card.Text>
						    <Card.Text>
        						<small className="text-muted"><strike>$29.99</strike></small>
        						<small className="text-muted">   $20.99</small>
      						</Card.Text>
					    </Card.Body>
	 				</Card>
	 			</div>
	 		</div>	
	 		</Carousel.Item>
	 		</Carousel>

	 		<Card className="text-white ad">
  				<Card.Img src={Placeholder2} alt="Card image" />
  					<Card.ImgOverlay>
					    <Card.Title class = "text-right ad-title">50% OFF</Card.Title>
					    <Card.Text class = "text-right ad-desc">
						    On All Items
					    </Card.Text>
					    <Card.Text class = "text-right">
					    	<Button variant="success">Click Here</Button>
					    </Card.Text>
  					</Card.ImgOverlay>
				</Card>
	 		
		</div>
	)
}

export default ItemList2;