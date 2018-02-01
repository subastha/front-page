<template>
<div class="root">
  <div class="title-bar">
      <h2>My Homepage</h2>
  </div>
  <div class="content-container">
    <div class="sub-container web-tiles-container">
      <Webtiles v-if="isAuthenticated"/>
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
import AuthService from '@/core/services/common/AuthService';
import { HttpErrorHandler } from '@/core/services/common/handlers';
import Webtiles from '@/components/webtiles/Webtiles';

export default {
  components: {
    Webtiles,
  },
  data() {
    return {
      isAuthenticated: false,
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
  beforeCreate() {
    AuthService.validateToken()
      .then((response) => {
        this.isAuthenticated = true;
        console.log('valid', response);
      },
      HttpErrorHandler.bind(this));
    console.log('beforeCreate Base');
  },
};
</script>
<style lang="scss">
@import 'Base.scss';
</style>