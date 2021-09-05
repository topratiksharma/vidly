const genres = [
    { _id: "g_123", name: "Action" },
    { _id: "g_124", name: "Comedy" },
    { _id: "g_125", name: "SciFi" },
    { _id: "g_126", name: "Romance" }
];


export function getGeners() {
    return genres.filter(g => g);
}

export function getGenre(id) {
    return genres.find(m => m._id === id);
}