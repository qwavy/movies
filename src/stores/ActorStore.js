import {defineStore} from "pinia";
import axios from "axios";
import {fetchData} from "@/lib/utils.js";

export const useActorStore = defineStore("actorStore", {
    state:() => ({
        actor:[],
        moviesPerson:[]
    }),
    actions:{
        async getActor(url,options){
            const result = await axios.get(url , options)
            this.actor = result.data
        },
        async getMoviesPerson(url,options){
            await fetchData(this, url , options, "moviesPerson")
        }

    }
})