<script>
    import { page } from "$app/stores";
    /**
     * @type {{ [x: string]: { name: any; }; }}
     */
     export let moduleData;
    /**
     * @type {string | number}
     */
     export let moduleNr; //$page.params.nr

     /**
     * @type {any}
     */
      export let pensum; //$page.params.nr
     /**
     * @type {any}
     */
      export let level; //$page.params.nr

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
    import Fade from "carbon-icons-svelte/lib/Fade.svelte";
  
    let isSideNavOpen = false;

</script>


  
  <Header company="IBM" platformName="Carbon Svelte" bind:isSideNavOpen>
    <svelte:fragment slot="skip-to-content">
      <SkipToContent />
    </svelte:fragment>
    <HeaderNav>
      <HeaderNavItem href="/" text="Link 1" />
      <HeaderNavItem href="/" text="Link 2" />
      <HeaderNavItem href="/" text="Link 3" />
      <HeaderNavMenu text="Menu">
        <HeaderNavItem href="/" text="Link 1" />
        <HeaderNavItem href="/" text="Link 2" />
        <HeaderNavItem href="/" text="Link 3" />
      </HeaderNavMenu>
      <HeaderNavItem href="/" text="Link 4" />
    </HeaderNav>
  </Header>
  
  <SideNav bind:isOpen={isSideNavOpen} rail>
    <SideNavItems>
      <SideNavLink icon={Fade} text="w/ " href={`/m${moduleNr}/kurs?pensum=b1&level=1`} isSelected />
      <SideNavLink icon={Fade} text="Link 2" href={`/m${moduleNr}/kurs`} />
      <SideNavLink icon={Fade} text="Link 3" href={`/m${moduleNr}/kurs`} />
      <SideNavMenu icon={Fade} text="Menu">
        <SideNavMenuItem href={`/m${moduleNr}/kurs`} text="Link 1" />
        <SideNavMenuItem href={`/m${moduleNr}/kurs`} text="Link 2" />
        <SideNavMenuItem href={`/m${moduleNr}/kurs`} text="Link 3" />
      </SideNavMenu>
      <SideNavDivider />
      <SideNavLink icon={Fade} text="Link 4" href={`/m${moduleNr}/kurs`} />
    </SideNavItems>
  </SideNav>

  
  
  <Content>
    <p>{level ? `Level ${level}` : ''} <span class="capitalize font-italic">{pensum ? `(${pensum})` : ''}</span></p>
    <h1 class="font-extrabold">{`M${moduleNr} ${moduleData[moduleNr].name}`}</h1>

    {#each current.options as option, index (`${current.q}-${option}-${index}`)}
{/each}
    
  
    <Grid>
      <Row>
        <Column>
           
        </Column>
      </Row>
    </Grid>
  </Content>
  

