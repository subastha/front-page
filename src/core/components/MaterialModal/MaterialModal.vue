<template>
  <md-dialog :md-active.sync="showModal" @md-closed="$emit('closemodal')">
    <md-dialog-title><slot name="header"></slot></md-dialog-title>
    <md-dialog-content>
    <slot name="content"></slot>
    </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="$emit('closemodal')">Close</md-button>
        <md-button v-if="hasSave" class="md-primary" @click="$emit('savemodal')" type="submit">Save</md-button>
      </md-dialog-actions>
  </md-dialog>
</template>

<script>
export default {
  props: {
    showModal: {
      type: Boolean,
      required: true,
      default: false,
    },
    hasSave: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  computed: {
    show: () => this.showModal,
  },
  data() {
    return {
    };
  },
  methods: {
    saveWebtile: data => console.log(data),
  },
};
</script>

<style lang="scss" scoped>
  @import 'MaterialModal.scss';
</style>