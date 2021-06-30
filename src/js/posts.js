class Posts {
    constructor ( content ) {
        this.content = content;

        this.displayMenu();
        this.displayPosts();
    }

    displayMenu() {
        const postsMenuContainer = document.querySelector( '[data-js="posts-menu"]' );
        const content = `
            <div class="posts__header">${ this.content.length } Comments</div>
            <div class="posts__sort-container">
                <span class="posts__sort">Sort</span>
                <button class="posts__sort-button">Likes</button>
            </div>
        `;

        postsMenuContainer.innerHTML = content;

    }

    displayPosts() {
        const postsContainer = document.querySelector( '[data-js="posts"]' );
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

        postsContainer.innerHTML = content;
    }

    sortPosts () {

    }
}

module.exports = Posts;