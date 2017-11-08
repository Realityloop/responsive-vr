## Vue

[vuejs.org](https://vuejs.org/)

> Vue ... is a progressive framework for building user interfaces.

> ... focused on the view layer only...

_TL;DR: Javascript framework._


--


## A basic component.


`component.vue`

```html
<template>
  <div :class="class">{{ text }}</div>
</template>

<script>
  export default {
    props: ['class', 'text'],
  }
</script>

<style lang="scss" scoped>
  div {
    background-color: #000;
    
    &:hover {
      background-color: #333;
    }
  }
</style>
```


---


## Vue tutorial

Build components for each distinct element:

* Teaser
* View
* Full <!-- .element: class="fragment" -->
* Navigation <!-- .element: class="fragment" -->
* Button <!-- .element: class="fragment" -->
* Text <!-- .element: class="fragment" -->


--


## Teaser.vue

```html
<template>
  <a-entity :rotation="rotation()">
    <a-box width="4" height="3" depth="0.1" :color="color" position="0 0 -10" />
  </a-entity>
</template>

<script>
  export default {
    methods: {
      rotation () { return `0 ${this.delta * -45} 0` }
    },
    props: { 'color': { default: 'red' }, 'delta': { default: 0 } }
  }
</script>

```


--


## View.vue

```html
<template>
  <a-entity>
    <teaser v-for="(item, delta) in items" :color="item.color" :key="delta" :delta="delta" />
  </a-entity>
</template>

<script>
  import Teaser from './teaser.vue'

  export default {
    components: { Teaser },
    data () {
      return {
        items: [ { color: 'red' }, { color: 'green' }, { color: 'blue' } ]
      }
    }
  }
</script>

```
