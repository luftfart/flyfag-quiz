<script context="module">
  import Game from "$lib/components/Game.svelte";
  import { subtracts } from "./subtractQuestions";

  export async function preload(page) {
    const { n } = page.params;
    const challenge = subtracts.challenges[n];
    if (!challenge) return this.error(404, "Not found");
    return { challenge };
  }
</script>

<script>
  export let challenge;
</script>

<svelte:head>
  <title>Subtractions {challenge.id} - flyfagquiz</title>
</svelte:head>

<Game {challenge} />
