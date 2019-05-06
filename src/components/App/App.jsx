import React, { Component } from 'react';
import OpeningCrawl from '../OpeningCrawl/OpeningCrawl';
import Main from '../Main/Main';
import './_App.scss';

class App extends Component {
	state = {
		showCrawl: false
	};

	componentDidMount() {
		this.setState({ showCrawl: true });
	}

	hideCrawl = () => {
		this.setState({ showCrawl: false });
	};

	render() {
		return (
			<section className="App">{this.state.showCrawl ? <OpeningCrawl hideCrawl={this.hideCrawl} /> : <Main />}</section>
		);
	}
}

export default App;
