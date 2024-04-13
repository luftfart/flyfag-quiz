<script lang="ts">
  //src: https://github.com/flybywiresim/docs/tree/primary/docs/pilots-corner/a32nx-briefing/flight-deck
  
    import { Canvas } from '@threlte/core'
    import { Sky } from '@threlte/extras'

    import Scene from './Scene.svelte'
  </script>
  
  <div id="main">
    <Canvas >
      <Sky  
      rayleigh={0.17}
      azimuth={180}
      elevation={85}
      mieCoefficient= {0.013}
      mieDirectionalG= {0.7}
     />

      <Scene aircraft_type="airbus" />
    </Canvas>
  </div>
  
  <style>
    div#main {
    height: 400px;
    width: 100%;
  }
  </style>
  