<script>
  import { ImageLoader } from "carbon-components-svelte";
  import { createPocketbaseUser, getUsernameFromEmail } from "$lib/utils/api";
  /**
   * @type {any}
   */
  let usr_email;

  function Register() {
    let username = getUsernameFromEmail(usr_email);
    const usrdata = {
      email: usr_email,
      username: `${username}`,
      emailVisibility: true,
      password: `${username}12345678`,
      passwordConfirm: `${username}12345678`,
      type: "waitlist",
    };
    createPocketbaseUser(usrdata);
  }
</script>

<h1>Velkommen</h1>
<a href="/flightdeck/deck" class="p-2">Orientering av flydekket</a>
<ImageLoader
  src="https://media.defense.gov/2021/May/23/2002722447/2000/2000/0/210426-F-LW859-9007.JPG"
  class="w-1/2"
/>
<div
  data-v-d7623d4d=""
  class="flex flex-col space-y-4 md:space-y-12 grow justify-center md:mt-40"
>
  <div
    data-v-d7623d4d=""
    class="text-center space-y-4 md:space-y-4 justify-center grow sm:grow-0"
  >
    <h1
      data-v-d7623d4d=""
      class="text-5xl md:text-6xl sf-rounded font-[900] md:h-auto pt-12 lg:w-[600px] mx-auto text-left sm:text-center fadeIn"
      style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;"
    >
      Alt du trenger for å bestå eksamen
    </h1>
    <p
      data-v-d7623d4d=""
      class="hidden sm:flex md:text-2xl text-gray-500 lg:w-[600px] mx-auto fadeIn text-center justify-center"
      style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;"
    >
      Gi deg selv optimal forberedelse. Øv med Norges største samling av øvelser
      i alle flyfag part66 moduler
    </p>
  </div>
  <div
    class="flex flex-col lg:flex-row justify-center fadeIn md:space-x-2 lg:space-y-0 space-y-2 pb-8"
    style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;"
  >
    <p
      data-v-d7623d4d=""
      class="sm:hidden md:text-2xl text-gray-500 md:w-[600px] mx-auto mb-4"
    >
      Gi deg selv optimal forberedelse. Øv med Norges største samling av øvelser
      i alle flyfag part66 moduler
    </p>
    <input
      bind:value={usr_email}
      type="email"
      name="email"
      required
      class="px-6 py-4 bg-white border shadow-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-blue-200 focus:ring-4 block lg:w-1/3 rounded-lg text-lg"
      placeholder="olanordmann@gmail.com"
    /><button
      on:click={Register}
      type="submit"
      class="px-6 py-4 bg-black text-white rounded-lg hover:bg-gray-800 text-lg relative"
    >
      Meld deg på venteliste
    </button>
  </div>
</div>
<div
  class="flex flex-col container mx-auto mt-12 lg:mt-24 space-y-2 fade-in"
  data-v-d7623d4d=""
  style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;"
>
  <h3 class="section-title" data-v-d7623d4d="">
    Hva er flyfagquiz?
  </h3>
  <p class="section-body" data-v-d7623d4d="">
    Flyfagquiz tilbyr enkel og kraftig øving på ulike flyfagemner gjennom <a href="/flightdeck/deck">veiledet interaktive medier</a> og <a href="/m17/0">flervalgsspørsmål</a>. Det er nyttig for både lærere og studenter:

    <br>- Lærere får statistisk data om elevenes nivå og forståelse.
    <br>- Studenter kan fordype seg i vanskelige temaer.
    
    Vi, et team av tidligere flyfagstudenter, jobber hardt for å forbedre nettstedet og setter stor pris på tilbakemeldinger.
  </p>
</div>
<ImageLoader
  src="https://www.easyairportparking.uk/assets/das-flugzeug-cockpit-bild-2.jpg"
  class="w-1/2"
/>
<iframe
  title="How an Airliner Cockpit Works"
  class="w-full"
  height="281"
  src="https://www.youtube.com/embed/TYJ8uoJ7DAk?feature=oembed"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen=""
></iframe>
