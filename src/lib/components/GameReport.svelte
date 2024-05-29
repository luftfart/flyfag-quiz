<script lang="ts">
  import type { Challenge } from "$lib/types";
  import Card from "./ui/Card.svelte";
  import IconWrong from "./ui/IconWrong.svelte";
  import Button from "./ui/Button.svelte";

  export let results: boolean[];
  export let restart: () => void;
  export let flawless: boolean = false;
  export let passed: boolean = false;
  export let challenge: Challenge;

  const { slug, id, questions, unlocks } = challenge;
</script>

<Card>
  <h1 class="my-10" slot="header">REPORT CARD</h1>
  {#if flawless}
    <p>Flawless! 🎉</p>
  {:else}
    {#if passed}
      <p>Passed! 🚀</p>
    {/if}
    <ul>
      {#each questions as question, idx}
        {#if !results[idx]}
          <li class="text-left">
            <IconWrong />
            <p class="font-bold text-xs text-left">{@html question.q}:</p> 
            <p class="text-xs text-left">{@html question.answer}</p>
            
          </li>
        {/if}
      {/each}
    </ul>
  {/if}
  <div class="call-to-actions p-8" slot="footer">
    <Button
      on:click={restart}
      primary
      pill
      href={`/${slug}/${id}`}
      elementType="link"
    >
      {flawless ? 'Again' : 'Try again'}
    </Button>
    {#if passed && unlocks}
      <Button
        on:click={restart}
        success
        pill
        animate
        delay={100}
        href={`/${slug}/${unlocks}`}
        elementType="link"
      >
        Next
      </Button>
    {:else}
      <Button on:click={restart} success pill href={`/`} elementType="link">
        Overview
      </Button>
    {/if}
  </div>
</Card>

<style>


  



  p {
    font-size: 24px;
    text-align: center;
  }

  .call-to-actions {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 2em 0;
  }

  h1 {
    font-size: 28px;
  }
</style>
