<script>
// @ts-nocheck

    import { page } from "$app/stores";
    import Module from "$lib/components/Module.svelte";

    let moduleNr = $page.params.nr
    

    let repository = [
	{ 
		1: {
			name: "Matematikk",
			topics: ["intro","prøveeksamen"]
		}
	},
	{ 
		2: {
			name: "Fysikk",
			topics: ["intro","prøveeksamen"]
		}
	},
	{ 
		3: {
			name: "Elektro",
			topics: ["intro","prøveeksamen"]
		}
	},
	{ 
		4: {
			name: "Elektronikklære",
			topics: ["intro","prøveeksamen"]
		}
	},
	{ 
		5: {
			name: "Digitalteknikk",
			topics: ["intro","prøveeksamen"]
		}
	},
	{ 
		6: {
			name: " Materiallære",
			topics: ["intro","prøveeksamen"]
		}
	},
	{ 
		7: {
			name: "Vedlikeholdsteknikk",
			topics: ["intro","prøveeksamen"]
		}
	},
	{ 
		8: {
			name: "Aerodynamikk",
			topics: ["intro","prøveeksamen"]
		}
	},
	{ 
		9: {
			name: "Human Factors",
			topics: ["intro","prøveeksamen"]
		}
	},
	{ 
		10: {
			name: "Lover og bestemmelser",
			topics: ["intro","prøveeksamen"]
		}
	},
	{ 
		11: {
			name: "Luftfartøylære",
			topics: ["intro","prøveeksamen"]
		}
	},
	{ 
		12: {
			name: "HASS",
			topics: ["intro","prøveeksamen"]
		}
	},
	{ 
		13: {
			name: "LASS",
			topics: ["intro","prøveeksamen"]
		}
	},
	{ 
		14: {
			name: "Motorfremdrift",
			topics: ["intro","prøveeksamen"]
		}
	},
	
	{ 
		15: {
			name: "GASS",
			topics: ["intro","prøveeksamen"]
		}
	},
	{ 
		16: {
			name: "Stempelmotor",
			topics: ["intro","prøveeksamen"]
		}
	},
	{ 
		17: {
			name: "Propeller",
			topics: ["intro","prøveeksamen"]
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
  <title>M{moduleNr} {moduleData[moduleNr].name} -  Engine performance | flyfagquiz.no</title>
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

{#if moduleData}
    
    <Module {moduleNr} {moduleData}></Module>
    <!-- You can display other module details here -->
{/if}

{#if !moduleData}
    <!-- You can display an error message or redirect the user -->
    <p>Module data not found.</p>
{/if}
