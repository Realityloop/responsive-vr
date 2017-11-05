<template>
  <a-entity>
    <a-box width="4" height="3" depth="0.1" color="red" :position="position(0)" />
    <a-box width="4" height="3" depth="0.1" color="green" :position="position(1)" />
  </a-entity>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    layout: 'responsivevr',

    computed: {
      ...mapState({
        responsive: state => state.responsive
      })
    },

    methods: {
      position (delta) {
        switch (true) {
          case this.responsive.vr.active:
            return `${2.25 - (delta * 4.5)} 0 -10`

          default:
            return `${-2.25 + (delta * 4.5)} 0 -10`
        }
      }
    }
  }
</script>
