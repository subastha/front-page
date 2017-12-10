import Vue from 'vue';

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
