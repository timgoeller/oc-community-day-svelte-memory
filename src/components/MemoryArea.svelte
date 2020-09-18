<script>
import MemoryCard from './MemoryCard.svelte'
import { flippedCards, finishedCards } from './../stores';

export let cardData = []

let memoryCards = []

flippedCards.subscribe(value => {
  if(value.length > 1) {
    if(memoryCards[value[0]].imageID === memoryCards[value[1]].imageID) {
      $finishedCards = [...$finishedCards, value[0], value[1]]
    }
    setTimeout(() => { $flippedCards = [] }, 500);
    
  }
})

export function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
</script>

<svelte:options accessors={true}/>

<div id='card-grid'>
  {#each cardData as data, index}
    <MemoryCard imageID={data.id} url={data.url} id={index} bind:this={memoryCards[index]}></MemoryCard>
  {/each}
</div>

<style>
#card-grid {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding-left: 150px;
  padding-right: 150px;
  justify-items: center;
}

@media (max-width: 1200px) {
		#card-grid {
      padding-left: 0;
      padding-right: 0;
    }
	}

@media (max-width: 900px) {
		#card-grid {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10px;
      /* grid-template-rows: repeat(3, minmax(75px, auto)); */
    }
	}
</style>