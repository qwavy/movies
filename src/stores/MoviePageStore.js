import {defineStore} from "pinia";
import axios from "axios";

import {options} from "@/constants/index.js";

export const useMoviePageStore = defineStore("moviePageStore" , {
    state:() => ({
        movie:[],
        actorsOfMovie:[],
        isLoading:false,
    }),
    actions:{
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
        // async rateTheMovie(url , options){
        //     this.loading = true
        //     const result = await axios.post(url , options)
        //     console.log(result)
        //     this.loading = false
        // }
    }
})