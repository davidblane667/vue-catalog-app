<template>
  <div>
    <div class="row">
      <Loader v-if="loading"/>
      <div
        class="col s4 m7"
        v-for="product in products"
        :key="product.id"
        v-else
      >
        <div class="card">
          <div class="card-image">
            <img :src="require('../assets/img/' + product.img)">
            <span class="card-title">{{product.title}}</span>
          </div>
          <div class="card-content">
            <p>{{product.text}}</p>
          </div>
          <div class="card-action">
            <a href="#" @click.prevent="$router.push(`/catalog-item/${product.id}`)">This is a link</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'catalog',
    data: () => ({
      products: [],
      loading: true
    }),
    async mounted() {
      this.products = await this.$store.dispatch('GET_PRODUCTS')
      this.loading = false
    }
  }
</script>

<style lang="scss" scoped>
  .row {
    display: flex;

    .card-image {
      img {
        max-height: 370px;
      }
    }
  }
</style>
