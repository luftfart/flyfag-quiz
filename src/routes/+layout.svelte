<script>
    import { browser } from "$app/environment";

    import "../app.css";
    import Footer from "$lib/components/Footer.svelte";
    import Navbar from "$lib/components/Navbar.svelte";

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


  
  <Header company="Flyfagquiz" platformName=".no" bind:isSideNavOpen>
    <svelte:fragment slot="skip-to-content">
      <SkipToContent />
    </svelte:fragment>
    <HeaderNav>
      <HeaderNavItem href="/" text="Hjem" />
      <HeaderNavItem href="/kjop" text="Kom i gang" />
      <HeaderNavMenu text="Kurs">
        <HeaderNavItem href="/part66" text="Alle" />
        <HeaderNavItem href="/m1/0" text="M1 Matte" />
        <HeaderNavItem href="/m2/0" text="M2 Fysikk" />
        <HeaderNavItem href="/m3/0" text="M3 Elektro" />
      </HeaderNavMenu>
      <HeaderNavItem href="/account" text="Konto" />
    </HeaderNav>
  </Header>
  
  <SideNav bind:isOpen={isSideNavOpen} rail>
    <SideNavItems>
      <SideNavLink icon={AArrowDown} text="Min side" href="/" isSelected />

      <!--SideNavMenu icon={AArrowDown} text="Menu">
        <SideNavMenuItem href="/" text="Link 1" />
        <SideNavMenuItem href="/" text="Link 2" />
        <SideNavMenuItem href="/" text="Link 3" />
      </SideNavMenu-->
      <SideNavDivider />
      <SideNavLink icon={AArrowDown} text="M1 Matte" href="/m1/0" />
      <SideNavLink icon={AArrowDown} text="M2 Fysikk" href="/m2/0" />
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
