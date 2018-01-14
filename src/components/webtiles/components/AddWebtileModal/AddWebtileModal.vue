<template>
<div>
  <md-dialog>
  <md-dialog-title>Add Webtile</md-dialog-title>
  <p>Some stuff here</p>
  <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">Close</md-button>
        <md-button class="md-primary" @click="showDialog = false">Save</md-button>
      </md-dialog-actions>
  </md-dialog>
</div>
</template>

<script>
export default {
  name: 'AddWebtileModal',
  data: () => ({
    showDialog: false,
  }),
};
</script>

<style lang="scss" scoped>
  .md-dialog {
    max-width: 768px;
  }
</style>