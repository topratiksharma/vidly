// import * as generesAPI from "./fakeGenereService";

const movies = [
    {
        _id: "Movie_123",
        title: "Terminator",
        genere: { _id: "g_123", name: "Action" },
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDate: "2018-01-03T19:04.25.809Z"
    },
    {
        _id: "Movie_124",
        title: "Die Hard",
        genere: { _id: "g_123", name: "Action" },
        numberInStock: 5,
        dailyRentalRate: 2.5,
        publishDate: "2018-01-03T19:04.25.809Z"
    },
    {
        _id: "Movie_125",
        title: "3 Idiots",
        genere: { _id: "g_124", name: "Comedy" },
        numberInStock: 2,
        dailyRentalRate: 3.5,
        publishDate: "2011-01-03T19:04.25.809Z"
    },
    {
        _id: "Movie_129",
        title: "Titanic",
        genere: { _id: "g_126", name: "Romance" },
        numberInStock: 2,
        dailyRentalRate: 2.5,
        publishDate: "2018-01-03T19:04.25.809Z"
    },
    {
        _id: "Movie_128",
        title: "A Walk to remember",
        genere: { _id: "g_126", name: "Romance" },
        numberInStock: 1,
        dailyRentalRate: 5.5,
        publishDate: "2018-01-03T19:04.25.809Z"
    },
    {
        _id: "Movie_126",
        title: "Source Code",
        genere: { _id: "g_125", name: "SciFi" },
        numberInStock: 6,
        dailyRentalRate: 1.5,
        publishDate: "2017-01-03T19:04.25.809Z"
    },
    {
        _id: "Movie_127",
        title: "The Truman Show",
        genere: { _id: "g_124", name: "Comedy" },
        numberInStock: 5,
        dailyRentalRate: 2.5,
        publishDate: "2016-01-03T19:04.25.809Z"
    }
]

export function getMovies() {
    return movies;
}

export function getMovie(id) {
    return movies.find(m => m._id === id);
}

export function saveMovie(movie) {
    let movieInDb = movies.find(m => m._id === movie.id);
    // movieInDb.name=movie.name, 
    // movieInDb.genere=movie., 
    // movieInDb.numberInStock=movie.numberInStock, 
    // movieInDb.dailyRentalRate=movie.dailyRentalRate
}