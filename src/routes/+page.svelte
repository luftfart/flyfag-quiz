<script>
// @ts-nocheck

    import { onMount } from "svelte";
    import VisuallyHidden from "$lib/components/ui/VisuallyHidden.svelte";
    import Page from "$lib/components/ui/Page.svelte";
    import Card from "$lib/components/ui/Card.svelte";
    import Grid from "$lib/components/ui/Grid.svelte";
    import ChallengeLink from "$lib/components/ChallengeLink.svelte";
    import { store } from "$lib/questions-store.js";
    import { practiceStore } from "$lib/practice-store";
    import { subtracts } from "./subtract/[n]/subtractQuestions.ts";
    import { adds } from "./add/[n]/addQuestions.ts";
    import { tables } from "./table/[n]/tableQuestions.ts";
    import { modules } from "./m[nr]/[emne]/modulesQuestions.ts";
    import {_modules} from "$lib/modules-generator.ts";

    //console.log("modules",modules)
   
    let categories = []; //adds, subtracts, adds, tables, modules
    _modules.forEach(module => {
      // @ts-ignore
      categories.push(module);
    })

  
    onMount(() => {
      practiceStore.sync();
    });
  </script>
  
  <svelte:head>
    <!-- Primary Meta Tags -->
    <title>Module 1-15 part66 prøveeksamener | Flyfagquiz.no | flyfagquiz.no</title>
    <meta name="title" content="Module 1-15 part66 prøveeksamener | Flyfagquiz.no | flyfagquiz.no" />
    <meta name="description" content="Bestå alle part66 modulene med flyfagquiz.no, som over 30.000 andre. Stressfri med BESTÅTTGARANTI· Nå dine eksamensmål med prøveeskamen, øvingsoppgaver" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://flyfagquiz.no/" />
    <meta property="og:title" content="Module 1-15 part66 prøveeksamener | Flyfagquiz.no | flyfagquiz.no" />
    <meta property="og:description" content="Bestå alle part66 modulene med flyfagquiz.no, som over 30.000 andre. Stressfri med BESTÅTTGARANTI· Nå dine eksamensmål med prøveeskamen, øvingsoppgaver" />
    <meta property="og:image" content="/ad.png" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://flyfagquiz.no/" />
    <meta property="twitter:title" content="Module 1-15 part66 prøveeksamener | Flyfagquiz.no | flyfagquiz.no" />
    <meta property="twitter:description" content="Bestå alle part66 modulene med flyfagquiz.no, som over 30.000 andre. Stressfri med BESTÅTTGARANTI· Nå dine eksamensmål med prøveeskamen, øvingsoppgaver" />
    <meta property="twitter:image" content="/ad.png" />

    <!-- Meta Tags Generated with https://metatags.io -->
  </svelte:head>
  
<main class="w-full" data-sveltekit-reload>
  🚧 Arbeid pågår 🚧
  <!-- TODO ability to pin most desired modules -->
  <Page reverse>
    <VisuallyHidden>
      <h1>Categories</h1>
    </VisuallyHidden>
    {#each categories as category}
      <Card>
        <a href="{category.slug}/0" slot="header" class="underline "><h2 >{category.title}</h2></a>
        <Grid>
          {#each Object.entries($store[category.category]) as [n, challenge]}
            <ChallengeLink
              href={`${category.slug}/${n}`}
              locked={!challenge.unlocked}
              unlocked={challenge.unlocked}
              completed={challenge.completed}
            >
              {n}
            </ChallengeLink>
          {/each}
        </Grid>
      </Card>
    {/each}
    <Card>
      <h2 slot="header">Practice</h2>
      <Grid>
        <ChallengeLink href="/game" present />
        Play a game
        <span />
        <ChallengeLink
          href="/practice/today"
          unlocked
          completed={$practiceStore.today.length === 0}
        >
          {$practiceStore.today.length}
        </ChallengeLink>
        Questions for today
        <span />
        <ChallengeLink href="/practice/someday" locked>
          {$practiceStore.someday.length}
        </ChallengeLink>
        Questions for later
      </Grid>
    </Card>
  </Page>
</main>
  <style>
    h2 {
      margin: 0;
      padding: 5rem 0 0 0;
      font-weight: 400;
      font-size: 28px;
      text-transform: uppercase;
    }
  </style>
  