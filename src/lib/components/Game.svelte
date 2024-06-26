<script lang="ts">
  import MathJax from "$lib/components/MathJax.svelte";

  import type { Question, Challenge } from "$lib/types";
  import Card from "./ui/Card.svelte";
  import TimerBar from "./ui/TimerBar.svelte";
  import Grid from "./ui/Grid.svelte";
  import Page from "./ui/Page.svelte";

  import GameButton from "./GameButton.svelte";
  import GameScore from "./GameScore.svelte";
  import GameReport from "./GameReport.svelte";

  import { nock, squakk, yeah } from "$lib/helpers/soundFx";
  import { store } from "$lib/questions-store.js";
  import { practiceStore } from "$lib/practice-store";

  import { marked } from "marked";


  export let challenge: Challenge;
  export let onWrong: (current: Question) => void = practiceStore.add;
  export let onCorrect: (current: Question) => void = () => {};
  export let mode: any;
  //export let module_id: number;

  const DURATION = 60;

  let total = challenge.questions.length;
  let results: boolean[] = new Array(total);
  let currentIdx = 0;
  let showTimer = true;

  let flawless: boolean;
  let current: Question;
  let wrongs: number;
  let passed: boolean;
  let isDone: boolean;

  $: flawless = wrongs === 0;
  $: current = challenge.questions[currentIdx];
  $: wrongs = results.filter((r) => r === false).length;
  $: passed = wrongs <= Math.round(total * 0.2); // 20% of questions correct
  $: isDone = currentIdx === total;

  $: if (isDone) {
    if (flawless) {
      //TODO make store use sveltekit or index it like this: [`module${module_id}`]
      store.complete({
        category: challenge.category,
        challenge: challenge.id,
      });
    }

    if (passed) {
      store.unlockNext({
        category: challenge.category,
        challenge: challenge.id,
      });
      yeah.play();
    }
  }

  function restart() {
    results = new Array(total);
    currentIdx = 0;
  }

  function handleCorrect() {
    nock.play();
    if (results[currentIdx] === undefined) results[currentIdx] = true;
    showTimer = false;
    setTimeout(() => {
      showTimer = true;
      currentIdx++;
      onCorrect(current);
    }, 200);
  }

  function handleWrong() {
    squakk.play();
    results[currentIdx] = false;
    onWrong(current);
  }

  function handleTimeout() {
    handleWrong();
    showTimer = false;
    setTimeout(() => {
      showTimer = true;
      currentIdx++;
    }, 200);
  }
</script>

<Page>
  {#if current}
    <Card >
      <span slot="progress">
        <TimerBar duration={DURATION} on:timeout={handleTimeout} {showTimer} />
      </span>
      <h1 class="text-3xl m-2 p-0 mt-46 font-bold w-full" slot="header">
        <!--{@html current.q}-->
        <!--MathJax math={ current.q}></MathJax-->
        {@html  marked(current.q)}

      </h1>
      {#if mode == "mcq"}
     
        {#each current.options as option, index (`${current.q}-${option}-${index}`)}
          
            <GameButton
              i={index}
              expected={current.answer}
              value={option}
              on:correct={handleCorrect}
              on:wrong={handleWrong}
            >
            <div class="bg-blue-500 hover:bg-blue-700 p-1 m-2 rounded"> <!--{@html marked(option)}--> <MathJax math={`${option}`}></MathJax></div>
            </GameButton>
          
        {/each}
     
      {:else}
        <Grid>
          {#each current.options as option, index (`${current.q}-${option}-${index}`)}
            <GameButton
              i={index}
              expected={current.answer}
              value={option}
              on:correct={handleCorrect}
              on:wrong={handleWrong}
            >
              {@html marked(option)}
            </GameButton>
          {/each}
        </Grid>
      {/if}
      <div slot="footer">
        <GameScore {results} />
      </div>
    </Card>
  {:else}
    <GameReport {challenge} {results} {restart} {passed} {flawless} />
  {/if}
</Page>

<style>
  /* h1 {
    font-size: 28px;
    margin: 0;
    padding: 4rem 0 0 0;
  } */
</style>
