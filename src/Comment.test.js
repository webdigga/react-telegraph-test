import { render } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import Comment from './Comment';

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
	const item = {
		id: 1,
		date: "2019-04-23T22:26:43.511Z",
		name: "Dawud Esparza",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed gravida orci.",
		likes: 33
	};

	render( <Comment commentItem = { item } key = { item } />, container );
});
