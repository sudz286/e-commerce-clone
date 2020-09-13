import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LanguageIcon from '@material-ui/icons/Language';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
	return (
		<nav className = "header">
			<div className = "container-fluid">
				<Link to= "/" style = { { textDecoration : 'none' }}>
					<h1>YOUR LOGO</h1>
				</Link>
				<div className = "header__search">
					<input type = "text" className = "header__searchInput" placeholder = "Type in and Hit Enter" />
					<SearchIcon className = "header__searchIcon" />
				</div>
				<div className = "header__menu">
					<div className = "header__unit">
						<ShoppingCartIcon className = "header__shoppingCartIcon" />
						<a href = "/#">Cart</a>
					</div>

					<div className = "header__unit">
						<AccountCircleIcon className = "header__accountCircleIcon" />
	
						<a href = "/#" className = "dropdown-toggle" data-toggle="dropdown">User</a>
						<ul class="dropdown-menu form-wrapper">					
							<li>
								<div className="form-group">
									<input type="text" className="form-control" placeholder="Username" required="required"></input>
								</div>
								<div className="form-group">
									<input type="password" class="form-control" placeholder="Password" required="required"></input>
								</div>
								<input type="submit" className="btn btn-primary btn-block" value="Login"></input>
								<div className="form-footer">
									<a href="/#">Forgot Your password?</a>
								</div>
							</li>
						</ul>

					</div>

					<div className = "header__unit">
						<LanguageIcon className = "header__languageIcon" />
						<a href = "/#">Lang</a>
					</div>
				</div>
			</div>
			<div className = "container-fluid" id = "container-bottom">
				<Nav>
					<NavDropdown title="All Brands" id="basic-nav-dropdown">
				        <NavDropdown.Item href="#action/3.1">BRAND NAME</NavDropdown.Item>
				        <NavDropdown.Item href="#action/3.2">BRAND NAME</NavDropdown.Item>
				        <NavDropdown.Item href="#action/3.3">BRAND NAME</NavDropdown.Item>
			        	<NavDropdown.Item href="#action/3.4">BRAND NAME</NavDropdown.Item>
			      	</NavDropdown>
	      			<Nav.Link href="#home">Skincare</Nav.Link>
	      			<Nav.Link href="#link">Makeup</Nav.Link>
			      	<Nav.Link href="#link">Hair Care</Nav.Link>
			      	<Nav.Link href="#link">Bath & Body</Nav.Link>
			      	<Nav.Link href="#link">Beauty</Nav.Link>
			      	<Nav.Link href="#link">Promos</Nav.Link>
			      	<Nav.Link href="#link">Link</Nav.Link>
    			</Nav>
			</div>
		</nav>
	)
}

export default Header;