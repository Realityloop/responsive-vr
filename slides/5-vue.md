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

[vuejs.org/v2/guide](https://vuejs.org/v2/guide/)


---


## Vue tutorial

Build components for each distinct element:

* Teaser
* View
* Full <!-- .element: class="fragment" data-fragment-index="1"  -->
* Navigation <!-- .element: class="fragment" data-fragment-index="1" -->
* Button <!-- .element: class="fragment" data-fragment-index="1" -->
* Text <!-- .element: class="fragment" data-fragment-index="1" -->


--


## View.vue

```html
<template>
  <!-- If items... -->
  <a-entity v-if="items">
    <!-- Render a Teaser component per item, passing in required properties. -->
    <teaser v-for="(item, delta) in items" :color="item.color" :key="delta" :delta="delta" />
  </a-entity>
</template>

<script>
  // Import teaser component.
  import Teaser from './teaser.vue'

  export default {
    // Register components.
    components: { Teaser },
    data () {
      return {
        // Hardcoded items array.
        items: [ { color: 'red' }, { color: 'green' }, { color: 'blue' } ]
      }
    }
  }
</script>
```


--


## Teaser.vue

```html
<template>
  <!-- Calculate wrapper rotation property. -->
  <a-entity :rotation="rotation()">
    <!-- Color passed in by View component. -->
    <a-box width="4" height="3" depth="0.1" :color="color" position="0 0 -10" />
  </a-entity>
</template>

<script>
  export default {
    methods: {
      // Calculate rotation based on delta.
      rotation () { return `0 ${this.delta * -45} 0` }
    },
    // Define properties and their default values.
    props: { 'color': { default: 'red' }, 'delta': { default: 0 } }
  }
</script>

```
