<template>
  <a-entity>
    <teaser v-for="(item, delta) in items" :color="item.color" :key="delta" :delta="delta" />
  </a-entity>
</template>

<script>
  import Teaser from './teaser.vue'

  export default {
    layout: 'responsivevr',

    components: { Teaser },
    data () {
      return {
        items: [
          { color: 'red' },
          { color: 'green' },
          { color: 'blue' },
          { color: 'black' },
          { color: 'orange' },
          { color: 'lime' },
          { color: 'cyan' },
          { color: 'grey' }
        ]
      }
    }
  }
</script>
