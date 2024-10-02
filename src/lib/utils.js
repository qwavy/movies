import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getAgeFromBirthDate(birthDateString,deathDate = null) {
    if(deathDate) {
        const birthDay = new Date(birthDateString).getFullYear()
        const deathDate = new Date().getFullYear()
        const age = deathDate - birthDay

        return age
    }
    const birthDay = new Date(birthDateString).getFullYear()
    const today = new Date().getFullYear()
    const age = today - birthDay

    return age
}

export function getDateFromYear(year){
    return `${year}-01-01`
}
export function getYearFromDate(date){
    return +date.split("-")[0]
}

import {options} from "@/constants/index.js";

export async function fetchData(store, url, params, dataKey){
    try{
        const result = await axios.get(url,{
            ...options,
            params
        })
        store[dataKey] = result.data
    }catch (e){
        console.log(e)
    }
}