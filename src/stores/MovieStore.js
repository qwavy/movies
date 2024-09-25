import {defineStore} from "pinia";
import axios from "axios";
import {fetchData} from "@/lib/utils.js";
import {options} from "@/constants/index.js";

export const useMovieStore = defineStore("moviesStore",{
    state:() => ({
        movies:[],
        trendingMoviesOfTheDay:[],
        trendingMoviesOfTheWeek:[],
        movie:[],
        actorsOfMovie:[],
        isLoading:false,
        apiUrls:{
            urlMovies:"https://api.themoviedb.org/3/discover/movie",
            urlMoviesTheDay:"https://api.themoviedb.org/3/trending/movie/day?language=en-US",
            urlMoviesTheWeek:"https://api.themoviedb.org/3/trending/movie/week?language=en-US"
        },
        pickedFilterGenres:[
        ]
    }),
    actions:{
        async getMovies(){
            await fetchData(this, this.apiUrls.urlMoviesTheDay , options, "movies")
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
        setPickedFilterGenres(genre){
            if(this.pickedFilterGenres.includes(genre)){
                return
            }
            this.pickedFilterGenres.push(genre)
        },
        deletePickedFilterGenre(genre){
            this.pickedFilterGenres = this.pickedFilterGenres.filter((el) => el !== genre)
        }
    }

})