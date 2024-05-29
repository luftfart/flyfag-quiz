<script >
  import { fly } from "svelte/transition";
    import Footer from "../Footer.svelte";
  export let reverse = false;

  export let APP_VERSION = "v0.4.5";
  export let COMMIT_HASH = "f34rfs";
</script>

<div
  class="animated "
  transition:fly={{ x: reverse ? -200 : 200, duration: 100 }}
>
  <main>
    <slot />
  </main>
 <!--Footer {APP_VERSION} {COMMIT_HASH}></Footer-->
</div>

<style>
  .animated {
    /*position: absolute;*/
    width: 100vw;
  }

 

 
</style>
