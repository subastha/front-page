<template>
<div class='main-wrapper'>
  <div class="title-bar">
      <h2>My Homepage</h2>
  </div>
  <div class='login-container'>
    <form novalidate class='login-form-container' @submit.prevent>
      <md-field class='custom-md-field '>
        <label> email</label>
        <md-input v-model='form.username' name="username" type="text"></md-input>
        <span class="md-error custom-md-error" v-if="showErrors && !$v.form.username.required">Username is required.</span>
      </md-field>
      <md-field class='custom-md-field '>
        <label> password</label>
        <md-input v-model='form.password' type="password" name="password"></md-input>
        <span class="md-error custom-md-error" v-if="showErrors && !$v.form.password.required">Password is required.</span>
        <span class="md-error custom-md-error" v-if="showErrors && !$v.form.password.minLength">Password should be at least {{passwordLength}} characters long.</span>
      </md-field>
      <div class="login-button-container">
        <md-button @click="login($event)" class="md-primary md-raised" type="submit">Login</md-button>
      </div>
      
    </form>
  </div>
</div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, email, minLength } from 'vuelidate/lib/validators';

export default {
  mixins: [validationMixin],
  data() {
    return {
      showErrors: false,
      passwordLength: 3,
      form: {
        username: '',
        password: '',
      },
    };
  },
  validations: {
    form: {
      username: {
        required,
        email,
        minLength: minLength(3),
      },
      password: {
        required,
        minLength: minLength(3),
      },
    },
  },
  computed: {
  },
  methods: {
    login(event) {
      // event.preventDefault();
      if (this.validateForm()) {
        console.log('success', this.other, this.form, event);
      } else {
        console.log('failed', this.other, this.form, event);
      }
    },
    validateForm() {
      console.log('$v', this.$v);
      this.showErrors = true;
      this.$v.$touch();

      if (!this.$v.$invalid) {
        return true;
      }

      return false;
    },
  },
};
</script>

<style lang="scss">
@import 'Login.scss';
</style>