import {defineStore} from "pinia";
import axios from "axios";

export const useActorStore = defineStore("actorStore", {
    state:() => ({
        actor:[],
    }),
    actions:{
        async getActor(url,options){
            const result = await axios.get(url , options)
            this.actor = result.data
        },

    }
})