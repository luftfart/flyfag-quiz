<script>
  import { page } from "$app/stores";
  // @ts-ignore
  import { onMount } from "svelte";
  import Game from "$lib/components/Game.svelte";
  import { tables } from "./tableQuestions";

  


  /**
     * @type {{ id: any; }}
     */
   // @ts-ignore
   export let challenge;

    const n  = $page.params.n;//page.params;
    //console.log("challenge: ", $page);

    
    // @ts-ignore
    challenge = tables.challenges[n];
   

  

  // @ts-ignore
  //console.log("challenge: ",challenge);




  
</script>

<svelte:head>
  <title>Tables {challenge.id} - flyfagquiz</title>
</svelte:head>


<div class="card">
  <Game {challenge} />
</div>

