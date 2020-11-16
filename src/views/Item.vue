<template>
  <div class="catalog-item">

    <Loader v-if="loading"/>
    <div
      v-else
      class="content"
    >
      <div class="row">
        <div class="col s5 m5 z-depth-5 content-col">
          <div class="item-img">
            <img
              class="responsive-img"
              :src="imgSrc(productInfo.img)"
            >
          </div>
          <Modal
            v-if="showModal"
            :id="productInfo.id"
            @close="closeModal"
          />
          <a
            class="waves-effect waves-light btn"
            id="show-modal"
            @click="openModal"
          >
            Feedback
          </a>
        </div>
        <div class="col s1 m1"></div>
        <div class="col s5 m5 z-depth-5 content-col">
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
      <Reviews :id="productInfo.id"/>
    </div>

  </div>
</template>

<script>
  import Reviews from '../components/catalog/item/Reviews'
  import Modal from '../components/catalog/item/Modal'

  export default {
    name: 'item',
    components: {
      Reviews,
      Modal
    },
    data: () => ({
      loading: true,
      productInfo: {},
      showModal: false
    }),
    async mounted() {
      const data = await this.$store.dispatch('GET_PRODUCTS')
      this.productInfo = data.find(item => (item.id === Number(this.$route.params.id)))
      this.loading = false
    },
    methods: {
      imgSrc(img) {
        return require(`../assets/img/${img}`)
      },
      openModal() {
        this.showModal = true
      },
      closeModal() {
        this.showModal = false
      }
    }
  }
</script>

<style lang="scss">
  @import '../assets/styles/variable';

  .catalog-item {
    & .content-col {
      min-height: 500px;
      border-radius: 25px;
      padding: 25px 15px;

      img {
        border-radius: 10px;
        box-shadow: 0 5px 10px;
      }

      a {
        margin-top: 20px;
      }

      & .item-descr {
        h1 {
          display: inline-block;
          line-height: 0;
          font-size: 38px;
          color: $primaryColor;
        }
      }
    }

    .row:nth-child(2) {
      margin-top: 50px;
    }

    .collection {
      .circle {
        display: flex !important;
        align-items: center;
        justify-content: center;
        font-size: 25px;
      }
    }
  }
</style>
