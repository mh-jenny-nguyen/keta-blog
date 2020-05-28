import React from 'react';
import StickyNavigation from '../../components/StickyNavigation';
import SideHeader from '../../components/SideHeader';
import TopNavigation from '../../components/TopNavigation';
import BannerAd from '../../components/BannerAd';
import AboutUsWidget from '../../components/AboutUsWidget';
import FeaturedPostWidget from '../../components/FeaturedPostWidget';
import logo from '../../assets/img/logo.png';

const StandardLayout = (props) => {
	return (
		<div id="page-container" className="layout-masonry">
			<StickyNavigation />
			<div id="page-content" className="page-content">
				<div id="sidebar" className="sidebar">
					<SideHeader logo={logo} />
				</div>
				<div id="content" className="content">
					<TopNavigation/>
					<main id="primary-content">
						<div className="main-wrapper">
							{props.children}
						</div>
					</main>
					<BannerAd name="Your Ad" img={require('../../assets/img/Webp.net-resizeimage-min.jpg')} url="https://shopee.vn/" />
					<div id="secondary-content">
						<div className="widget-area">
							<aside className="widget">
								<AboutUsWidget/>
							</aside>
							<aside className="widget">
								<FeaturedPostWidget/>
							</aside>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default StandardLayout;