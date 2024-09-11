import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getAgeFromBirthDate(birthDateString) {
  const today = new Date();
  const birthDate = new Date(
      birthDateString.substr(0, 4),
      birthDateString.substr(4, 2) - 1,
      birthDateString.substr(6)
);

  let age = today.getFullYear() - birthDate.getFullYear();

  if (today.getMonth() < birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}
