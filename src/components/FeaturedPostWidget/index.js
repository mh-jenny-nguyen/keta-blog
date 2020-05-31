import React from 'react';
import { withPostConsumer } from "../../context";
import FeaturedPostItem from "./item";

const FeaturedPostWidget = ({context}) => {

	const {featuredPost} = context;
	
	let featuredPostList = featuredPost.map( item => {
		return (
			<FeaturedPostItem key={item.id} {...item} />
		);
	})

	return (
		<div className="w-featured-post">
			<h3 className="w-featured-post__title">
				Featured Posts
			</h3>
			<div className="w-featured-post__content">
				<ul className="w-featured-post__list">
					{featuredPostList}
				</ul>
			</div>
		</div>
	);
}

export default withPostConsumer(FeaturedPostWidget);