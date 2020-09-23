import React, { Component } from 'react';
import unsplash from '../apis/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

export default class App extends Component {
	state = { images: [] };
	onSearchSubmit = async term => {
		const response = await unsplash.get('/search/photos', {
			params: { query: term }
		});
		this.setState({ images: response.data.results });
	};
	render() {
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
				<h1>Search for Some Images</h1>
				<SearchBar onSearchSubmit={this.onSearchSubmit} />
				<ImageList images={this.state.images} />
			</div>
		);
	}
}
