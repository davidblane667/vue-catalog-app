<template>
  <div class="wrapper">

    <nav>
      <div class="nav-wrapper">
        <ul class="right hide-on-med-and-down">
          <li v-if="username">
            {{username}}
          </li>
          <li>
            <router-link to="/">Catalog</router-link>
          </li>
          <li v-if="username">
            <a
              href="#"
              @click.prevent="logoutSubmit"
            >
              Log out
            </a>
          </li>
          <li v-else>
            <router-link to="/login">Login</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="catalog-items">
      <router-view/>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'main-layout',
    data: () => ({
      dropdown: null,
      username: ''
    }),
    mounted() {
      if (localStorage.username) {
        this.username = localStorage.username

        this.$store.dispatch('RELOAD_USER_INFO', {
          username: localStorage.username,
          token: localStorage.token,
          success: Boolean(localStorage.success)
        })
      }
    },
    methods: {
      logoutSubmit() {
        this.$store.dispatch('LOGOUT_USER')
        localStorage.clear()
        this.$router.push('/login')
      }
    }
  }
</script>

<style lang="scss">
  @import '../assets/styles/variable';

  .catalog-items {
    max-width: $contentWidth;
    margin: 0 auto;
    padding: 50px 30px;
  }
</style>
