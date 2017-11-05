<template>
  <a-entity :rotation="wrapRot" :position="wrapPos">
    <a-entity :position="teaserPos">
      <a-image :src="image" />
    </a-entity>
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

    data () {
      return {
        teaserPos: '0 0 -10',
        wrapRot: '0 0 0',
        wrapPos: '0 0 0'
      }
    },

    methods: {
      eventResponsive () {
        let wrapRotY = 0
        let wrapRotX = 0
        let teaserPosY = 0
        let teaserPosX = 0

        switch (true) {
          case this.responsive.vr.active:
            wrapRotX = this.delta * 45

            this.wrapPos = `0 1.75 0`
            this.wrapRot = `0 ${wrapRotX} 0 0`
            this.teaserPos = `0 0 -10`
            break

          case this.responsive.breakpoint === 'xs':
            let face = Math.floor(this.delta / 2)
            teaserPosY = 1.75 - (this.delta % 2) * 3.5
            wrapRotY = face * 90

            this.wrapPos = `0 1.75 -10`
            this.wrapRot = `${wrapRotY} 0 0`
            this.teaserPos = `0 ${teaserPosY} 3.5`
            break

          default:
            teaserPosX = -6.75 + (this.delta % 4) * 4.5
            teaserPosY = this.delta > 3 ? -1.75 : 1.75

            this.wrapPos = `0 0 0`
            this.wrapRot = `${wrapRotY} 0 0`
            this.teaserPos = `${teaserPosX} ${teaserPosY} -10`
        }
      }
    },

    props: {
      'delta': { default: 0 },
      'image': { default: false },
      'title': { }
    },

    watch: {
      'responsive.changed': 'eventResponsive'
    },

    mounted () {
      this.eventResponsive()
    }
  }
</script>