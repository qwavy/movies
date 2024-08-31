import {defineStore} from "pinia";
import axios from "axios";


export const useMoviesStore = defineStore("moviesStore",{
    state:() => ({
        movies:[],
        isLoading:false
    }),
    actions:{
        async getMovies(url, options){
            this.isLoading = true
            const result = await axios.get(url , options)
            this.movies = result.data
            this.isLoading = false
        }
    }
})