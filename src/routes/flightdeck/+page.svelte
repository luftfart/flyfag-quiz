<script lang="ts">
  //src: https://github.com/flybywiresim/docs/tree/primary/docs/pilots-corner/a32nx-briefing/flight-deck

    import { Canvas } from '@threlte/core'
    import { Sky } from '@threlte/extras'

    import Scene from './Scene.svelte'
  </script>
  
  <div>
    <Canvas>
      <Sky elevation={0.5} />

      <Scene />
    </Canvas>
  </div>
  
  <style>
    div {
      height: 100%;
    }
  </style>
  