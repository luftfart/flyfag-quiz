<script>
    import { browser } from "$app/environment";

    import "../app.css";
    import Footer from "$lib/components/Footer.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
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


  //import { ModeWatcher } from "mode-watcher";
  import "carbon-components-svelte/css/all.css";
  import { Home, MessageCircle, User, TicketPercent, Boxes, AArrowDown } from "lucide-svelte";
  
  import {
    Header,
    HeaderNav,
    HeaderNavItem,
    HeaderNavMenu,
    SideNav,
    SideNavItems,
    SideNavMenu,
    SideNavMenuItem,
    SideNavLink,
    SideNavDivider,
    SkipToContent,
    Content,
    Grid,
    Row,
    Column,
  } from "carbon-components-svelte";

  let isSideNavOpen = false;


  let theme = "white"; // "white" | "g10" | "g80" | "g90" | "g100"
  if(browser){
    $: document.documentElement.setAttribute("theme", theme);

  }

</script>
<svelte:head>
    <meta name="google-site-verification" content="u9OVdd8C6Nbe6pXvHpbQtctAl4Mmwp93WucGwY9yEgE" />
    <script type="text/javascript">
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "ldcogmj1ce");
    </script>
</svelte:head>


  
  <Header company="Flyfagquiz" platformName=".no" href="/" bind:isSideNavOpen  data-sveltekit-reload>
    <svelte:fragment slot="skip-to-content">
      <SkipToContent />
    </svelte:fragment>
    <HeaderNav>
      <HeaderNavItem href="/" text="Hjem" />
      <HeaderNavItem href="/kjop" text="Kom i gang" />
      <HeaderNavMenu text="Kurs">
        <HeaderNavItem href="/part66" text="Alle" />
        {#each repository as item, index}
          <HeaderNavItem href="/m{index + 1}/0" text="M{index + 1} {Object.values(item)[0].name}" />
        {/each}
      </HeaderNavMenu>
      <HeaderNavItem href="/account" text="Konto" />
    </HeaderNav>
  </Header>
  
  <SideNav bind:isOpen={isSideNavOpen} rail data-sveltekit-reload>
    <SideNavItems>
      <SideNavLink icon={AArrowDown} text="Min side" href="/part66" isSelected />

      <!--SideNavMenu icon={AArrowDown} text="Menu">
        <SideNavMenuItem href="/" text="Link 1" />
        <SideNavMenuItem href="/" text="Link 2" />
        <SideNavMenuItem href="/" text="Link 3" />
      </SideNavMenu-->
      <SideNavDivider />
      
      {#each repository as item, index}

      <SideNavLink icon={AArrowDown} text="M{index + 1} {Object.values(item)[0].name}" href="/m{index + 1}/0" />
      {/each}
    </SideNavItems>
  </SideNav>
  
  <Content>
    
    <slot />

    <!--Grid>
      <Row>
        <Column>
          <h1>Velkommen</h1>
        </Column>
      </Row>
    </Grid-->
  </Content>
  
<!--Navbar></Navbar-->

<br/><br/><br/>
<!--ModeWatcher /-->
