<template>
  <div class="row">
    <div class="col s12 z-depth-5">
      <h5>Reviews</h5>

      <Loader v-if="loading"/>

      <ul
        v-else
        class="collection"
      >
        <li
          class="collection-item avatar"
          v-for="rev of reviews"
          :key="rev.id"
        >
          <div
            class="circle center"
            :class="rateColor(rev.rate)"
          >
            {{rev.rate}}
          </div>
          <span class="title">{{rev.created_by.username}}</span>
          <span class="data">{{rev.created_at}}</span>
          <p>{{rev.text}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'reviews',
    data: () => ({
      reviews: [],
      loading: true
    }),
    props: {
      id: {
        type: Number,
        required: true
      }
    },
    async mounted() {
      this.reviews = await this.$store.dispatch('GET_REVIEWS', this.id)
      this.loading = false
    },
    methods: {
      rateColor(rate) {
        return rate <= 2 ? 'red'
             : rate <= 4 ? 'yellow'
             : 'green'
      }
    }
  }
</script>

<style lang="scss">
  .collection {
    position: relative;

    .circle {
      display: flex !important;
      align-items: center;
      justify-content: center;
      font-size: 25px;
    }

    & .data {
      position: absolute;
      top: 10px;
      right: 15px;
    }
  }
</style>
