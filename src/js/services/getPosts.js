class GetPosts {
	constructor() {
		this.apiUrl = 'https://my-json-server.typicode.com/telegraph/front-end-exercise-contractors/comments';
	}

	async requestPosts() {
		const apiCall = await fetch( this.apiUrl );
		const data = await apiCall.json();
		return data;
	}
}

module.exports = GetPosts;