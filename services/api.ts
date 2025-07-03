export const TMDB_config={
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers:{
        accept:'application/json',
        Authorization:`Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
}

export const fetchMovies= async({query}:{query:string})=>{
    const endpoint=query
    ? `${TMDB_config.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${TMDB_config.BASE_URL}/discover/movie?sort_by=popularity.desc`;
    const response=await fetch(endpoint,{
        method:'GET',
        headers:TMDB_config.headers
    })

    if(!response.ok){
        throw new Error("failed to fetch movies",response.statusText);
    }

    const data=await response.json();
    return data.results;
}

// const url = 'https://api.themoviedb.org/3/discover/movie/movies?include_adult=false&language=en-US&page=1';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZWMzYmU3ZjAxNzhhYWU3ZTNjMDVhZmVmNzBmZDFjNSIsIm5iZiI6MTc1MTMxMTYzMy4yNTMsInN1YiI6IjY4NjJlNTExYmI3ODNiOGMwMDU1OGQyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dxW8yyVvQOnAh2lmSmuNtYpRxq1d-v6ylgUnI7rqCbc'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));