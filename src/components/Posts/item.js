import React from 'react';
import {Link} from 'react-router-dom';

const PostItem = (props) => {
	return (
		<article className="posts__article" data-id={props.id}>
			<Link to={`/detail/${props.slug}`} className="posts__thumbnail">
					<img
						src={props.image}
						alt=""
					/>
			</Link>
			<header className="posts__entry-header">
				{ props.featured &&
					<span className="posts__badges">Featured</span>
				}

				<h2 className="posts__entry-title">
					<Link to={`/detail/${props.slug}`} className="posts__thumbnail" rel="bookmark">{props.title}</Link>
				</h2>
				<div className="posts__entry-meta">
					<span className="posts__cat">{props.category}</span>
					<span className="posts__date">{props.dateCreated}</span>
				</div>
			</header>

			<div className="posts__entry-summary">
				<p>{props.summary}...</p>
			</div>
		</article>
	)
}

export default PostItem;