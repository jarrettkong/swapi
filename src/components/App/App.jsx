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

	toggleCrawl = () => {
		this.setState({ showCrawl: !this.state.showCrawl });
	};

	render() {
		return <section className="App">{this.state.showCrawl ? <OpeningCrawl toggleCrawl={this.toggleCrawl} /> : <Main />}</section>;
	}
}

export default App;
