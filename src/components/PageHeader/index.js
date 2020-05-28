import React from 'react';

const PageHeader = (props) => {
	return (
		<header className="page-header">
			{props.children}
		</header>
	)
}

export default PageHeader;