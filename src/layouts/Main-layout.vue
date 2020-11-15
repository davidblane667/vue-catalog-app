<template>
  <div class="wrapper">

    <ul id="dropdown1" class="dropdown-content">
      <li>
        <a href="#" @click.prevent="logoutSubmit">Log out</a>
      </li>
    </ul>
    <nav>
      <div class="nav-wrapper">
        <ul class="right hide-on-med-and-down">
          <li>
            <router-link to="/">Catalog</router-link>
          </li>
          <li v-if="username">
            <a class="dropdown-trigger" ref="dropdown" href="#" data-target="dropdown1">
              {{username}}<i class="material-icons right">arrow_drop_down</i>
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
        setTimeout(() => {
          // eslint-disable-next-line
          this.dropdown = M.Dropdown.init(this.$refs.dropdown, {alignment: 'top',constrainWidth: true})
        })
        this.$store.dispatch('RELOAD_USER_INFO', {
          username: localStorage.username,
          token: localStorage.token,
          success: Boolean(localStorage.success),
        })
      }
    },
    methods: {
      logoutSubmit() {
        this.$store.dispatch('LOGOUT_USER')
        localStorage.clear()
        this.$router.push('/login')
      }
    },
    beforeDestroy() {
      if (this.dropdown && this.dropdown.destroy) {
        this.dropdown.destroy()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .catalog-items {
    max-width: 1100px;
    margin: 0 auto;
    padding: 50px 30px;
  }
</style>
