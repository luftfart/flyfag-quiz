<script lang="ts">
  import { T, forwardEventHandlers } from '@threlte/core'
  import { Edges, Text, useCursor } from '@threlte/extras'
  import { spring } from 'svelte/motion'
  import { DEG2RAD } from 'three/src/math/MathUtils.js' 

  import {
      BufferGeometry,
      CylinderGeometry,
      DoubleSide,
      Mesh,
      MeshStandardMaterial,
      PositionalAudio as ThreePositionalAudio
    } from 'three'


  export let text: any;
  export let position;
  console.log('text-:', text)

  const buttonOffsetY = spring(0)

  let buttonColor = '#111111'
  let textColor = '#eedbcb'

  const { onPointerEnter, onPointerLeave } = useCursor()

  const component = forwardEventHandlers()
</script>



<T.Group position={position} >
<T.Group
position={[1.5, 0.55, 1.5]} 
rotation.y={DEG2RAD * 90  * 0.3}
>
<T.Mesh
  castShadow
  material={new MeshStandardMaterial({
    color: 0xffffff
  })}
  geometry={new CylinderGeometry(0.6, 0.6, 0.1, 6)}
  position.y={0.5}
/>
<T.Mesh
  castShadow
  material={new MeshStandardMaterial({
    color: 0xffffff
  })}
  geometry={new CylinderGeometry(0.3, 0.4, 2, 6)}
  position.y={0.4}
>




</T.Mesh>
</T.Group>

 <!--LEFT-->
 <Text
 renderOrder={-100}
 ignorePointer
 color={'white'}
 text={text.left}
 rotation.x={DEG2RAD * -90}
 position.x={2.5}
 position.y={1.055}
 position.z={1.700}
 fontSize={0.35}
 anchorX="50%"
 anchorY="50%"
 
/>
<!--RIGHT-->
<Text
 renderOrder={-100}
 ignorePointer
 color={'white'}
 text={text.right}
 rotation.x={DEG2RAD * -90}
 position.x={0.4}
  position.y={1.055}
  position.z={1.750}
 fontSize={0.35}
 anchorX="50%"
 anchorY="50%"
 
/>


<!--TOP-->
<Text
  renderOrder={-100}
  ignorePointer
  color={'white'}
  text={text.top}
  rotation.x={DEG2RAD * -90}
  position.x={1.5}
  position.y={1.055}
  position.z={0.700}
  fontSize={0.35}
  anchorX="50%"
  anchorY="50%"
  
/>

</T.Group>
