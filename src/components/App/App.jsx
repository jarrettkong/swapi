import React from 'react';
import OpeningCrawl from '../OpeningCrawl/OpeningCrawl';
import Main from '../Main/Main';
import './_App.scss';

const App = () => {
	return (
		<section className="App">
			<OpeningCrawl />
			<Main />
		</section>
	);
};

export default App;
