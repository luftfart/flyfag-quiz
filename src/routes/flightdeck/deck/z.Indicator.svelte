<script lang="ts">
    import { T, forwardEventHandlers } from '@threlte/core'
    import { Edges, Text, useCursor, FakeGlowMaterial, useGltf} from '@threlte/extras'
    import {
      BufferGeometry,
      CylinderGeometry,
      DoubleSide,
      Mesh,
      MeshStandardMaterial,
      PositionalAudio as ThreePositionalAudio
    } from 'three'
    import { tex } from 'mathlifier';
    import { spring } from 'svelte/motion'
    import { DEG2RAD } from 'three/src/math/MathUtils.js'
  
    export let text = {top:"PULL UP",bottom:"GPWS",left:"",right:""};
    console.log('text-:', text)

    let alert = {warning: "#f8f514", danger: "#bf1b18"}
    let default_color = 'black'

    function changeColor() {
        default_color = alert.warning
    }
  
    const buttonOffsetY = spring(0)
  
    let buttonColor = '#111111'
    let textColor = '#eedbcb'
  
    const { onPointerEnter, onPointerLeave } = useCursor()
  
    const component = forwardEventHandlers()


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
  </script>
  
  <T.Group {...$$restProps}>
    
      <!-- COVER -->
    <T.Group
    position.y={0.05 - $buttonOffsetY} position.x={0.35}
    >
      {#if coverGeometry}
        <T.Mesh
          geometry={coverGeometry}
          bind:this={$component}
          on:pointerenter={(e) => {
            e.stopPropagation()
            buttonColor = '#eedbcb'
            
            textColor = '#111111'
            onPointerEnter()
          }}
          on:pointerleave={(e) => {
            e.stopPropagation()
            buttonColor = '#111111'
            textColor = '#eedbcb'
            buttonOffsetY.set(0)
            onPointerLeave()
          }}
          on:pointerdown={(e) => {
            e.stopPropagation()
            buttonOffsetY.set(0.05)
          }}
          on:pointerup={(e) => {
            e.stopPropagation()
            buttonOffsetY.set(0)
          }}
        >
        <T.BoxGeometry args={[1.2, 0.1, 0.8]} />
          <T.MeshStandardMaterial
            color="#ffffff"
            roughness={0.08}
            metalness={0.8}
            envMapIntensity={1}
            side={DoubleSide}
            transparent
            opacity={0.85}
          />
          <Edges color={default_color} />
        </T.Mesh>
      {/if}
    
      {#if text}
      <!--TOP-->
        <Text
            renderOrder={-100}
            ignorePointer
            color={alert.danger}
            text={text.top || ''}
            rotation.x={DEG2RAD * -90}
            position.y={0.055}
            position.z={-0.250}
            fontSize={0.26}
            anchorX="50%"
            anchorY="50%"
            
        />
        <!--BOTTOM-->
     
        <Text
            renderOrder={-100}
            ignorePointer
            color={alert.warning}
            text={text.bottom || ''}
            rotation.x={DEG2RAD * -90}
            position.y={0.055}
            position.z={0.155}
            fontSize={0.35}
            anchorX="50%"
            anchorY="50%"
        />
        <!--RIGHT-->
     
        <Text
            renderOrder={-100}
            ignorePointer
            color={textColor}
            text={text.right|| ''}
            rotation.x={DEG2RAD * -90}
            position.y={0.055}
            position.x={1.055}
            fontSize={0.35}
            anchorX="50%"
            anchorY="50%"
        />
        <!--LEFT-->
      
        <Text
            renderOrder={-100}
            ignorePointer
            color={textColor}
            text={text.left || ''}
            rotation.x={DEG2RAD * -90}
            position.y={0.055}
            position.x={-1.055}
            fontSize={0.35}
            anchorX="50%"
            anchorY="50%"
        />
        {/if}
      
    </T.Group>
  </T.Group>
  