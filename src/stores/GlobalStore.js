import {defineStore} from "pinia";

export const useGlobalStore = defineStore("globalStore" , {
    state: () => ({
        theme:"light",
    }),
    actions:{
        setTheme(value){
            this.theme = value
        }
    }
})