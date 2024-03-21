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

</script>

<h1>{`Module ${moduleNr} - ${moduleData[moduleNr].name}`}</h1>