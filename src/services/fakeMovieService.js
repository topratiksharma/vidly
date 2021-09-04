// import * as generesAPI from "./fakeGenereService";

const movies = [
    {
        _id: "m_100",
        title: "Gone Girl",
        genere: { _id: "g_123", name: "Action" },
        stock: 1,
        rate: 5.5,
        publishDate: "2018-01-03T19:04.25.809Z"
    },
    {
        _id: "m_101",
        title: "Gotham",
        genere: { _id: "g_126", name: "Romance" },
        stock: 1,
        rate: 5.5,
        publishDate: "2018-01-03T19:04.25.809Z"
    },
    {
        _id: "m_103",
        title: "Terminator",
        genere: { _id: "g_123", name: "Action" },
        stock: 6,
        rate: 2.5,
        publishDate: "2018-01-03T19:04.25.809Z",
        liked: true
    },
    {
        _id: "m_104",
        title: "Die Hard",
        genere: { _id: "g_123", name: "Action" },
        stock: 5,
        rate: 2.5,
        publishDate: "2018-01-03T19:04.25.809Z"
    },
    {
        _id: "m_105",
        title: "3 Idiots",
        genere: { _id: "g_124", name: "Comedy" },
        stock: 2,
        rate: 3.5,
        publishDate: "2011-01-03T19:04.25.809Z"
    },
    {
        _id: "m_106",
        title: "Source Code",
        genere: { _id: "g_125", name: "SciFi" },
        stock: 6,
        rate: 1.5,
        publishDate: "2017-01-03T19:04.25.809Z"
    },
    {
        _id: "m_107",
        title: "The Truman Show",
        genere: { _id: "g_124", name: "Comedy" },
        stock: 5,
        rate: 2.5,
        publishDate: "2016-01-03T19:04.25.809Z"
    },
    {
        _id: "m_108",
        title: "A Walk to remember",
        genere: { _id: "g_126", name: "Romance" },
        stock: 1,
        rate: 5.5,
        publishDate: "2018-01-03T19:04.25.809Z"
    },
    {
        _id: "m_109",
        title: "Titanic",
        genere: { _id: "g_126", name: "Romance" },
        stock: 2,
        rate: 2.5,
        publishDate: "2018-01-03T19:04.25.809Z"
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
    // movieInDb.stock=movie.stock, 
    // movieInDb.rate=movie.rate
}