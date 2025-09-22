class Movie {
    constructor(movie) {
        Object.assign(this, movie);
    }

    static createMovie(movie) {
        movies.push(movie);
    }
}

let movies = [
    new Movie({
        id: 1,
        title: "Inception",
        category: "Sci-Fi",
        genre: "Thriller",
        director: "Christopher Nolan",
        year: 2010,
        imageURL: "https://spoilertown.com/wp-content/uploads/2024/06/inception-2010.webp",
        rating: 8.8,
        description: "A skilled thief enters dreams to steal secrets but faces a mission to plant an idea."
    }),
    new Movie({
        id: 2,
        title: "The Godfather",
        category: "Crime",
        genre: "Drama",
        director: "Francis Ford Coppola",
        year: 1972,
        imageURL: "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        rating: 9.2,
        description: "The aging patriarch of an organized crime dynasty transfers control to his reluctant son."
    }),
    new Movie({
        id: 3,
        title: "Interstellar",
        category: "Sci-Fi",
        genre: "Adventure",
        director: "Christopher Nolan",
        year: 2014,
        imageURL: "https://cdn.mos.cms.futurecdn.net/rbe3PBtDMcNCexmwx3h3W4-1200-80.jpg",
        rating: 8.6,
        description: "A team of explorers travel through a wormhole in space in an attempt to save humanity."
    }),
    new Movie({
        id: 4,
        title: "Parasite",
        category: "Thriller",
        genre: "Drama",
        director: "Bong Joon-ho",
        year: 2019,
        imageURL: "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/130/2024/03/29150816/7IiTTgloJzvGI1TAYymCfbfl3vT-scaled.jpg",
        rating: 8.5,
        description: "Greed and class discrimination threaten the relationship between two families."
    }),
    new Movie({
        id: 5,
        title: "The Dark Knight",
        category: "Action",
        genre: "Superhero",
        director: "Christopher Nolan",
        year: 2008,
        imageURL: "https://m.media-amazon.com/images/S/pv-target-images/e9a43e647b2ca70e75a3c0af046c4dfdcd712380889779cbdc2c57d94ab63902.jpg",
        rating: 9.0,
        description: "Batman faces the Joker, a criminal mastermind bent on chaos in Gotham City."
    })
];

export default movies;