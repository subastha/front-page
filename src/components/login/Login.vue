<template>
<div class='main-wrapper'>
  <div class="title-bar">
      <h2>My Homepage</h2>
  </div>
  <div class='login-container'>
    <div class='login-form-container'>
      <md-field class='custom-md-field '>
        <label> username</label>
        <md-input required></md-input>
      </md-field>
      <md-field class='custom-md-field '>
        <label> password</label>
        <md-input type="password" required></md-input>
      </md-field>
      <div class="login-button-container">
        <md-button class="md-primary md-raised">Login</md-button>
      </div>
      
    </div>
  </div>
</div>
</template>

<script>
</script>

<style lang="scss">
@import 'Login.scss';
</style>