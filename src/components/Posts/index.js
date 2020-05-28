import React from 'react';
import Masonry from 'react-masonry-component';
import PostItem from './item';

const masonryOptions = {
    transitionDuration: 0
};

const Posts = (props) => {

	let postList = props.dataList.map( item => {
		return (
			<PostItem key={item.id} {...item} />
 		)

	});

	return (
		<React.Fragment>
		<section className="posts">
			<Masonry className={'posts__layout'} options={masonryOptions}>
				{postList}
			</Masonry>
		</section>
		</React.Fragment>
	);
}


export default Posts;