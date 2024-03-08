<script>
    import "../app.css";
    import Footer from "$lib/components/Footer.svelte";
    import Navbar from "$lib/components/Navbar.svelte";

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

<Navbar></Navbar>
<slot />
