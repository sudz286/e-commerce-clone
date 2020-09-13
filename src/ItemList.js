import React from 'react';
import './ItemList.css';
import Placeholder from './images/placeholder.jpg';
import Placeholder2 from './images/placeholder2.jpeg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ItemList() {
	return (
		<div className = "container pagesh">
            <h1 class = "title">TOP SELLERS</h1>
			<div className = "row">
				<div className = "col-6">
					<Card>
		   				<Card.Img variant="top" src={Placeholder} />
					    <Button variant="secondary">SHOP NOW</Button>
	 				</Card>
  				</div>
				<div className = "col-3">
					<Card>
		   				<Card.Img variant="top" src={Placeholder2} />
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
		   				<Card.Img variant="top" src={Placeholder2} />
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

			<div className = "row">
				<div className = "col-3">
					<Card>
		   				<Card.Img variant="top" src={Placeholder2} />
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
		   				<Card.Img variant="top" src={Placeholder2} />
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
  				<div className = "col-6">
					<Card>
		   				<Card.Img variant="top" src={Placeholder} />
					    <Button variant="secondary">SHOP NOW</Button>
	 				</Card>
  				</div>
			</div>

		</div>
	)
}

export default ItemList;