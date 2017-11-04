import Vue from 'vue'

// Components.
import rvrNavbar from '~/components/navbar.vue'

let components = {
  rvrNavbar
}

const rvrComponents = {
  install: function (Vue) {
    if (Vue._rvr_components_installed) {
      return
    }

    Vue._rvr_components_installed = true

    // Register components
    for (var component in components) {
      Vue.component(component, components[component])
    }
  }
}

Vue.use(rvrComponents)
