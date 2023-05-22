import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function dark(...inputs: string[]) {
  return cn(inputs.map((input) =>
    input
      .split(" ")
      .map((className) => `dark:${className}`)
      .join(" ")
  ))
}

export function create_apply_modifier_function(modifier: string) {
  return function apply_modifier(...inputs: string[]) {
    return cn(inputs.map((input) =>
      input
        .split(" ")
        .map((className) => `${modifier}:${className}`)
        .join(" ")
    ))
  }
}

export const md = create_apply_modifier_function("md")