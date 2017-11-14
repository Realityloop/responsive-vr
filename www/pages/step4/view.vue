<template>
  <a-entity v-if="items" >
    <teaser
      v-for="(item, delta) in items"

      :delta="delta"
      :image="item.image.thumbnail.meta.derivatives['recipe-list-350-300']"
      :key="delta"
      :title="item.title" />
  </a-entity>
</template>

<script>
  import { Deserializer } from 'jsonapi-serializer'
  import buildUrl from 'build-url'

  import Teaser from './teaser.vue'

  export default {
    layout: 'responsivevr',

    components: { Teaser },

    data () {
      return {
        items: []
      }
    },

    mounted () {
      let url = buildUrl('http://api.responsivevr.docksal', {
        path: 'api/recipes',
        queryParams: {
          'page[limit]': 8,
          'include': ['image', 'image.thumbnail'],
          'fields[recipes]': ['title', 'image'],
          'fields[images]': 'thumbnail',
          'fields[files]': 'meta',
          '_consumer_id': '0eecd0b9-b149-418f-b5ef-266b9aeeddab'
        }
      })

      this.$axios.$get(url)
        .then(res => new Deserializer({})
          .deserialize(res, (err, data) => {
            if (!err) {
              this.items = data
            }
          }))
    }
  }
</script>
