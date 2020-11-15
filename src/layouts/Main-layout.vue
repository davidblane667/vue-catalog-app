<template>
  <div class="wrapper">

    <ul id="dropdown1" class="dropdown-content">
      <li><a href="#!">Log out</a></li>
    </ul>
    <nav>
      <div class="nav-wrapper">
        <ul class="right hide-on-med-and-down">
          <li><a href="#">Catalog</a></li>
          <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Username<i class="material-icons right">arrow_drop_down</i></a>
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
  name: 'main-layout'
}
</script>

<style lang="scss" scoped>
  .catalog-items {
    max-width: 1100px;
    margin: 0 auto;
    padding: 50px 30px;
  }
</style>
