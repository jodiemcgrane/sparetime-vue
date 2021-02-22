<!--
@Date:   2021-02-11T14:34:16+00:00
@Last modified time: 2021-02-22T10:56:42+00:00
-->
<template>
<div>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item>
        <Burger v-b-toggle.sidebar />
      </b-nav-item>
      <b-nav-item to="/">Home</b-nav-item>
      <b-nav-item to="/events">Events</b-nav-item>
    </b-navbar-nav>

    <b-navbar-nav class="ml-auto">
      <b-nav-item-dropdown text="User" right>
        <b-dropdown-item href="#">Profile</b-dropdown-item>
        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>

  <b-sidebar id="sidebar" title="Menu" bg-variant="light" text-variant="dark" shadow>
    <nav class="mb-3">
      <b-nav vertical>
        <b-nav-item to="/events">My Events</b-nav-item>
        <b-nav-item to="/productivity">Productivity</b-nav-item>
      </b-nav>
    </nav>
  </b-sidebar>
</div>
</template>

<script>
import Burger from './Burger'

export default {
  name: 'NavBar',
  components: {
    Burger,
  },
}
</script>

<style>
/* #nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #fff;
} */
</style>
