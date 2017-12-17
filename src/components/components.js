import Vue from 'vue';
import bModal from 'bootstrap-vue/es/components/modal/modal';
import bModalDirective from 'bootstrap-vue/es/directives/modal/modal';
import bCard from 'bootstrap-vue/es/components/card/card';

Vue.component('b-card', bCard);
Vue.component('b-modal', bModal);
Vue.component('b-modal-directive', bModalDirective);
Vue.component('title-name', {
  props: {
  },
  template: `
    <div class="title">
      <h1><slot></slot></h1>
    </div>
    `,
  data() {
    return {

    };
  },
});

Vue.component('content-box', {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  template: `
    <div class="content" @click="$emit('select')">
    </div>
  `,
  methods: {
    navigate() {
      console.log(this.title);
    },
  },
});
