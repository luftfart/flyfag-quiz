<script >
  import { fly } from "svelte/transition";
    import Footer from "../Footer.svelte";
  export let reverse = false;

  export let APP_VERSION = "v0.4.5";
  export let COMMIT_HASH = "f34rfs";
</script>

<div
  class="animated"
  transition:fly={{ x: reverse ? -200 : 200, duration: 100 }}
>
  <main>
    <slot />
  </main>
 <Footer {APP_VERSION} {COMMIT_HASH}></Footer>
</div>

<style>
  .animated {
    position: absolute;
    width: 100vw;
  }

  main {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  footer {
    color: var(--grey-300);
    margin: 4rem 0 2rem 0;
    font-size: 10px;
    text-align: center;
  }

  span {
    color: var(--red-050);
  }
</style>
