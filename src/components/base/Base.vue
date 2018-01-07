<template>
<div class="root">
  <nav>
    <h2>My Homepage</h2>
  </nav>
  <div class="content-container">
    <div class="sub-container web-tiles-container">
      <Webtiles/>
    </div>
    <!-- <div class="sub-container test-container"> 
    </div> -->
  </div>
  <footer>

  </footer>
</div>
</template>
<script>
// /* eslint-disable */

// import Muuri from 'muuri';
// import HttpService from '../../core/services/http/HttpService';
import Webtiles from '../webtiles/Webtiles';

export default {
  components: {
    Webtiles,
  },
  data() {
    return {

    };
  },
  methods: {
    login: (event) => {
      // HttpService.get('webtiles', {
      //   params: {
      //     name: 'who?',
      //   },
      // });
      // console.log(this.token);
      console.log(event);
    },
  },
  // route: {
  //   activate() {
  //     this.$nextTick(() => {
  //       console.log('here');
  //       const a = new Muuri('.grid');
  //       console.log(a);
  //     });
  //   },
  // },
  mounted() {
    // this.$nextTick(() => {
    //   // console.log('here');
    //   const grid = new Muuri('.grid-web-tile');
    //   console.log(grid);
    // });
    // const grid = new Muuri('.grid');
    // console.log(grid);
  },
};
</script>
<style lang="scss">
@import 'Base.scss';
</style>