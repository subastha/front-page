<template>
<div class="grid grid-web-tile">
  <div v-for="tile in webtiles"
    @click="navigate(tile.url)"
     class="item">
    <div class="item-content">
      <!-- Safe zone, enter your custom markup -->
      {{tile.name}}
      <!-- Safe zone ends -->
    </div>
  </div>
</div>
</template>

<script>
import Muuri from 'muuri';
import HttpService from '../../core/services/http/HttpService';

export default {
  data() {
    return {
      webtiles: [],
    };
  },
  computed: {
  },
  methods: {
    navigate: (url) => {
      window.open(url, '_blank');
    },
  },
  created() {

  },
  mounted() {
    HttpService.get('webtiles')
      .then((response) => {
        console.log(response);
        this.webtiles = response.data.webtiles;
        this.$nextTick(() => {
          const grid = new Muuri('.grid-web-tile');
          console.log(grid);
        });
      });
  },
};
</script>

<style lang="scss">
@import 'Webtiles.scss';
</style>