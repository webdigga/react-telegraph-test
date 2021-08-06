import { render } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import Error from './Error';

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
	render( <Error />, container );
});