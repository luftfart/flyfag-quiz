<script>
// @ts-nocheck
import MathJax from "$lib/components/MathJax.svelte";

import { browser } from "$app/environment";
import { page } from "$app/stores";

  // @ts-ignore
  import { onMount } from "svelte";
  import Game from "$lib/components/Game.svelte";
  //import { modules } from "./modulesQuestions";
  import { store } from "$lib/questions-store";
  import { repository } from "$lib/utils/stores";



   /**
     * @type {{ id: any; }}
     */
   // @ts-ignore
   export let challenge;
   const n  = $page.params.emne;//page.params;
   let moduleNr = $page.params.nr

   /*console.log('_module_data:', _module_data)
   let _modules =  get_modules();


  
   function get_modules(){
	if (browser) {
		_modules = JSON.parse(window.localStorage.getItem('demo'));
		
		console.log('store->', _modules)

		return _modules


	}
   }*/

   
   
   const modules =  $store[`module${moduleNr}`]; //_modules[`module${moduleNr}`];
   console.log(`module${moduleNr}->`,modules,modules.challenges[n])






   onMount(() => {
      console.log('loaded')
    });


 
    
    //console.log("challenge: ", $page);

    
    // @ts-ignore
    challenge = modules.challenges[n];
   

  

  // @ts-ignore
  //console.log("challenge: ",challenge);



  /**
   * @type {{ 1: { name: string; }; 2?: undefined; 3?: undefined; 15?: undefined; } | { 2: { name: string; }; 1?: undefined; 3?: undefined; 15?: undefined; } | { 3: { name: string; }; 1?: undefined; 2?: undefined; 15?: undefined; } | { 15: { name: string; }; 1?: undefined; 2?: undefined; 3?: undefined; } | null | undefined}
   */
  let moduleData = null;

  $: {
      const nr = +$page.params.nr; // Convert to number

      // Find module data in the repository based on the nr parameter
      // @ts-ignore
      moduleData = repository.find(item => item[nr]);

      // If module data is not found, you can handle it accordingly
      if (!moduleData) {
          console.error(`Module data for nr ${nr} not found.`);
          // You can redirect, show an error message, or handle it as needed
      }
  }

  
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <!--title>M{moduleNr} {moduleData[moduleNr].name} -  {moduleData[moduleNr].topics[challenge.id]} | flyfagquiz.no</title-->

  <title>M{moduleNr} {moduleData[moduleNr].name} - {challenge.topic} {moduleData[moduleNr].topics[challenge.id]} | flyfagquiz.no</title>
  <meta name="title" content="M15 Gassturbin -  Engine performance | flyfagquiz.no" />
  <meta name="description" content="Bestå alle part66 modulene med flyfagquiz.no, som over 30.000 andre. Stressfri med BESTÅTTGARANTI· Nå dine eksamensmål med prøveeskamen, øvingsoppgaver" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://flyfagquiz.no/" />
  <meta property="og:title" content="M15 Gassturbin -  Engine performance | flyfagquiz.no" />
  <meta property="og:description" content="Bestå alle part66 modulene med flyfagquiz.no, som over 30.000 andre. Stressfri med BESTÅTTGARANTI· Nå dine eksamensmål med prøveeskamen, øvingsoppgaver" />
  <meta property="og:image" content="/thumb.png" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://flyfagquiz.no/" />
  <meta property="twitter:title" content="M15 Gassturbin -  Engine performance | flyfagquiz.no" />
  <meta property="twitter:description" content="Bestå alle part66 modulene med flyfagquiz.no, som over 30.000 andre. Stressfri med BESTÅTTGARANTI· Nå dine eksamensmål med prøveeskamen, øvingsoppgaver" />
  <meta property="twitter:image" content="/thumb.png" />

  <!-- Meta Tags Generated with https://metatags.io -->
</svelte:head>

<main class="card w-full">

  
    <h1 class="p-2 mb-4 text-2xl font-extrabold leading-none tracking-tight text-primary-900  md:text-4xl lg:text-5xl ">M{moduleNr} <span class="text-blue-600 dark:text-blue-500"> {moduleData[moduleNr].name} -  {moduleData[moduleNr].topics[challenge.id]}</span></h1>
    <p class="p-2 lg:w-1/2 md:w-1/2 sm:w-full text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        Dette er bare en liten demo, men flere spørsmåler kommer jo:), Jeg jobber hardt å få publisere disse. Om du har noen spørsmål, forespørsel eller vil være med arbeidet kontakt meg direkte på:
        <a href="mailto:kontakt@{$page.url.origin.substring(8)}" class="link underline text-blue">kontakt@{$page.url.origin.substring(8)}</a>
    </p>
	<MathJax math={'\\( \\sqrt{11}\\).'}></MathJax>



  <Game {challenge} mode="mcq"/>
</main>

