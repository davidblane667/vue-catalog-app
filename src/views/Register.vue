<template>
  <form
    class="col s12 z-depth-5"
    @submit.prevent="submitHandler"
  >
    <div class="row">
      <div class="input-field col s12">
        <input
          id="user_name"
          type="text"
          class="validate"
          v-model="username"
          :class="{'invalid': invalidUsername}"
        >
        <label for="user_name">Username</label>
        <small
          class="helper-text invalid"
          v-if="invalidUsername"
        >
          Username is required
        </small>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input
          id="password"
          type="password"
          class="validate"
          v-model="password"
          :class="{'invalid': invalidPassword}"
        >
        <label for="password">Password</label>
        <small
          class="helper-text invalid"
          v-if="invalidPasswordRequired"
        >
          Password is required
        </small>
        <small
          class="helper-text invalid"
          v-if="invalidPasswordMinLength"
        >
          Min length password is {{passwordMinlength}} symbols. Now is {{password.length}}
        </small>
      </div>
    </div>
    <div class="row">
      <div class="col s12 form-footer">
        <button
          class="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Sing Up <i class="material-icons right">send</i>
        </button>
        <router-link
          class="waves-effect waves-teal btn-flat"
          to="/login"
        >
          Login
        </router-link>
      </div>
    </div>

  </form>
</template>

<script>
  const {required, minLength} = require('vuelidate/lib/validators')

  export default {
    name: 'registration',
    data: () => ({
      username: '',
      password: ''
    }),
    validations: {
      username: {
        required
      },
      password: {
        required,
        minLength: minLength(6)
      }
    },
    methods: {
      async submitHandler() {
        this.$v.$touch()
        if (!this.$v.$invalid) {
          const data = await this.$store.dispatch('REGISTER_USER', {
            username: this.username,
            password: this.password
          })
          if (data && data.success) {
            await this.$router.push('/login')
          } else {
            alert(data.message)
          }
        }
      }
    },
    computed: {
      invalidUsername() {
        return (this.$v.username.$dirty && !this.$v.username.required)
      },
      invalidPassword() {
        return ((this.$v.password.$dirty && !this.$v.password.required) || (this.$v.password.$dirty && !this.$v.password.minLength))
      },
      invalidPasswordRequired() {
        return (this.$v.password.$dirty && !this.$v.password.required)
      },
      invalidPasswordMinLength() {
        return (this.$v.password.$dirty && !this.$v.password.minLength)
      },
      passwordMinlength() {
        return this.$v.password.$params.minLength.min
      }
    }
  }
</script>
