<template>
	<b-card title="Card Title"
          img-src="https://lorempixel.com/600/300/food/5/"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
		<p class="card-text">
		Some quick example text to build on the card title and make up the bulk of the card's content.
		</p>
		<b-button href="#" variant="primary">Go somewhere</b-button>
	</b-card>
</template>
<script>

import HttpService from '../../core/services/http/HttpService';

export default {
  created() {
    HttpService.get('test')
      .then((response) => {
        console.log(response);
      });
  },
};
</script>

