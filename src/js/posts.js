class Posts {
    constructor ( content ) {
        this.content = content;
        this.container = document.querySelector( '[data-js="posts"]' );

        this.displayMenu();
        this.displayPosts();
    }

    displayMenu() {
        console.log( this.content.length );

        const sortButton = '<button></button>';

        const content = `
            <div>${ this.content.length } Comments</div>
            <div>
                <span>Sort</span>
                <button>Likes</button>
            </div>
        `;

        this.container.innerHTML = content;

    }

    displayPosts() {
        
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

        this.container.appendChild( content );
    }

    sortPosts () {

    }
}

module.exports = Posts;