<template>
  <a-scene @enter-vr="enter()" @exit-vr="exit()">
    <a-sky color="white"/>
    <nuxt />
  </a-scene>
</template>

<script>
  import {mapMutations} from 'vuex'

  export default {
    methods: {
      enter () {
        this.responsiveVR(true)
      },

      exit () {
        this.responsiveVR(false)
      },

      resize () {
        this.responsiveBreakpoint(this)
      },

      ...mapMutations({
        responsiveBreakpoint: 'responsive/breakpointSet',
        responsiveVR: 'responsive/vrSet'
      })
    },

    watch: {
      '$mq.resize': 'resize'
    },

    mounted () {
      this.resize()
    }
  }
</script>

<style>
  html, body, #__nuxt, #app {
    height: 100%;
  }
</style>
