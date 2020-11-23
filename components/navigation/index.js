import React from 'react';
import { Nav, Logo } from './style';

const Navigation = () => {
	return (
		<Nav>
			<Logo href="#">Architects</Logo>
			<ul>
				<li><a href="#">Home</a></li>
				<li><a href="#">Collection</a></li>
				<li><a href="#">Abaut</a></li>
				<li><a href="#">Contact</a></li>
				<li>
					<div></div>
					<div></div>
					<div></div>
				</li>
			</ul>
		</Nav>
	)
}

export default Navigation;
