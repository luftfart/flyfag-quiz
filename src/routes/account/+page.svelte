<script lang="ts">
  import Avatar from "svelte-avatar";
  import type { Question } from "$lib/types";
  import Page from "$lib/components/ui/Page.svelte";
  import Card from "$lib/components/ui/Card.svelte";
  import { practiceStore } from "$lib/practice-store";
  import { accountStore } from "$lib/account-store";

  let stats: Question[];
  $: stats = $practiceStore.today
    .concat($practiceStore.someday)
    .sort((q1, q2) => q2.mistakes - q1.mistakes);
</script>

<svelte:head>
  <title>Account - flyfagquiz</title>
</svelte:head>

<Page>
  <Card>
   
    <Avatar class="object-contain w-full pb-9"  name={$accountStore.name} src="https://avatars0.githubusercontent.com/u/6810985?s=460&u=a2a24f33ad8d17377cef8163f596a7fbd1501cd4&v=4" />

    <div slot="footer" class="m-8">
      <label
        class="block text-gray-700 text-lg font-bold mb-2 center"
        for="name"
      >
        Navnet ditt er:
      </label>
      <input
        id="name"
        type="text"
        class="text-2xl p-4 font-bold text-center bg-white text-black focus:outline-none
        focus:shadow-outline border border-gray-300 py-2 px-4 block w-full
        appearance-none leading-normal rounded-full"
        bind:value={$accountStore.name}
      />

      <br><br>
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label class="block text-gray-700 text-lg font-bold mb-2 center">Endre tid mellom hver spørsmål: 60 sek</label>
      <input  value='60' class="shadow-outline border border-gray-300 py-2 px-4 block w-full
      appearance-none leading-normal rounded-full" /> 
      <small>* AUTO (standardinnstilling) vil regne akkurat riktig tid, akkurat som eksamen</small>
  
    </div>
  </Card>
  <Card>
    <div class="overflow-y-auto stats p-8 m-4">
      <table class="table-fixed w-full">
        <thead>
          <tr>
            <th class="text-left w-1/2 p-4">Question</th>
            <th class="text-right w-1/4 p-4">Mistakes</th>
          </tr>
        </thead>
        {#each stats as question, i}
          <tr class={i % 2 ? "bg-gray-100" : ""}>
            <td class="p-4 text-left">
              <pre>{question.q} = {question.answer}</pre>
            </td>
            <td class="p-4 text-right">{question.mistakes}</td>
          </tr>
        {/each}
      </table>
    </div>
  </Card>
  <Card>
    <h2 slot="header" class="m-8 text-4xl">Om</h2>
    <div class="p-10 text-lg text-center">
      <p>
        Flyfagquiz er laget  for å øve på modulene, når du har ledig tid
      </p>
      <!--p class="mt-2">
        The avatars are from
        <a href="https://bigheads.io" target="_blank">bigheads.io</a>
        made by
        <a href="https://twitter.com/robertbrosma">@robertbrosma</a>
      </p>
      <div class="m-12">
        <a href="https://www.buymeacoffee.com/vnglst" target="_blank">
          <img
            src="https://cdn.buymeacoffee.com/buttons/default-green.png"
            alt="Buy Me A Coffee"
          />
        </a>
      </div-->

      <p class="my-4">🚧 Arbeid pågår 🚧</p>

      <!--p>
        <a href="https://github.com/luftfart/flyfagquiz">Kildekode på Github</a>
      </p-->
    </div>
    <div slot="footer" class="p-5 text-center bg-red-100 rounded-b-lg">
      <button
        on:click={(e) => {
          const sure = confirm("Cannot be undone, are you sure?");
          if (sure) {
            localStorage.clear();
            window.location.reload();
          } else {
            e.preventDefault();
          }
        }}
      >
        Nullstill framgangen <!---->
      </button>
    </div>
  </Card>
</Page>

<style>
  .stats {
    max-height: 40rem;
  }
</style>
