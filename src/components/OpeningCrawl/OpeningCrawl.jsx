import React, { Component } from 'react';
import { fetchMovie } from '../../util/api';
import './_OpeningCrawl.scss';

class OpeningCrawl extends Component {
	state = {
		film: {},
		loading: false,
		error: ''
	};

	componentDidMount() {
		this.setState({ loading: true }, this.getMovie);
	}

	getMovie = () => {
		const rand = Math.floor(Math.random() * 7) + 1;
		return fetchMovie(rand)
			.then(film => this.setState({ film, loading: false }))
			.catch(error => this.setState({ error: error.message }));
	};

	getRomanNumeral = num => {
		const numerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];
		return numerals[num - 1];
	};

	render() {
		const { opening_crawl: openingCrawl, title, release_date: releaseDate, episode_id: episode } = this.state.film;

		const episodeNumber = `Episode ${this.getRomanNumeral(episode)}`;
		const display = this.state.loading ? (
			<div class="App-loading">
				<div />
				<div />
				<div />
			</div>
		) : (
			<div className="OpeningCrawl-text">
				<p className="OpeningCrawl-episde">{episodeNumber}</p>
				<p className="OpeningCrawl-title">{title}</p>
				<p>{openingCrawl}</p>
				<p className="OpeningCrawl-release">{releaseDate}</p>
			</div>
		);

		return <aside className="OpeningCrawl">{display}</aside>;
	}
}

export default OpeningCrawl;
