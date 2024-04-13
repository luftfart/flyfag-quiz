<script lang="ts">
    import { T, useTask } from '@threlte/core'

    import { Edges, PositionalAudio, useAudioListener, useCursor, useGltf, Text } from '@threlte/extras'
    import { spring, tweened } from 'svelte/motion'
    import {
      BufferGeometry,
      CylinderGeometry,
      DoubleSide,
      Mesh,
      MeshStandardMaterial,
      PositionalAudio as ThreePositionalAudio
    } from 'three'
    import { DEG2RAD } from 'three/src/math/MathUtils.js'
    import Button from './z.Button.svelte'
    import Knob from './z.Knob.svelte'
    import Switch from './z.Switch.svelte'
    import Indicator from './z.Indicator.svelte'
    import DividerH from './z.DividerH.svelte'
    import DividerV from './z.DividerV.svelte'

    import Disc from './z.Disc.svelte'
    export let instrument_color;
  
    let discSpeed = tweened(0, {
      duration: 1e3
    })
  
    let armPos = spring(0)
  
    let started = false
    export let isPlaying = false
  
    export const toggle = async () => {
      if (!started) {
        await context.resume()
        started = true
      }
      if (isPlaying) {
        discSpeed.set(0)
        armPos.set(0)
        isPlaying = false
      } else {
        discSpeed.set(1)
        armPos.set(1)
        isPlaying = true
      }
    }
  
    let audio: ThreePositionalAudio
    const { context } = useAudioListener()
    const analyser = context.createAnalyser()
    $: if (audio) audio.getOutput().connect(analyser)
    const pcmData = new Float32Array(analyser.fftSize)
    export let volume = 0
    useTask(() => {
      if (!audio) return
      analyser.getFloatTimeDomainData(pcmData)
      let sumSquares = 0.0
      for (const amplitude of pcmData) {
        sumSquares += amplitude * amplitude
      }
      volume = Math.sqrt(sumSquares / pcmData.length)
    })
  
    let sideA = '/audio/side_a.mp3'
    let sideB = '/audio/side_b.mp3'
    let source = sideA
    const changeSide = () => {
      source = source === sideA ? sideB : sideA
    }

    let gpw = {top:"PULL UP",bottom:"GPWS",left:"",right:""}

    
    let gpws_test = '/audio/gpws_callouts.mp3'
    let pullup_test = gpw

    let local_w = gpws_test

    let test_started = false
    export let test_isPlaying = false

    const changeWarning  = async () => {
        local_w = local_w === gpws_test ? pullup_test : gpws_test
        if (!started) {
            await context.resume()
            test_started = true
        }
        if (test_isPlaying) {
            discSpeed.set(0)
            armPos.set(0)
            test_isPlaying = false
        } else {
            discSpeed.set(1)
            armPos.set(1)
            test_isPlaying = true
        }
    
    }

   
  
    let coverOpen = false
    const coverAngle = spring(0)
    $: {
      if (coverOpen) coverAngle.set(80)
      else coverAngle.set(0)
    }
  
    const { onPointerEnter, onPointerLeave } = useCursor()
  
    const gltf = useGltf<{
      nodes: {
        Cover: Mesh
      }
      materials: {}
    }>('/models/turntable/cover.glb')
    let coverGeometry: BufferGeometry | undefined
    $: if ($gltf) {
      const coverMesh = $gltf.nodes.Cover as Mesh
      coverGeometry = coverMesh.geometry
    }


    let knob_1 = {top:"ND",bottom:"",left:"BRT",right:"OFF"};
    let knob_2 = {top:"PFD",bottom:"",left:"BRT",right:"OFF"};
    let knob_3 = {top:"LOUDSPEAKER",bottom:"",left:"BRT",right:"OFF"};

    let placeholder_1 = {top:"PFD/ND XFR",bottom:"",left:"BRT",right:"OFF"};

    let switch_1 = {top:"CONSOLE/FLOOR",bottom:"",left:"",right:"BRT|DIM|OFF"};

  </script>
  
  <T.Group {...$$restProps}>
    <!-- DISC -->
    <!--Disc
      position.x={0.5}
      position.y={1.01}
      
      discSpeed={$discSpeed}
    /-->
  
    <!-- CASE -->
    <T.Mesh
      receiveShadow
      castShadow
      position.y={0.5}
      position.x={-0.3}
      position.z={0.3}
      
    >
      <T.BoxGeometry args={[6.5, 1, 5.5]} />
      <T.MeshStandardMaterial color={instrument_color} />
      <Edges
        scale={1.001}
        color="black"
      />
    </T.Mesh>
  
    <!-- COVER -->
    <!--T.Group
      position.y={1}
      position.z={-2.2}
      rotation.x={-$coverAngle * DEG2RAD}
    >
      {#if coverGeometry}
        <T.Mesh
          geometry={coverGeometry}
          scale={[3, 0.5, 2.2]}
          position.y={0.5}
          position.z={2.2}
          on:click={() => (coverOpen = !coverOpen)}
          on:pointerenter={onPointerEnter}
          on:pointerleave={onPointerLeave}
        >
          <T.MeshStandardMaterial
            color="#ffffff"
            roughness={0.08}
            metalness={0.8}
            envMapIntensity={1}
            side={DoubleSide}
            transparent
            opacity={0.65}
          />
          <Edges color="white" />
        </T.Mesh>
      {/if}
    </T.Group-->
  
    <!-- SIDE BUTTON >
    <Button
      position={[-2.3, 1.01, 0.8]}
      on:click={changeSide}
      text={source === sideA ? 'SIDE B' : 'SIDE A'}
    />
  
    <!-- PLAY/PAUSE BUTTON ->
    <Button
      position={[-2.3, 1.01, 1.7]}
      on:click={toggle}
      text={isPlaying ? 'PAUSE' : 'PLAY'}
    /-->

    <Indicator position={[-2.3, 1.01, -1.7]}  on:click={changeWarning} text={local_w === gpws_test ? 'SIDE B' : pullup_test}></Indicator>
    <DividerH position={[-0.3,1.0,-0.9]} />

    <Knob position={[-3.5, 0.05, -1.3]} text={knob_1}></Knob> <!--$armPos-->
    <DividerV position={[-0.3,1.0,0.1]} />
    <!--Placeholder position={[-0.1, 0.05, 0]} text={placeholder_1}></Switch-->
    <Knob position={[-0.1, 0.05, -1.3]} text={knob_2}></Knob>
    <DividerH position={[-0.3,1.0,1]} />
    <DividerV position={[-0.3,1.0,2.0]} />
    <!--Switch position={[-0.1, 0.05, 0]} text={switch_1}t="CONSOLE/FLOOR",b="",l="",r="BRT|DIM|OFF"></Switch-->
    <Knob position={[-0.1, 0.05, 0.7]} text={knob_3}></Knob>
  
  

    <!--Knob t="ND",b="",l="OFF",r="BRT"></Knob>
    <Knob  t="ND",b="",l="OFF",r="BRT"></Knob>

    <Knob  t="LOUD SPEAKER",b="",l="OFF",r="MAX"> </Knob>
    <Switch t="CONSOLE/FLOOR",b="",l="",r="BRT|DIM|OFF"></Switch-->
  
    <!-- ARM -->
    <!--T.Group
      position={[2.5, 1.55, -1.8]}
      rotation.z={DEG2RAD * 90}
      rotation.y={DEG2RAD * 90 - $armPos * 0.3}
    >
      <T.Mesh
        castShadow
        material={new MeshStandardMaterial({
          color: 0xffffff
        })}
        geometry={new CylinderGeometry(0.1, 0.1, 3, 12)}
        position.y={1.5}
      >
        <T.CylinderGeometry args={[0.1, 0.1, 3, 12]} />
        <T.MeshStandardMaterial color="#ffffff" />
        <Edges
          color="black"
          thresholdAngle={80}
        />
      </T.Mesh>
    </T.Group-->
  
    {#if started}
      <PositionalAudio
        autoplay
        bind:ref={audio}
        refDistance={15}
        loop
        playbackRate={$discSpeed}
        src={source}
        directionalCone={{
          coneInnerAngle: 90,
          coneOuterAngle: 220,
          coneOuterGain: 0.3
        }}
      />
    {/if}
    {#if test_started}
      <PositionalAudio
        autoplay
        bind:ref={audio}
        refDistance={15}
        loop
        playbackRate={$discSpeed}
        src={local_w}
        directionalCone={{
          coneInnerAngle: 90,
          coneOuterAngle: 220,
          coneOuterGain: 0.3
        }}
      />
    {/if}
  </T.Group>


<img src="https://raw.githubusercontent.com/flybywiresim/docs/primary/docs/pilots-corner/assets/a32nx-briefing/front/ilcp.jpg"> <div class="imagemap"          style="position: absolute; left: 7%; top: 51.3%; width: 7%; height: 3.5%;"><span class="imagemapname">Instrument Lighting Control Panel Capt.</span></div>
   

<!--img src="https://raw.githubusercontent.com/flybywiresim/docs/primary/docs/pilots-corner/assets/a32nx-briefing/front/pfd.jpg"> <div class="imagemap"           style="position: absolute; left: 14.5%; top: 51.3%; width: 10.5%; height: 5.5%;"><span class="imagemapname">PFD Capt.</span></div>
    <img src="https://raw.githubusercontent.com/flybywiresim/docs/primary/docs/pilots-corner/assets/a32nx-briefing/front/nd.jpg"> <div class="imagemap"            style="position: absolute; left: 25%; top: 51.3%; width: 10.5%; height: 5.5%;"><span class="imagemapname">ND Capt.</span></div>
    <img src="https://raw.githubusercontent.com/flybywiresim/docs/primary/docs/pilots-corner/assets/a32nx-briefing/front/nd.jpg"> <div class="imagemap"            style="position: absolute; left: 36%; top: 55.2%; width: 3.2%; height: 2.1%;"><span class="imagemapname">Terrain Switch for ND</span></div>
    <img src="https://raw.githubusercontent.com/flybywiresim/docs/primary/docs/pilots-corner/assets/a32nx-briefing/front/nd.jpg"> <div class="imagemap"            style="position: absolute; left: 61.2%; top: 53.5%; width: 2.8%; height: 2.5%;"><span class="imagemapname">Terrain Switch for ND</span></div>
    <img src="https://raw.githubusercontent.com/flybywiresim/docs/primary/docs/pilots-corner/assets/a32nx-briefing/front/nd.jpg"> <div class="imagemap"            style="position: absolute; left: 64.5%; top: 51.3%; width: 10%; height: 5.5%;"><span class="imagemapname">ND F.O.</span></div>
    <img src="https://raw.githubusercontent.com/flybywiresim/docs/primary/docs/pilots-corner/assets/a32nx-briefing/front/pfd.jpg"> <div class="imagemap"           style="position: absolute; left: 75%; top: 51.3%; width: 10.5%; height: 5.5%;"><span class="imagemapname">PFD F.O.</span></div>
    <img src="https://raw.githubusercontent.com/flybywiresim/docs/primary/docs/pilots-corner/assets/a32nx-briefing/front/ilcp.jpg"> <div class="imagemap"          style="position: absolute; left: 85.5%; top: 51.3%; width: 7%; height: 3.5%;"><span class="imagemapname">Instrument Lighting Control Panel F.O.</span></div>
    <img src="https://raw.githubusercontent.com/flybywiresim/docs/primary/docs/pilots-corner/assets/a32nx-briefing/front/isis.jpg"> <div class="imagemap"          style="position: absolute; left: 39.5%; top: 53.2%; width: 5.2%; height: 2.8%;"><span class="imagemapname">Integrated Standby Instrument System</span></div>
    <img src="https://raw.githubusercontent.com/flybywiresim/docs/primary/docs/pilots-corner/assets/a32nx-briefing/front/dcdu.jpg"> <div class="imagemap"          style="position: absolute; left: 36%; top: 59%; width: 8.2%; height: 2.7%;"><span class="imagemapname">Datalink Ctl and Display Unit</span></div>
    <img src="https://raw.githubusercontent.com/flybywiresim/docs/primary/docs/pilots-corner/assets/a32nx-briefing/front/upper-ecam.jpg"> <div class="imagemap"    style="position: absolute; left: 45%; top: 51.3%; width: 11%; height: 5.1%;"><span class="imagemapname">Upper ECAM: Engine and Warning Display</span></div>
    <img src="https://raw.githubusercontent.com/flybywiresim/docs/primary/docs/pilots-corner/assets/a32nx-briefing/front/lower-ecam.jpg"> <div class="imagemap"    style="position: absolute; left: 45%; top: 56.6%; width: 11%; height: 5.2%;"><span class="imagemapname">Lower ECAM: System Display</span></div>
    <img src="https://raw.githubusercontent.com/flybywiresim/docs/primary/docs/pilots-corner/assets/a32nx-briefing/front/autobrake-gear.jpg"><div class="imagemap" style="position: absolute; left: 56%; top: 51.3%; width: 8%; height: 2.5%;"><span class="imagemapname">Autobrake and Gear</span></div>
    <img src="https://raw.githubusercontent.com/flybywiresim/docs/primary/docs/pilots-corner/assets/a32nx-briefing/front/clock.jpg"> <div class="imagemap"         style="position: absolute; left: 56%; top: 53.5%; width: 5.2%; height: 2.5%;"><span class="imagemapname">Clock</span></div>
    <img src="https://raw.githubusercontent.com/flybywiresim/docs/primary/docs/pilots-corner/assets/a32nx-briefing/front/autobrake-gear.jpg"><div class="imagemap" style="position: absolute; left: 56%; top: 56%; width: 4%; height: 3%;"><span class="imagemapname">Gear</span></div>
    <img src="https://raw.githubusercontent.com/flybywiresim/docs/primary/docs/pilots-corner/assets/a32nx-briefing/front/accu.jpg"> <div class="imagemap"          style="position: absolute; left: 60%; top: 57%; width: 4%; height: 2.1%;"><span class="imagemapname">Accumulator Pressure Indication</span></div>
    <img src="https://raw.githubusercontent.com/flybywiresim/docs/primary/docs/pilots-corner/assets/a32nx-briefing/front/dcdu.jpg"> <div class="imagemap"          style="position: absolute; left: 56%; top: 59%; width: 8.5%; height: 2.7%;"><span class="imagemapname">Datalink Ctl and Display Unit</span></div-->


<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

    .inter {
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings:
    "slnt" 0;
}
    
</style>