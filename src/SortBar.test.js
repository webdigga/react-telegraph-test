import { render } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import SortBar from './SortBar';

let container = null;
beforeEach(() => {
	// setup a DOM element as a render target
	container = document.createElement( 'div' );
	document.body.appendChild( container );
});

afterEach(() => {
	// cleanup on exiting
	unmountComponentAtNode( container );
	container.remove();
	container = null;
});

it( 'renders without crashing', () => {
	const items = [
		{
			id: 1,
			date: "2019-04-23T22:26:43.511Z",
			name: "Dawud Esparza",
			body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed gravida orci.",
			likes: 33
		},
		{
			id: 2,
			date: "2019-04-23T19:26:41.511Z",
			name: "Lennie Wainwright",
			body: "Quisque maximus augue ut ex tincidunt sodales. Nullam interdum consectetur mi at pellentesque.",
			likes: 4
		}
	];

	render( <SortBar items = { items } />, container );
});