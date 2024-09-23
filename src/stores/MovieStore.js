import {defineStore} from "pinia";
import axios from "axios";
import {fetchData} from "@/lib/utils.js";


export const useMovieStore = defineStore("moviesStore",{
    state:() => ({
        movies:[],
        trendingMoviesOfTheDay:[],
        trendingMoviesOfTheWeek:[],
        movie:[],
        actorsOfMovie:[],
        isLoading:false,
        apiUrls:{
            urlMoviesTheDay:"https://api.themoviedb.org/3/trending/movie/day?language=en-US",
            urlMoviesTheWeek:"https://api.themoviedb.org/3/trending/movie/week?language=en-US"
        }
    }),
    actions:{
        async getMovies(url, options){
            this.isLoading = true
            const result = await axios.get(url , options)
            this.movies = result.data
            this.isLoading = false
        },
        async getMoviesDay(options){
            await fetchData(this, this.apiUrls.urlMoviesTheDay , options, "trendingMoviesOfTheDay")
        },
        async getMoviesWeek(options){
            await fetchData(this, this.apiUrls.urlMoviesTheWeek , options, "trendingMoviesOfTheWeek")
        },
        async getActorsOfMovie(url,options){
            this.isLoading = true
            const result = await axios.get(url,options)
            this.actorsOfMovie = result.data.cast
            this.isLoading = false
        },
        async getMoviePage(url , options){
            this.isLoading = true
            const result = await axios.get(url , options)
            this.movie = result.data
            this.isLoading = false
        },
    }

})