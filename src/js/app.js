const Utils = require( './utils' );
const GetPosts = require( './services/getPosts' );
const Posts = require( './posts' );

new Utils();

// Get and display posts
new GetPosts().requestPosts().then( ( content ) => {
	new Posts( content );
});