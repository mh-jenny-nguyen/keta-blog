import React from 'react';
import Posts from '../../components/Posts';
import PagePagination from '../../components/PagePagination';
import { withPostConsumer } from "../../context";

const Home = ({context}) => {
	const {currentPosts, currentPage, numberPerPage, totalOfPost, handleLoadPage} = context;

	return (
		<React.Fragment>
			<Posts dataList={currentPosts} />
			<PagePagination numberPerPage={numberPerPage}  totalOfPage={totalOfPost} currentPage={currentPage} onLoadPage={handleLoadPage} />
		</React.Fragment>
	)
}

export default withPostConsumer(Home)