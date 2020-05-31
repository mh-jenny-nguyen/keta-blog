import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faPinterestP } from "@fortawesome/free-brands-svg-icons";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { useCallback } from 'react';
import $ from "jquery";
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const SideHeader = (props) => {
	const {history, searchPage} = props;

	const toogleClass = useCallback((e) => {
		let target = e.target.dataset.target;
		$(`#${target}`).toggleClass('--hidden');
	}, []);
	

	const handleSubmit = (e) => {
		e.preventDefault();
		let keyword = $('.top-side-bar__form-input').val();
		props.onSearch(keyword);
		history.push(`/${searchPage}`);
	}

	return (
			<React.Fragment>
			<div className="top-side-bar">
				<label className="top-side-bar__side-menu-icon" onClick={toogleClass} data-target="nav-sidebar"><FontAwesomeIcon icon={faBars} /></label>

				<label htmlFor="toogle-search"  className="top-side-bar__search-icon"><FontAwesomeIcon icon={faSearch} /></label>
				<input type="checkbox" id="toogle-search" className="top-side-bar__search-toogle" />

				<form className="top-side-bar__form" id="form-search" onSubmit={handleSubmit}>
					<div className="top-side-bar__form-wrapper">
						<input
							type="text"
							placeholder="Type your keyword"
							className="top-side-bar__form-input"
						/>
					</div>
				</form>
			</div>
			<header className="site-header">
				<div className="site-header__wrapper">
					<div className="site-header__logo">
						<Link to="/"><img src={props.logo} alt="logo" /></Link>
					</div>
					<div className="site-header__tag-line">
						<p>
							Welcome to my blog! I am a writer, I like to
							travel and I love to photograph beautiful
							nature places and happy peoples
						</p>
					</div>
					<div className="site-header__social-profile">
						<ul className="site-header__social_list">
							<li className="site-header__social-item">
								<a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebookF} /></a>
							</li>
							<li className="site-header__social-item">
								<a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} /></a>
							</li>
							<li className="site-header__social-item">
								<a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
							</li>
							<li className="site-header__social-item">
								<a href="https://www.pinterest.com/"><FontAwesomeIcon icon={faPinterestP} /></a>
							</li>
						</ul>
					</div>
				</div>
			</header>
			<footer id="footer">
				<div className="site-footer">
					&copy; 2020 <a href="https://tiki.vn/">MH Theme</a>
				</div>
			</footer>
			</React.Fragment>
	)
}

export default withRouter(SideHeader);