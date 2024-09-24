import {defineStore} from "pinia";

export const useGlobalStore = defineStore("globalStore" , {
    state: () => ({
        theme:"light",
        isLoading:false
    }),
    actions:{
        setTheme(value){
            this.theme = value
        },
        setIsLoading(value){
            this.isLoading = value
        }
    }
})