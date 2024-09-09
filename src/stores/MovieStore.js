import {defineStore} from "pinia";
import axios from "axios";


export const useMovieStore = defineStore("moviesStore",{
    state:() => ({
        movies:[],
        movie:[],
        actorsOfMovie:[],
        isLoading:false
    }),
    actions:{
        async getMovies(url, options){
            this.isLoading = true
            const result = await axios.get(url , options)
            this.movies = result.data
            this.isLoading = false
        },
        async getMoviePage(url , options){
            this.isLoading = true
            const result = await axios.get(url , options)
            this.movie = result.data
            this.isLoading = false
        },
        async getActorsOfMovie(url,options){
            this.isLoading = true
            const result = await axios.get(url,options)
            this.actorsOfMovie = result.data
            this.isLoading = false
        },
    }
})