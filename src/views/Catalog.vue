<template>
  <div>
    <div class="row">
      <Loader v-if="loading"/>
      <div
        v-else
        class="col s4 m7"
        v-for="product in products"
        :key="product.id"
      >
        <div class="card">
          <div class="card-image">
            <img :src="imgSrc(product.img)">
            <span class="card-title">{{product.title}}</span>
          </div>
          <div class="card-content">
            <p>{{product.text}}</p>
          </div>
          <div class="card-action">
            <a
              href="#"
              @click.prevent="clickByProductLink(product.id)"
            >
              This is a link
            </a>
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
    },
    methods: {
      imgSrc(img) {
        return require('../assets/img/' + img)
      },
      clickByProductLink(id) {
        this.$router.push(`/item/${id}`)
      }
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
