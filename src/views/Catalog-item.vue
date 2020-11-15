<template>
  <div class="catalog-item">
    <div class="row">
      <div class="col s5 m5 z-depth-5">
        <div class="item-img">
          <img class="responsive-img" src="../assets/img/sample-1.jpg">
        </div>
        <a class="waves-effect waves-light btn">Feedback</a>
      </div>
      <div class="col s1 m1"></div>
      <div class="col s5 m5 z-depth-5">
        <div class="item-descr">
          <div class="flow-text">
            <span>Title: </span>
            <h1>Item title</h1>
          </div>
          <div class="flow-text">
            <span>Description:</span>
            <blockquote>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cum dolore eius enim expedita fuga maiores minima, odio praesentium quaerat
                quam, quos rerum similique sunt voluptatibus.</p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s12 z-depth-5">
        <h5>Reviews</h5>
        <ul class="collection">
          <li class="collection-item avatar">
            <div class="circle center">5</div>
            <span class="title">Username</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur corporis debitis dolor eligendi eos expedita
              fugiat in libero minima natus non quibusdam reiciendis, tempore totam?</p>
          </li>
          <li class="collection-item avatar">
            <div class="circle center">5</div>
            <span class="title">Username</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur corporis debitis dolor eligendi eos expedita
              fugiat in libero minima natus non quibusdam reiciendis, tempore totam?</p>
          </li>
          <li class="collection-item avatar">
            <div class="circle center">5</div>
            <span class="title">Username</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur corporis debitis dolor eligendi eos expedita
              fugiat in libero minima natus non quibusdam reiciendis, tempore totam?</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {

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
