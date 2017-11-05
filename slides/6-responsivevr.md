# Responsive VR

Building a Responsive VR Vue plugin.

* AFRAME
* v-media-query


--


# AFRAME

https://aframe.io/docs


```html
<a-scene
  @enter-vr="..."
  @exit-vr="...">
```

```javascript
AFRAME.utils.device.isMobile()
```


--


# v-media-query

https://github.com/AStaroverov/v-media-query

```html
<component v-show="$mq.resize && $mq.between([$mv.sm, $mv.xl]" />
```

```javascript
// > XS
if (this.$mq.above(575)) {
  ...
}
```


---


# Responsive VR Tutorial

* v-media-query
* Responsive VUEX store
* Scene integration 


--


# v-media-query.js

Register and configure the v-media-query plugin.

```javascript
import Vue from 'vue'
import vMediaQuery from 'v-media-query'

Vue.use(vMediaQuery, {
  variables: {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  }
})
```


--


# responsive.js

Responsive VR helper utility.

```javascript
import AFRAME from 'aframe'

export const state = () => ({
  breakpoint: false,
  vr: {
    active: false,
    desktop: false,
    mobile: false
  }
})

export const mutations = {
  breakpointSet (state, { $mq, $mv }) {
    switch (true) {
      case $mq.below($mv.sm):
        state.breakpoint = 'xs'
        break

      case $mq.below($mv.md):
        state.breakpoint = 'sm'
        break

      case $mq.below($mv.lg):
        state.breakpoint = 'md'
        break

      case $mq.below($mv.xl):
        state.breakpoint = 'lg'
        break

      default:
        state.breakpoint = 'xl'
    }
  },

  vrSet (state, value) {
    state.vr.active = value
    state.vr.desktop = value && !AFRAME.utils.device.isMobile()
    state.vr.mobile = value && AFRAME.utils.device.isMobile()
  }
}
```


--


# example.vue

Integrating into your a-scene.

```html
<template>

  <!-- Bind AFRAME events -->
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
  // Bootstrap VUEX store (responsive.js)
  import { mapMutations, mapState } from 'vuex'

  export default {
    layout: 'raw',

    computed: {
      // Map VUEX store state data
      ...mapState({
        responsive: state => state.responsive
      })
    },

    methods: {
      // Set responsive VR state
      enter () {
        this.responsiveVR(true)
      },

      exit () {
        this.responsiveVR(false)
      },

      // Set responsive breakpoint
      resize () {
        this.responsiveBreakpoint(this)
      },

      // Responsively adjust text value
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

      // Map VUEX store methods
      ...mapMutations({
        responsiveBreakpoint: 'responsive/breakpointSet',
        responsiveVR: 'responsive/vrSet'
      })
    },

    // Watch for resize event
    watch: {
      '$mq.resize': 'resize'
    },

    mounted () {
      this.resize()
    }
  }
</script>

```
