import {defineStore} from "pinia";

export const useActorStore = defineStore("actorStore", {
    state:() => ({
        actor:[],
    }),
    actions:{
        async getActor(url,options){

        }
    }
})