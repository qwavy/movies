import {defineStore} from "pinia";
import axios from "axios";

export const useSeriesStore = defineStore("seriesStore" , {
    state:() => ({
        series:[],
        isLoading:false
    }),
    actions:{
        async getSeries(url,options){
            this.isLoading = true
            const result = await axios.get(url , options)
            this.series = result.data
            this.isLoading = false
        }
    }
})