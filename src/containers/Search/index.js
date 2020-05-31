import React from 'react';
import { withPostConsumer } from "../../context";
import Posts from '../../components/Posts';
import PageHeader from '../../components/PageHeader';

const Search = ({context}) => {
	const {filterPosts, keyword} = context;

	return (
		<div className="search-page">
			<PageHeader>
				<h1 className="page-header__title">Search result for {`"${keyword}"`}</h1>
				<h3 className="page-header__sub-title align-left">{filterPosts.length}&nbsp;{filterPosts.lenght > 1 ? "results" : "result"}&nbsp;was found</h3>
			</PageHeader>
			{ filterPosts.length <= 0 &&
				<div className="not-found content-container">
					<span>Opps...Nothing to show</span>
				</div>
			}

			{ filterPosts.length > 0 &&
				<Posts dataList={filterPosts} />
			}
		</div>
	)
}

export default withPostConsumer(Search)