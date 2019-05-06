import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchMovie } from '../../util/api';
import Loader from '../Loader/Loader';
import './_OpeningCrawl.scss';
import Crawl from 'react-star-wars-crawl';
import 'react-star-wars-crawl/lib/index.css';

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
			<Loader />
		) : (
			<section>
				<Crawl title={episodeNumber} subTitle={title} text={`${openingCrawl} | ${releaseDate}`} />
				<button className="OpeningCrawl-skip-btn" onClick={this.props.hideCrawl}>
					Hide Crawl
				</button>
			</section>
		);

		return <aside className="OpeningCrawl">{display}</aside>;
	}
}

OpeningCrawl.propTypes = {
	hideCrawl: PropTypes.func
};

export default OpeningCrawl;
