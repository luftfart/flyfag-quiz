<script lang="ts">
  import Page from "$lib/components/ui/Page.svelte";
  import Card from "$lib/components/ui/Card.svelte";
</script>

<svelte:head>
  <title>flyfagquiz - oops, page not found</title>
</svelte:head>

<Page>
  <Card>
    <h1 slot="header">
      Could not find the page you're looking for
      <br />
      😢
    </h1>
  </Card>
</Page>

<style>
  h1 {
    margin: 1em;
  }
</style>
