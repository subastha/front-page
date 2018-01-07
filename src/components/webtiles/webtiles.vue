<template>
<div id="grid-web-tile" class="grid grid-web-tile">
  <div v-for="tile in webtiles"
    @click="navigate(tile.url)"
     class="item-webtile">
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
import WebtilesHttpService from './WebtilesHttpService';
// import { HttpErrorHandler } from '../../core/services/common/handlers';

export default {
  data() {
    return {
      webtiles: [],
    };
  },
  computed: {
  },
  methods: {
    renderWebtiles: () => {
      const webtileElement = document.getElementById('grid-web-tile');
      const options = {
        // items: webtileElement.querySelectorAll('.item-webtile'),
      };

      // const grid = new Muuri('#grid-web-tile', options);
      const grid = new Muuri(webtileElement, options);
      console.log(grid);
    },
    navigate: (url) => {
      window.open(url, '_blank');
    },
  },
  created() {

  },
  mounted() {
    WebtilesHttpService.getWebtiles()
      .then((response) => {
        console.log(response);
        this.webtiles = response.data.webtiles;

        // wait until all UI elements are created before creating grid
        this.$nextTick(() => {
          this.renderWebtiles();
        });
      });
  },
};
</script>

<style lang="scss">
@import 'Webtiles.scss';
</style>