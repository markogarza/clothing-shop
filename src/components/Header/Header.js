import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.scss';

function Header() {
	return (
		<div className="header">
			<Link className="logo-container" to="/shop">
				<Logo className="logo" />
			</Link>
			<div className="options">
				<Link className="option" to="/shop">
					SHOP
				</Link>
				<Link className="option" to="/shop">
					SHOP
				</Link>
				<Link className="option" to="/shop">
					SHOP
				</Link>
				<Link className="option" to="/shop">
					SHOP
				</Link>
			</div>
		</div>
	);
}

export default Header;
