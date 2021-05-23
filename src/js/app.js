const Utils = require('./utils');
const GetPosts = require('./services/getPosts');

new Utils();

// Get posts
new GetPosts().requestPosts().then( ( posts ) => {
	console.log( posts );
});