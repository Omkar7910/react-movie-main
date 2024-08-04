const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'e746e43b866ba088d7481de741fc9de6',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;