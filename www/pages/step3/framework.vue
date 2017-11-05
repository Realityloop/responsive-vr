<template>
  <a-scene @enter-vr="enter()" @exit-vr="exit()">
    <a-sky color="white" />
    <a-text
      :value="text()"

      align="center"
      color="black"
      position="0 0 -10"
      width="50" />
  </a-scene>
</template>

<script>
  import { mapMutations, mapState } from 'vuex'

  export default {
    layout: 'raw',

    computed: {
      ...mapState({
        responsive: state => state.responsive
      })
    },

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

      text () {
        switch (true) {
          case this.responsive.vr.mobile:
            return 'vr:mobile'

          case this.responsive.vr.desktop:
            return 'vr:desktop'

          default:
            return this.responsive.breakpoint
        }
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
