<template>
  <b-navbar toggleable="md" type="dark" variant="info">

    <b-nav-toggle target="nav_collapse"></b-nav-toggle>

    <b-navbar-brand href="#">Responsive VR</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-nav is-nav-bar>
        <b-nav-item-dropdown text="Step 1">
          <b-dropdown-item><nuxt-link to="/step1/desktop">Desktop</nuxt-link></b-dropdown-item>
          <b-dropdown-item><nuxt-link to="/step1/mobile">Mobile</nuxt-link></b-dropdown-item>
          <b-dropdown-item><nuxt-link to="/step1/vr">Virtual Reality</nuxt-link></b-dropdown-item>
        </b-nav-item-dropdown>
      </b-nav>

    </b-collapse>
  </b-navbar>
</template>
