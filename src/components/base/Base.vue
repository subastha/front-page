<template>
<div class="root">
  <nav>
    <button v-on:click='login'>Click me</button>
  </nav>
  <div class="content-container">
    <div class="sub-container web-tiles-container">
      <div class="grid grid-web-tile">
        <div class="item">
          <div class="item-content">
            <!-- Safe zone, enter your custom markup -->
            This can be anything.
            <!-- Safe zone ends -->
          </div>
        </div>
        <div class="item">
          <div class="item-content">
            <!-- Safe zone, enter your custom markup -->
            Two.
            <!-- Safe zone ends -->
          </div>
        </div>
      </div>
    </div>
    <div class="sub-container test-container">
    </div>
  </div>
  <footer>

  </footer>
</div>
</template>
<script>

import Muuri from 'muuri';
import HttpService from '../../core/services/http/HttpService';

export default {
  data() {
    return {

    };
  },
  computed() {

  },
  methods: {
    login: (event) => {
      HttpService.get('webtiles', {
        params: {
          name: 'who?',
        },
      });
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
    this.$nextTick(() => {
      // console.log('here');
      const grid = new Muuri('.grid-web-tile');
      console.log(grid);
    });
    // const grid = new Muuri('.grid');
    // console.log(grid);
  },
};
</script>
<style lang="scss">
@import 'Base.scss';
</style>