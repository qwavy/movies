import {defineStore} from "pinia";
import axios from "axios";
import {fetchData} from "@/lib/utils.js";

export const useSeriesStore = defineStore("seriesStore" , {
    state:() => ({
        series:[],
        trendingSeriesOfTheDay:[],
        trendingSeriesOfTheWeek:[],
        isLoading:false,
        apiUrls:{
            urlSeriesTheDay:"https://api.themoviedb.org/3/trending/tv/day?language=en-US",
            urlSeriesTheWeek:"https://api.themoviedb.org/3/trending/tv/week?language=en-US"
        },
    }),
    actions:{
        async getSeries(url,options){
            this.isLoading = true
            const result = await axios.get(url , options)
            this.series = result.data
            this.isLoading = false
        },
        async getSeriesDay(options){
            await fetchData(this, this.apiUrls.urlSeriesTheDay , options, "trendingSeriesOfTheDay")
        },
        async getSeriesWeek(options){
            await fetchData(this, this.apiUrls.urlSeriesTheWeek , options, "trendingSeriesOfTheWeek")
        },
    }
})