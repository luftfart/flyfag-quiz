<script context="module">
  import Game from "$lib/components/Game.svelte";
  import { adds } from "./addQuestions";

  export async function preload(page) {
    const { n } = page.params;
    const challenge = adds.challenges[n];
    if (!challenge) return this.error(404, "Not found");
    return { challenge };
  }
</script>

<script>
  export let challenge;
</script>

<svelte:head>
  <title>Additions {challenge.id} - flyfagquiz</title>
</svelte:head>

<Game {challenge} />
