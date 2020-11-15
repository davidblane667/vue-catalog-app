<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              Feedback
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <form class="col s12" @submit.prevent="submitHandler">
                <div class="row">
                  <div class="input-field col s12 input-info">
                      <textarea
                        id="textarea1" class="materialize-textarea"
                        v-model="text"
                        :class="{invalid: $v.text.$dirty && !$v.text.required}"
                      >
                      <label for="textarea1">Username</label>
                      <small
                        class="helper-text invalid"
                        v-if="$v.text.$dirty && !$v.text.required"
                      >Username is required</small>
                      </textarea>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <select ref="select" v-model="rate">
                      <option value="0">Rate 0</option>
                      <option value="1">Rate 1</option>
                      <option value="2">Rate 2</option>
                      <option value="3">Rate 3</option>
                      <option value="4">Rate 4</option>
                      <option value="5">Rate 5</option>
                    </select>
                    <label>Materialize Select</label>
                  </div>
                </div>
                <div class="row">
                  <div class="col s12 center">
                    <button class="btn waves-effect waves-light" type="submit" name="action">Send
                      <i class="material-icons right">send</i>
                    </button>
                  </div>
                </div>

              </form>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="waves-effect waves-teal btn-flat modal-default-button" @click="$emit('close')">
                Close
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  const {required} = require('vuelidate/lib/validators')

  export default {
    name: 'modal',
    data: () => ({
      text: '',
      rate: 0
    }),
    props: {
      id: {
        type: Number,
        default: null
      }
    },
    validations: {
      text: {required}
    },
    mounted() {
      // eslint-disable-next-line
      M.FormSelect.init(this.$refs.select, {alignment: 'top',constrainWidth: true})
    },
    methods: {
      submitHandler() {
        this.$v.$touch()
        if (this.$v.$invalid) {
          return
        }
        this.$store.dispatch('SEND_FEEDBACK', {
          token: this.$store.getters.GET_USER_INFO.token,
          id: this.id,
          rate: this.rate,
          text: this.text,
          date: new Date,
          username: this.$store.getters.GET_USER_INFO.username
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 500px;
    min-height: 440px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;

    & .input-info {
      min-height: 110px;

      & textarea {
        min-height: 50px;
        max-height: 110px;
        overflow-y: auto;
      }
    }
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-default-button {
    float: right;
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

</style>
