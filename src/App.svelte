<script>
import MemoryArea from './components/MemoryArea.svelte'
import getCats from './api'
import { onMount } from 'svelte';
import { tick } from 'svelte';
let gameStarted = false

let memoryArea

function startGame() {
	getCats(9,useCatImages)
}

async function useCatImages(catData) {
	console.log(catData)
	
	gameStarted = true
	await tick();

	memoryArea.cardData = memoryArea.shuffle(catData.map(data => ({id: data.id, url: data.url})).flatMap(i => [i,i]))
}
</script>

<header><h1>Memory</h1></header>
<main>
	{#if gameStarted}
		<MemoryArea bind:this={memoryArea}></MemoryArea>
	{:else}
		<button on:click={startGame}>Start Game</button>
	{/if}
</main>

<style>

	:global(body) {
		display: flex;
		flex-direction: column;
		background: #D3B8FF;
		background: -webkit-linear-gradient(top left, #D3B8FF, #3E7AC1);
		background: -moz-linear-gradient(top left, #D3B8FF, #3E7AC1);
		background: linear-gradient(to bottom right, #D3B8FF, #3E7AC1);
		background-attachment: fixed;
	}

	header {
		height: 100px;
		display: flex;
		align-items: center;
		margin-left: 40px;
	}

	@media (max-width: 800px) {
		header {
			justify-content: center;
			margin-left: 0;
		}
	}

	h1 {
		font-family: 'Ranchers';
		font-size: 60px;
		margin: 0;
		color: #12007d;
		text-shadow: -1px 2px 1px hsl(0deg 0% 100%), -2px 4px 1px hsl(0deg 0% 100%), -3px 6px 1px hsl(0deg 0% 100%);
	}

	main {
		flex-grow: 1;
		margin: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	button {
		font-family: 'Ranchers';
		font-size: 50px;
		color: #12007d;
		background-color: white;
		border: none;
		border-radius: 5px;
		padding: 15px 45px 15px 45px;
		box-shadow: 0px 3px 5px 0px #12007d;
	}

	button:hover {
		cursor: pointer;
	}
</style>