class Posts {
    constructor ( content ) {
        this.content = content;

        this.displayMenu();
        this.displayPosts();
    }

    /**
     * Creates and injects the menu for the posts
     */
    displayMenu() {
        const content = `
            <div class="posts__header">${ this.content.length } Comments</div>
            <div class="posts__sort-container">
                <span class="posts__sort">Sort</span>
                <button class="posts__sort-button" data-js="sort-button" data-sort>Likes</button>
            </div>
        `;

        document.querySelector( '[data-js="posts-menu"]' ).innerHTML = content;

        this.bindSortButton();
    }

    /**
     * Creates and injects the content for the posts
     */
    displayPosts() {
        let content = '';

        this.content.forEach(( post ) => {
            content = content + `
                <article class="posts__post">
                    <div class="posts__name">${ post.name }</div>
                    <div class="posts__likes">${ post.likes }</div>
                    <p class="posts__body">${ post.body }</p>
                </article>
            `;
        });

        document.querySelector( '[data-js="posts"]' ).innerHTML = content;
    }

    /**
     * Attach event listener to the sort button
     */
    bindSortButton() {
        this.sortButton = document.querySelector( '[data-js="sort-button"]' );
    
        this.sortButton.addEventListener( 'click', () => {
            this.sortPosts();
        });
    }

    /**
     * Sort the post by likes
     * Set the sort order so we can reverse the sort
     * Render the posts again
     */
    sortPosts () {
        this.content.sort(( a, b ) => {
            return this.sortButton.dataset.sort === 'asc' ? a.likes - b.likes : b.likes - a.likes;
        });

        this.sortButton.dataset.sort === 'asc' ? this.sortButton.dataset.sort = 'desc' : this.sortButton.dataset.sort = 'asc';

        this.displayPosts();
    }
}

module.exports = Posts;