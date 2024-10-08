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
            urlMoviesTheWeek:"https://api.themoviedb.org/3/trending/movie/week?language=en-US",
            urlFilterGenres:"https://api.themoviedb.org/3/genre/movie/list"
        },
        filterGenres:[

        ],
        pickedFilters:[
        ]
    }),
    actions:{
        async getMovies(params){
            await fetchData(this, this.apiUrls.urlMovies , params ,"movies")
        },
        async getMoviesDay(){
            await fetchData(this, this.apiUrls.urlMoviesTheDay ,{}, "trendingMoviesOfTheDay")

        },
        async getMoviesWeek(){
            await fetchData(this, this.apiUrls.urlMoviesTheWeek ,{},  "trendingMoviesOfTheWeek")
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
        async getGenres(options){
            await fetchData(this, this.apiUrls.urlFilterGenres, options, "filterGenres")
        },
        setPickedFilters(genre){
            if(this.pickedFilters.includes(genre)){
                return
            }
            this.pickedFilters.push(genre)
        },
        deletePickedFilters(genre){
            this.pickedFilters.splice(this.pickedFilters.indexOf(genre),1)
        }
    }

})