<script>
    import Front from "./Front.svelte";
    import Glareshield from "./Glareshield.svelte";
    import OvhdAft from "./Ovhd-aft.svelte";
    import Ovhd from "./Ovhd.svelte";
    import Pedestal from "./Pedestal.svelte";
    import Console from "./Console.svelte";
    import OvhdFr from "./Ovhd-fr.svelte";
    import OvhdM from "./Ovhd-m.svelte";
    import OvhdFl from "./Ovhd-fl.svelte";
  </script>
  <!-- OVHD AFT -->
  <OvhdAft></OvhdAft>
  <!-- OVHD FWD Left-->
  <OvhdFl></OvhdFl>
  <!-- OVHD FWD Middle-->
  <OvhdM></OvhdM>
  <!-- OVHD FWD Right-->
  <OvhdFr></OvhdFr>
  <!-- Glareshield -->
  <Glareshield></Glareshield>
  <!-- Flight Instruments -->
  <Front></Front>
  <!-- Pedestal -->
  <Pedestal></Pedestal>
  <!-- Consoles -->
  <Console></Console>