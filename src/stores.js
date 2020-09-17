import { writable } from 'svelte/store'

export const firstFlippedCard = writable(null)
export const secondFlippedCard = writable(null)
export const finishedCards = writable([])
export const flippedCards = writable([])