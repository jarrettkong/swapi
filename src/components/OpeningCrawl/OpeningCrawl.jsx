import React from 'react';

const OpeningCrawl = props => {
	const { opening_crawl: openingCrawl, title, release_date: releaseDate } = props.film;

	return (
		<aside className="OpeningCrawl">
			<p className="OpeningCrawl-text">{openingCrawl}</p>
			<p className="OpeningCrawl-info">
				{title} - {releaseDate}
			</p>
		</aside>
	);
};

export default OpeningCrawl;
