<template>
<div class="register-wrapper">
  <div class="title-bar">
      <h2>My Homepage</h2>
  </div>
  <div class="register-container">
    <form novalidate class='register-form-container' @submit.prevent>
      <md-field class='custom-md-field'>
        <label> name</label>
        <md-input v-model='form.name' name="name" type="text"></md-input>
        <span class="md-error custom-md-error" v-if="showErrors && !$v.form.name.required">Name is required.</span>
      </md-field>
      <md-field class='custom-md-field'>
        <label> email</label>
        <md-input v-model='form.email' name="email" type="text"></md-input>
        <span class="md-error custom-md-error" v-if="showErrors && !$v.form.email.required">Email is required.</span>
      </md-field>
      <md-field class='custom-md-field '>
        <label> password</label>
        <md-input v-model='form.password' type="password" name="password"></md-input>
        <span class="md-error custom-md-error" v-if="showErrors && !$v.form.password.required">Password is required.</span>
      </md-field>
      <md-field class='custom-md-field '>
        <label> repeat password</label>
        <md-input v-model='form.c_password' type="password" name="c_password"></md-input>
        <span class="md-error custom-md-error" v-if="showErrors && !$v.form.c_password.required">Repeat password is required.</span>
      </md-field>
      <div class="register-button-container">
        <md-button @click="register($event)" class="md-primary md-raised" type="submit">Register</md-button>
      </div>
      
    </form>
  </div>
</div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, email } from 'vuelidate/lib/validators';
import { commonErrorHandler } from '@/core/services/common/handlers';
import RegisterHttpService from './RegisterHttpService';

export default {
  mixins: [validationMixin],
  data() {
    return {
      showErrors: false,
      passwordMinLength: 3,
      emailMinLength: 3,
      form: {
        email: '',
        password: '',
        c_password: '',
      },
    };
  },
  validations: {
    form: {
      name: {
        required,
        // minLength: minLength(this.emailMinLength),
      },
      email: {
        required,
        email,
        // minLength: minLength(this.emailMinLength),
      },
      password: {
        required,
        // minLength: minLength(this.passwordMinLength),
      },
      c_password: {
        required,
      },
    },
  },
  methods: {
    register(event) {
      console.log(event);
      if (this.validateForm()) {
        RegisterHttpService.register(this.form)
        .then((response) => {
          console.log(response);
          this.$router.push('Login');
        }, commonErrorHandler);
      }
    },
    validateForm() {
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
@import 'Register.scss';
</style>
