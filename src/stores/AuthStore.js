import { defineStore } from "pinia";

export const useAuthStore = defineStore('authStore',{
    state:() => ({
        isAuthed:true
    }),
    actions:{
        setIsAuthed(newValue){
            this.isAuthed = newValue
        }
    }
})