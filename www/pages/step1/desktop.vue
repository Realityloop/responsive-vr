<template>
  <a-entity>

    <!-- Top row -->
    <a-box width="4" height="3" depth="0.1" color="red" position="-6.75 1.75 -10" />
    <a-box width="4" height="3" depth="0.1" color="green" position="-2.25 1.75 -10" />
    <a-box width="4" height="3" depth="0.1" color="blue" position="2.25 1.75 -10" />
    <a-box width="4" height="3" depth="0.1" color="black" position="6.75 1.75 -10" />

    <!-- Bottom row -->
    <a-box width="4" height="3" depth="0.1" color="orange" position="-6.75 -1.75 -10" />
    <a-box width="4" height="3" depth="0.1" color="lime" position="-2.25 -1.75 -10" />
    <a-box width="4" height="3" depth="0.1" color="cyan" position="2.25 -1.75 -10" />
    <a-box width="4" height="3" depth="0.1" color="grey" position="6.75 -1.75 -10" />

  </a-entity>
</template>

<script>
  export default {
    layout: 'aframe'
  }
</script>
