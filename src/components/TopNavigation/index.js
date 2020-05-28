import React from 'react';
import { NavLink } from 'react-router-dom';

const TopNavigation = (props) => {
	return (
		<div className="top-nav">
			<div className="top-nav__wrapper">
				<ul className="top-nav__list">
					<li className="top-nav__item">
						<NavLink to="/">Home</NavLink>
					</li>
					<li className="top-nav__item">
						<NavLink to="/contact-us">Contact Us </NavLink>
					</li>
					<li className="top-nav__item">
						<NavLink to="/portfolio">Portfolio</NavLink>
					</li>
					<li className="top-nav__item">
						<NavLink to="/social-life">Social Life</NavLink>
					</li>
					<li className="top-nav__item">
						<NavLink to="/follow-me">Follow me</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default TopNavigation;