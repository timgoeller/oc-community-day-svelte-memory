<script>
import { flippedCards, finishedCards } from '../stores';

export let id
export let imageID
export let url

let flipped = true

flippedCards.subscribe(value => {
  if(!$finishedCards.includes(id))
    flipped = value.includes(id)
})

finishedCards.subscribe(value => {
  if(value.includes(id)) {
    flipped = true
  }
})

function cardClicked() {
  if(!$flippedCards.includes(id))
  $flippedCards = [...$flippedCards, id]
}
</script>

<svelte:options accessors={true}/>

<div id='card' class:flipped on:click={cardClicked}>
  <div id='front'><div><img src={url}></div></div>
  <div id='back'></div>
</div>

<style>
  #card {
    background-color: white;
    border-radius: 2px;

    border: 10px solid white;
    border-radius: 5px;
    /* outline: 1px solid black; */
    box-shadow: 0px 3px 5px 0px #12007d, 0px 0px 0px 1px black;
    cursor: grab;

    transition: 0.3s;
    transform-style: preserve-3d;
    position: relative;
    /* overflow: hidden; */
  }

  @media (min-width: 600px) {
    #card {
      width: 100px;
      height: 100px;
    }

    #back {
      width: 100px;
      height: 100px;
    }

    #front div {
      height: 100px;
    }
  }
  
  @media (max-width: 600px) {
    #card {
      width: 70px;
      height: 70px;
    }

    #back {
      width: 70px;
      height: 70px;
    }

    #front div {
      height: 70px;
    }
  }

  @media (max-width: 400px) {
    #card {
      width: 50px;
      height: 50px;
    }

    #back {
      width: 50px;
      height: 50px;
    }

    #front div {
      height: 50px;
    }
  }

  #card.flipped {
    transform: rotateY(180deg);
  }

  #front, #back {
    backface-visibility: hidden;
    position: absolute;
  }

  #front {
      z-index: 1;
      transform: rotateY(180deg);
  }

  #front div {
    overflow: hidden;
  }

  #front div img {
    width: 100%;
    display: flex;
  }

  #back {
    z-index: 2; /* back side, placed above front */
    transform: rotateY(0deg);
    background: repeating-linear-gradient( -45deg, #c1b1f8, #c1b1f8 10px, #447cc4 10px, #447cc4 20px );
  }


</style>