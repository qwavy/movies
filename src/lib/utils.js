import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getAgeFromBirthDate(birthDateString) {
    const birthDay = Date.parse(new Date(birthDateString))
    const today = Date.parse(new Date())
    const age = today - birthDay
    console.log(birthDay)

    console.log(new Date(age).toString())
}
