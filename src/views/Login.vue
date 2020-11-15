<template>
  <form class="col s12 z-depth-5" @submit.prevent="submitHandler">
    <div class="row">
      <div class="input-field col s12">
        <input
          id="user_name"
          type="text"
          class="validate"
          v-model="username"
          :class="{invalid: $v.username.$dirty && !$v.username.required}"
        >
        <label for="user_name">Username</label>
        <small
          class="helper-text invalid"
          v-if="$v.password.$dirty && !$v.password.required"
        >Username is required</small>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input
          id="password"
          type="password"
          class="validate"
          v-model="password"
          :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
        >
        <label for="password">Password</label>
        <small
          class="helper-text invalid"
          v-if="$v.password.$dirty && !$v.password.required"
        >Password is required</small>
        <small
          class="helper-text invalid"
          v-if="$v.password.$dirty && !$v.password.minLength"
        >Min length password is {{$v.password.$params.minLength.min}} symbols. Now is {{password.length}}</small>
      </div>
    </div>
    <div class="row">
      <div class="col s12 center">
        <button class="btn waves-effect waves-light" type="submit" name="action">Log in
          <i class="material-icons right">send</i>
        </button>
        <a class="waves-effect waves-teal btn-flat">Create a Sign Up</a>
      </div>
    </div>

  </form>
</template>

<script>
  const {required, minLength} = require('vuelidate/lib/validators')

  export default {
    name: 'login',
    data: () => ({
      username: '',
      password: ''
    }),
    validations: {
      username: {required},
      password: {required, minLength: minLength(6)},
    },
    methods: {
      submitHandler() {
        this.$v.$touch()
        if (this.$v.$invalid) {
          return
        }
        this.$store.dispatch('LOGIN_USER', {username: this.username, password: this.password}).then((data) => {
          if (data.success && data.token) {
            this.$router.push('/')
          } else {
            alert(data.message)
          }
        })

      }
    }
}
</script>

<style lang="scss" scoped>

</style>
