<template>
  <a-text
    :value="text"

    align="center"
    color="black"
    position="0 0 -10"
    width="50" />
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

    data () {
      return {
        text: false
      }
    },

    methods: {
      textResponsive () {
        switch (true) {
          case this.responsive.vr.mobile:
            this.text = 'vr:mobile'
            break

          case this.responsive.vr.desktop:
            this.text = 'vr:desktop'
            break

          default:
            this.text = this.responsive.breakpoint
        }
      }
    },

    watch: {
      'responsive.changed': 'textResponsive'
    }
  }
</script>
