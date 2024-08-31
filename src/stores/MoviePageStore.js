import {defineStore} from "pinia";
import axios from "axios";

import {options} from "@/constants/index.js";

export const useMoviePageStore = defineStore("moviePageStore" , {
    state:() => ({
        movie:[],
        isLoading:false,

    }),
    actions:{
        async getMoviePage(url , options){
            this.isLoading = true
            const result = await axios.get(url , options)
            console.log(result)
            this.movie = result.data
            this.isLoading = false
        }
    }
})