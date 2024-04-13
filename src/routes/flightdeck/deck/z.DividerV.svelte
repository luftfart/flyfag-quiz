<script lang="ts">
    import { T, forwardEventHandlers } from "@threlte/core";

    import { Box, Flex, createClassParser } from "@threlte/flex";
    import { Edges, Text, useCursor } from "@threlte/extras";
    export let position: any;
</script>

<T.Mesh position={position} >
    <T.BoxGeometry args={[0.1, 0.1, 1.9]} />
    <Edges color={"white"} />
</T.Mesh>
