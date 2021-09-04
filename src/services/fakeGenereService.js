const generes = [
    { _id: "g_123", name: "Action" },
    { _id: "g_124", name: "Comedy" },
    { _id: "g_125", name: "Romance" },
    { _id: "g_126", name: "SciFi" }
];


export function getGeners() {
    return generes;
}

export function getGenere(id) {
    return generes.find(m => m._id === id);
}