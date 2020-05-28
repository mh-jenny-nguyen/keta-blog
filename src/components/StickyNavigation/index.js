import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';
import $ from "jquery";

const StickyNavigation = (props) => {

	const closeMenu = (e) =>  {
		let target = e.target.dataset.target;
		$(`#${target}`).addClass('--hidden');
	}

	return (
		<nav id="nav-sidebar" className="nav-sidebar --hidden">
			<div className="nav-sidebar__container">
				<ul className="nav-sidebar__list">
					<li className="nav-sidebar__item"><NavLink to="/">Home</NavLink></li>
					<li className="nav-sidebar__item"><NavLink to="/contact-us">Contact Us </NavLink></li>
					<li className="nav-sidebar__item"><NavLink to="/portfolio">Portfolio</NavLink></li>
					<li className="nav-sidebar__item"><NavLink to="/social-life">Social Life</NavLink></li>
					<li className="nav-sidebar__item"><NavLink to="/follow-me">Follow me</NavLink></li>
				</ul>
			</div>
			<span className="nav-sidebar__close" data-target="nav-sidebar" onClick={closeMenu}><FontAwesomeIcon icon={faTimes} /></span>
		</nav>
	);
}


export default StickyNavigation;