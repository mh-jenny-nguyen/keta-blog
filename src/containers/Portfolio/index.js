import React from 'react';
import Masonry from 'react-masonry-component';
import PageHeader from '../../components/PageHeader';
import {Link} from 'react-router-dom';

const Portfolio = () => {
	const masonryOptions = {
	    transitionDuration: 0
	};

	return (
		<React.Fragment>
			<PageHeader>
				<h1 className="page-header__title">Portfolio Gallery</h1>
				<h3 className="page-header__sub-title">I’m a Freelance, Web design, Front end developer and more. Focusing across branding and identity, digital and photography.</h3>
			</PageHeader>
			<div className="portfolio">
				<Masonry className={'portfolio__wrapper'} options={masonryOptions} elementType={'article'} >
					<article className="portfolio__item">
						<div className="portfolio__frame">
							<Link to={'/'} className="portfolio__thumbnail">
								<img src={require('../../assets/img/julian-paul-_f1z9NtR2A8-unsplash-min.jpg')} alt="" className="portfolio__img" />
							</Link>
							<Link to={'/'} className="portfolio__entry-title">
								<h2 className="portfolio__title">Travel to Asian</h2>
							</Link>
						</div>
					</article>
					<article className="portfolio__item">
						<div className="portfolio__frame">
							<Link to={'/'} className="portfolio__thumbnail">
								<img src={require('../../assets/img/weronika-wSEv7Nanuxc-unsplash-min.jpg')} alt="" className="portfolio__img" />
							</Link>
							<Link to={'/'} className="portfolio__entry-title">
								<h2 className="portfolio__title">Unforgettable Summer</h2>
							</Link>
						</div>
					</article>
					<article className="portfolio__item">
						<div className="portfolio__frame">
							<Link to={'/'} className="portfolio__thumbnail">
								<img src={require('../../assets/img/yoann-boyer-9dD0gFvrFnY-unsplash-min.jpg')} alt="" className="portfolio__img" />
							</Link>
							<Link to={'/'} className="portfolio__entry-title">
								<h2 className="portfolio__title">Minimalist Room</h2>
							</Link>
						</div>
					</article>
					<article className="portfolio__item">
						<div className="portfolio__frame">
							<Link to={'/'} className="portfolio__thumbnail">
								<img src={require('../../assets/img/annie-spratt-q9IH1_7QXsc-unsplash-min.jpg')} alt="" className="portfolio__img" />
							</Link>
							<Link to={'/'} className="portfolio__entry-title">
								<h2 className="portfolio__title">Breath of Freedom</h2>
							</Link>
						</div>
					</article>
					<article className="portfolio__item">
						<div className="portfolio__frame">
							<Link to={'/'} className="portfolio__thumbnail">
								<img src={require('../../assets/img/jake-dela-concepcion-22wqnpAqTxg-unsplash-min.jpg')} alt="" className="portfolio__img" />
							</Link>
							<Link to={'/'} className="portfolio__entry-title" href="!#">
								<h2 className="portfolio__title">Wild life</h2>
							</Link>
						</div>
					</article>
					<article className="portfolio__item">
						<div className="portfolio__frame">
							<Link to={'/'} className="portfolio__thumbnail">
								<img src={require('../../assets/img/kyle-peyton-Ht_3KoBGF3U-unsplash-min.jpg')} alt="" className="portfolio__img" />
							</Link>
							<Link to={'/'} className="portfolio__entry-title" href="!#">
								<h2 className="portfolio__title">Lost in Europe</h2>
							</Link>
						</div>
					</article>
					<article className="portfolio__item">
						<div className="portfolio__frame">
							<Link to={'/'} className="portfolio__thumbnail">
								<img src={require('../../assets/img/marco-xu-x2tnHqvWYB0-unsplash-min.jpg')} alt="" className="portfolio__img" />
							</Link>
							<Link to={'/'} className="portfolio__entry-title" href="!#">
								<h2 className="portfolio__title">My Name is</h2>
							</Link>
						</div>
					</article>
					<article className="portfolio__item">
						<div className="portfolio__frame">
							<Link to={'/'} className="portfolio__thumbnail">
								<img src={require('../../assets/img/vino-li-V3WsozrfP6M-unsplash-min.jpg')} alt="" className="portfolio__img" />
							</Link>
							<Link to={'/'} className="portfolio__entry-title" href="!#">
								<h2 className="portfolio__title">The Village</h2>
							</Link>
						</div>
					</article>
					<article className="portfolio__item">
						<div className="portfolio__frame">
							<Link to={'/'} className="portfolio__thumbnail">
								<img src={require('../../assets/img/yanapi-senaud-wEy8TRGUuLY-unsplash-min.jpg')} alt="" className="portfolio__img" />
							</Link>
							<Link to={'/'} className="portfolio__entry-title" href="!#">
								<h2 className="portfolio__title">Shout to The World</h2>
							</Link>
						</div>
					</article>
					<article className="portfolio__item">
						<div className="portfolio__frame">
							<Link to={'/'} className="portfolio__thumbnail">
								<img src={require('../../assets/img/martin-knize-19zUUIaUR5k-unsplash-min.jpg')} alt="" className="portfolio__img" />
							</Link>
							<Link to={'/'} className="portfolio__entry-title" href="!#">
								<h2 className="portfolio__title">Star war</h2>
							</Link>
						</div>
					</article>
					<article className="portfolio__item">
						<div className="portfolio__frame">
							<Link to={'/'} className="portfolio__thumbnail">
								<img src={require('../../assets/img/tobias-tullius-PXXtq6bp6cs-unsplash-min.jpg')} alt="" className="portfolio__img" />
							</Link>
							<Link to={'/'} className="portfolio__entry-title" href="!#">
								<h2 className="portfolio__title">Elegant & Harmony</h2>
							</Link>
						</div>
					</article>
					<article className="portfolio__item">
						<div className="portfolio__frame">
							<Link to={'/'} className="portfolio__thumbnail">
								<img src={require('../../assets/img/allison-heine-PeBAr07F32E-unsplash-min.jpg')} alt="" className="portfolio__img" />
							</Link>
							<Link to={'/'} className="portfolio__entry-title" href="!#">
								<h2 className="portfolio__title">The star on the sky</h2>
							</Link>
						</div>
					</article>
				</Masonry>
			</div>
		</React.Fragment>
	);
}

export default Portfolio