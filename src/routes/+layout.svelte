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
  import { Settings2,Package,Home, MessageCircle, User, TicketPercent, Boxes, AArrowDown } from "lucide-svelte";
  
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
    HeaderUtilities,
    HeaderPanelLink,
    HeaderPanelDivider,
    HeaderPanelLinks,
    HeaderAction,
    HeaderGlobalAction,
    HeaderSearch

  } from "carbon-components-svelte";
  import { expoIn } from "svelte/easing";

  import { Logout,SettingsAdjust, UserAvatarFilledAlt  } from "carbon-icons-svelte";



  let isSideNavOpen = false;
  let isOpen = false;
  let selected = "0";
  let transitions = {
    "0": {
      text: "Default (duration: 200ms)",
      value: { duration: 200 },
    },
    "1": {
      text: "Custom (duration: 600ms, delay: 50ms, easing: expoIn)",
      value: { duration: 600, delay: 50, easing: expoIn },
    },
    "2": {
      text: "Disabled",
      value: false,
    },
  };

  const data = [
    {
      href: "/m1/0",
      text: "M1 Matematikk",
      description:
        "Deploy secure, highly available apps in a native Kubernetes experience. IBM Cloud Kubernetes Service creates a cluster of compute hosts and deploys highly available containers.",
    },
    {
      href: "/m2/0",
      text: "M2 Fysikk",
      description:
        "Deploy and secure enterprise workloads on native OpenShift with developer focused tools to run highly available apps. OpenShift clusters build on Kubernetes container orchestration that offers consistency and flexibility in operations.",
    },
    {
      href: "/m3/0",
      text: "M3 Elektrolære",
      description:
        "Securely store container images and monitor their vulnerabilities in a private registry.",
    },
    {
      href: "/m4/0",
      text: "M4 Digitalteknikk",
      description:
        "Run your application, job, or container on a managed serverless platform.",
    },
  ];
  /**
     * @type {null}
     */
  let ref = null;
  let active = false;
  let value = "";
  let selectedResultIndex = 0;

  /**
     * @type {any[]}
     */
  let events = [];

  $: lowerCaseValue = value.toLowerCase();
  $: results =
    value.length > 0
      ? data.filter((item) => {
          return (
            item.text.toLowerCase().includes(lowerCaseValue) ||
            item.description.includes(lowerCaseValue)
          );
        })
      : [];


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
      <HeaderSearch
        bind:ref
        bind:active
        bind:value
        bind:selectedResultIndex
        placeholder="Søk"
        {results}
        on:active={() => {
          events = [...events, { type: "active" }];
        }}
        on:inactive={() => {
          events = [...events, { type: "inactive" }];
        }}
        on:clear={() => {
          events = [...events, { type: "clear" }];
        }}
        on:select={(e) => {
          events = [...events, { type: "select", ...e.detail }];
        }}
      />
     
    </HeaderNav>
    <HeaderUtilities>
      <HeaderAction bind:isOpen transition={transitions[selected].value} >
        <HeaderPanelLinks iconDescription="Kurs" >
          <HeaderPanelDivider>Alle moduler:</HeaderPanelDivider>
          {#each repository as item, index}

            <HeaderPanelLink href="/m{index + 1}/0" data-sveltekit-replacestate>M{index + 1} {Object.values(item)[0].name}</HeaderPanelLink>
          {/each}
         
        </HeaderPanelLinks>
      </HeaderAction>
      <HeaderGlobalAction
      iconDescription="Min side"
      tooltipAlignment="start"
      icon={SettingsAdjust}
      href="/part66"
      data-sveltekit-reload
    />
    <HeaderGlobalAction iconDescription="Konto" href="/account"  icon={UserAvatarFilledAlt} />
    <HeaderGlobalAction
      href="/kjop"
      iconDescription="Kom i gang"
      tooltipAlignment="end"
      icon={TicketPercent}
    />
    </HeaderUtilities>
  </Header>

  
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
