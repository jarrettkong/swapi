import React, { Component } from 'react';
import './_OpeningCrawl.scss';

class OpeningCrawl extends Component {
	state = {
		film: {}
	};

	componentDidMount() {
		const rand = Math.floor(Math.random() * 7) + 1;
		fetch(`https://swapi.co/api/films/${rand}`)
			.then(res => res.json())
			.then(film => this.setState({ film }))
			.catch(err => console.log(err));
	}

	render() {
		const { opening_crawl: openingCrawl, title, release_date: releaseDate } = this.state.film;
		return (
			<aside className="OpeningCrawl">
				<p className="OpeningCrawl-text">{openingCrawl}</p>
				<p className="OpeningCrawl-info">
					{title} | {releaseDate}
				</p>
			</aside>
		);
	}
}

export default OpeningCrawl;
