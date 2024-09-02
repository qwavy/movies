export const urlMoviesTheDay = "https://api.themoviedb.org/3/trending/movie/day?language=en-US"

export const urlMoviesTheWeek = "https://api.themoviedb.org/3/trending/movie/week?language=en-US"

// export const

export const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.API_KEY}`
    }
}
