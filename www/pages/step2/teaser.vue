<template>
  <a-entity :rotation="rotation()">
    <a-box width="4" height="3" depth="0.1" :color="color" position="0 0 -10" />
  </a-entity>
</template>

<script>
  export default {
    layout: 'aframe',
    methods: {
      rotation () { return `0 ${this.delta * -45} 0` }
    },
    props: { 'color': { default: 'red' }, 'delta': { default: 0 } }
  }
</script>