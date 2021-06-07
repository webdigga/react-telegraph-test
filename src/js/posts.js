class Posts {
    constructor ( content ) {
        this.content = content;

        this.displayPosts();
    }

    displayPosts() {
        const container = document.querySelector( '[data-js="posts"]' );
        let content = '';

        this.content.forEach(( post ) => {
            console.log( post );

            content = content + `
                <article>
                    <div>${ post.name }</div>
                    <div>${ post.likes }</div>
                    <p>${ post.body }</p>
                </article>
            `;
        });

        container.innerHTML = content;
    }
}

module.exports = Posts;