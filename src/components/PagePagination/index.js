import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons"

const PagePagination = (props) => {
	return (
		<div id="page-navigation">
			<nav className="page-navigation">
				<div className="page-navigation__wrapper">
					{ props.currentPage > 1 &&
						<a
						href="!#"
						className="page-navigation__item --page-previous"
						><FontAwesomeIcon icon={faChevronLeft} /></a>
					}

					<span
						href="!#"
						className="page-navigation__item --page-number --current"
						>1</span>
					<a
						href="!#"
						className="page-navigation__item --page-number">2</a>
					
					{ props.currentPage >= props.totalOfPage  &&
						<a
							href="!#"
							className="page-navigation__item --page-next"
							><FontAwesomeIcon icon={faChevronRight} /></a>
					}
				</div>
			</nav>
		</div>
	);
}

export default PagePagination