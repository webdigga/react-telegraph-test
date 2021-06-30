class Posts {
    constructor ( content ) {
        this.content = content;

        this.displayMenu();
        this.displayPosts();
    }

    displayMenu() {
        const postsMenuContainer = document.querySelector( '[data-js="posts-menu"]' );
        const content = `
            <div>${ this.content.length } Comments</div>
            <div>
                <span>Sort</span>
                <button>Likes</button>
            </div>
        `;

        postsMenuContainer.innerHTML = content;

    }

    displayPosts() {
        const postsContainer = document.querySelector( '[data-js="posts"]' );
        let content = '';

        this.content.forEach(( post ) => {
            content = content + `
                <article>
                    <div>${ post.name }</div>
                    <div>${ post.likes }</div>
                    <p>${ post.body }</p>
                </article>
            `;
        });

        postsContainer.innerHTML = content;
    }

    sortPosts () {

    }
}

module.exports = Posts;