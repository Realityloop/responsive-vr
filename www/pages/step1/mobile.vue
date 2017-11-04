<template>
  <a-entity position="0 1.75 -10">

    <!-- Front face -->
    <a-entity rotation="0 0 0">
      <a-box width="4" height="3" depth="0.1" color="red" position="0 1.75 3.5" />
      <a-box width="4" height="3" depth="0.1" color="green" position="0 -1.75 3.5" />
    </a-entity>

    <!-- Top face -->
    <a-entity rotation="90 0 0">
      <a-box width="4" height="3" depth="0.1" color="blue" position="0 1.75 3.5" />
      <a-box width="4" height="3" depth="0.1" color="black" position="0 -1.75 3.5" />
    </a-entity>

    <!-- Rear face -->
    <a-entity rotation="180 0 0">
      <a-box width="4" height="3" depth="0.1" color="orange" position="0 1.75 3.5" />
      <a-box width="4" height="3" depth="0.1" color="lime" position="0 -1.75 3.5" />
    </a-entity>

    <!-- Bottom face -->
    <a-entity rotation="270 0 0">
      <a-box width="4" height="3" depth="0.1" color="cyan" position="0 1.75 3.5" />
      <a-box width="4" height="3" depth="0.1" color="grey" position="0 -1.75 3.5" />
    </a-entity>

  </a-entity>
</template>

<script>
export default {
  layout: 'aframe'
}
</script>
