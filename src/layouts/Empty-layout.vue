<template>
  <div class="wrapper">
    <div class="row">
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'empty-layout'
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    background-color: #ccc;
    min-height: 100vh;


    & .row {
      max-width: 500px;

      form {
        margin-top: 150px;
        padding: 30px 45px;
        background-color: #fff;
        border: 2px solid #26a69a;
        -webkit-border-radius: 25px;
        -moz-border-radius: 25px;
        border-radius: 25px;
      }
    }
  }
</style>
