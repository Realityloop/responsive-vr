<template>
  <div>
    <b-card-group deck>

      <!-- Step 1 - A-Frame -->
      <b-card title="1 - A-Frame" class="mb-4">
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
      <b-card title="2 - Vue" class="mb-4">
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

    </b-card-group>
    <b-card-group deck>

      <!-- Step 3 - Responsive VR -->
      <b-card title="3 - Responsive VR" class="mb-4">
        <p class="card-text">
          Making it responsive.
        </p>
        <b-list-group>
          <b-list-group-item>
            <nuxt-link to="/step3/framework">Framework demo</nuxt-link>
          </b-list-group-item>
          <b-list-group-item>
            <nuxt-link to="/step3/basic">Basic demo</nuxt-link>
          </b-list-group-item>
          <b-list-group-item>
            <nuxt-link to="/step3/view">Responsive teasers</nuxt-link>
          </b-list-group-item>
        </b-list-group>
      </b-card>

      <!-- Step 4 - JSON API -->
      <b-card title="4 - JSON API" class="mb-4">
        <p class="card-text">
          Connecting to Drupal.
        </p>
        <b-list-group>
          <b-list-group-item>
            <nuxt-link to="/step4/view">Recipes</nuxt-link>
          </b-list-group-item>
        </b-list-group>
      </b-card>

    </b-card-group>

  </div>
</template>

<script>
  export default {}
</script>
