describe( 'Application', () => {
	
	before(() => {
		cy.visit( 'http://localhost:3000' );
	});

	it( 'has a logo', () => {
		cy.get( '[data-test="header-logo"]' );
	});

	it( 'should have 5 comments', () => {
		cy
			.get( '[data-test="sortbar-comment-total"]' )
			.should(
				"have.text",
				"5"
			);
	});

	it( 'should render with a post that has 33 likes', () => {
		cy
			.get( '[data-test="comment-post"]' )
			.first()
			.find( '[data-test="comment-likes"]' )
			.should(
				"have.text",
				"33"
			); 
	});

	it( 'should have the post with 91 likes first in the list when the sort button is clicked', () => {
		cy
			.get( '[data-test="sortbar-sort-button"]' )
			.click()
			.get( '[data-test="comment-post"]' )
			.first()
			.find( '[data-test="comment-likes"]' )
			.should(
				"have.text",
				"91"
			); 
	});

	it( 'should have the post with 4 likes first in the list when the sort button is clicked again', () => {
		cy
			.get( '[data-test="sortbar-sort-button"]' )
			.click()
			.get( '[data-test="comment-post"]' )
			.first()
			.find( '[data-test="comment-likes"]' )
			.should(
				"have.text",
				"4"
			); 
	});
});
