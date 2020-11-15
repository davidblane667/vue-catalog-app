<template>
  <div class="catalog-item">
    <Loader v-if="loading"/>
    <div class="content" v-else>
      <div class="row">
        <div class="col s5 m5 z-depth-5">
          <div class="item-img">
            <img class="responsive-img" :src="require('../assets/img/' + productInfo.img)">
          </div>
          <CatalogItem_Modal v-if="showModal" @close="showModal = false" :id="productInfo.id"/>
          <a class="waves-effect waves-light btn" id="show-modal" @click="showModal = true">Feedback</a>
        </div>
        <div class="col s1 m1"></div>
        <div class="col s5 m5 z-depth-5">
          <div class="item-descr">
            <div class="flow-text">
              <span>Title: </span>
              <h1>{{productInfo.title}}</h1>
            </div>
            <div class="flow-text">
              <blockquote>
                Description:<p>{{productInfo.text}}</p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <CatalogItem_Reviews :id="productInfo.id"/>
    </div>
  </div>
</template>

<script>
  import CatalogItem_Reviews from '../components/CatalogItem_Reviews'
  import CatalogItem_Modal from '../components/CatalogItem_Modal'

  export default {
    name: 'catalog-item',
    data: () => ({
      loading: true,
      productInfo: {},
      showModal: false
    }),
    async mounted() {
      const data = await this.$store.dispatch('GET_PRODUCTS')
      this.productInfo = data.filter(item => item.id === +this.$route.params.id)[0]
      this.loading = false
    },
    methods: {},
    components: {
      CatalogItem_Reviews,
      CatalogItem_Modal
    }
  }
</script>

<style lang="scss" scoped>
  .catalog-item {
    & .col {
      min-height: 500px;
      border-radius: 25px;
      padding: 25px 15px;

      img {
        border-radius: 10px;
        box-shadow: 0px 5px 10px;
      }

      a {
        margin-top: 20px;
      }

      & .item-descr {
        h1 {
          display: inline-block;
          line-height: 0;
          font-size: 3.2rem;
          color: #26a69a;
        }
      }
    }

    .row:nth-child(2) {
      margin-top: 50px;
    }

    .collection {
      .circle {
        border: 3px solid #26a69a;
        display: flex !important;
        align-items: center;
        justify-content: center;
        font-size: 25px;
      }
    }
  }
</style>
