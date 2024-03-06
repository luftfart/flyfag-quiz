<script>
// @ts-nocheck


import { page } from "$app/stores";

  // @ts-ignore
  import { onMount } from "svelte";
  import Game from "$lib/components/Game.svelte";
  //import { modules } from "./modulesQuestions";

  import { store } from "$lib/utils/stores";

   /**
     * @type {{ id: any; }}
     */
   // @ts-ignore
   export let challenge;
   const n  = $page.params.emne;//page.params;
   let moduleNr = $page.params.nr
   
   
   const modules = $store[`module${moduleNr}`];
   //console.log('modules->',moduleNr)

  



  


 
    
    //console.log("challenge: ", $page);

    
    // @ts-ignore
    challenge = modules.challenges[n];
   

  

  // @ts-ignore
  //console.log("challenge: ",challenge);



  let repository = [
        { 
            1: {
                name: "Matte",
                topics: ["algebra","brøk"]
            }
        },
        { 
            2: {
                name: "Fysikk",
                topics: ["algebra","brøk"]
            }
        },
        { 
            3: {
                name: "Elektro",
                topics: ["algebra","brøk"]
            }
        },
        { 
            4: {
                name: "Elektro",
                topics: ["algebra","brøk"]
            }
        },
        { 
            5: {
                name: "Digitalteknikk el. Instrumenter",
                topics: ["algebra","brøk"]
            }
        },
        { 
            6: {
                name: " Material- og komponentlære",
                topics: ["algebra","brøk"]
            }
        },
        { 
            7: {
                name: "Vedlikeholdsteknikk",
                topics: ["algebra","brøk"]
            }
        },
        { 
            8: {
                name: "Aerodynamikk",
                topics: ["algebra","brøk"]
            }
        },
        { 
            9: {
                name: "Human Factors",
                topics: ["algebra","brøk"]
            }
        },
        { 
            10: {
                name: "Lover og bestemmelser ",
                topics: ["algebra","brøk"]
            }
        },
        { 
            11: {
                name: "LASS",
                topics: ["algebra","brøk"]
            }
        },
        { 
            12: {
                name: "HASS",
                topics: ["algebra","brøk"]
            }
        },
        { 
            13: {
                name: "LASS",
                topics: ["algebra","brøk"]
            }
        },
        { 
            14: {
                name: "Elektro",
                topics: ["algebra","brøk"]
            }
        },
        
        { 
            15: {
                name: "Gassturbinmotor",
                topics: ["algebra","brøk"]
            }
        },
        { 
            16: {
                name: "Gassturbinmotor",
                topics: ["algebra","brøk"]
            }
        },
        { 
            17: {
                name: "Gassturbinmotor",
                topics: ["algebra","brøk"]
            }
        }

    ];

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
  <title>M{moduleNr} {moduleData[moduleNr].name} -  {moduleData[moduleNr].topics[challenge.id]} | flyfagquiz.no</title>
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

<div class="card">

  
    <h1 class="p-2 mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl ">Module {moduleNr}: <span class="text-blue-600 dark:text-blue-500"> {moduleData[moduleNr].name} -  {moduleData[moduleNr].topics[challenge.id]}</span></h1>
    <p class="p-2 w-1/2 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>


  <Game {challenge} mode="mcq"/>
</div>

