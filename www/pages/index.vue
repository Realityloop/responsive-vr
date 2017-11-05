<template>
  <b-card-group deck>

    <!-- Step 1 - A-Frame -->
    <b-card title="1 - A-Frame">
      <p class="card-text">
        A-Frame example scenes.
      </p>
      <b-list-group>
        <b-list-group-item>
          <nuxt-link to="/step1/desktop">Desktop</nuxt-link>
        </b-list-group-item>
        <b-list-group-item>
          <nuxt-link to="/step1/mobile">Mobile</nuxt-link>
        </b-list-group-item>
        <b-list-group-item>
          <nuxt-link to="/step1/vr">Virtual Reality</nuxt-link>
        </b-list-group-item>
      </b-list-group>
    </b-card>

    <!-- Step 2 - Vue -->
    <b-card title="2 - Vue">
      <p class="card-text">
        Vue example components.
      </p>
      <b-list-group>
        <b-list-group-item>
          <nuxt-link to="/step2/teaser">Teaser</nuxt-link>
        </b-list-group-item>
        <b-list-group-item>
          <nuxt-link to="/step2/view">View</nuxt-link>
        </b-list-group-item>
      </b-list-group>
    </b-card>

    <!-- Step 3 - Responsive VR -->
    <b-card title="3 - Responsive VR">
      <p class="card-text">
        Making it responsive.
      </p>
      <b-list-group>
        <b-list-group-item>
          <nuxt-link to="/step3/framework">Framework demo</nuxt-link>
        </b-list-group-item>
      </b-list-group>
    </b-card>

  </b-card-group>
</template>

<script>
  export default {}
</script>
