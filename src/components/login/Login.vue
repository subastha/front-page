<template>
<div class='main-wrapper'>
  <div class="title-bar">
      <h2>My Homepage</h2>
  </div>
  <div class='login-container'>
    <form novalidate class='login-form-container' @submit.prevent>
      <md-field class='custom-md-field'>
        <label> email</label>
        <md-input v-model='form.email' name="email" type="text"></md-input>
        <span class="md-error custom-md-error" v-if="showErrors && !$v.form.email.required">Email is required.</span>
      </md-field>
      <md-field class='custom-md-field '>
        <label> password</label>
        <md-input v-model='form.password' type="password" name="password"></md-input>
        <span class="md-error custom-md-error" v-if="showErrors && !$v.form.password.required">Password is required.</span>
       <!-- <span class="md-error custom-md-error" v-if="showErrors && !$v.form.password.minLength">Password should be at least {{passwordMinLength}} characters long.</span> -->
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
import { required, email } from 'vuelidate/lib/validators';
import { mapMutations, mapGetters } from 'vuex';
import AuthService from '@/core/services/common/AuthService';
import { commonErrorHandler, HttpErrorHandler } from '../../core/services/common/handlers';
import LoginHttpService from './LoginHttpService';

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
      },
    };
  },
  validations: {
    form: {
      email: {
        required,
        email,
        // minLength: minLength(this.emailMinLength),
      },
      password: {
        required,
        // minLength: minLength(this.passwordMinLength),
      },
    },
  },
  computed: {
  },
  methods: {
    ...mapMutations([
      'isLoggedIn',
    ]),
    ...mapGetters([
      'isLoggedIn',
    ]),
    login(event) {
      if (this.validateForm()) {
        console.log('success', this.other, this.form, event);
        // LoginHttpService.info().then(info => console.log(info), commonErrorHandler);
        LoginHttpService.signin(this.form)
          .then((response) => {
            // console.log('response');
            console.log(response);
            // LoginHttpService.info().then(info => console.log(info));
            this.$router.push('Base');
          }, commonErrorHandler);
      } else {
        console.log('failed', this.other, this.form, event);
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
  beforeMount() {
    if (this.isLoggedIn()) {
      AuthService
        .validateToken()
        .then((response) => {
          console.log(response);
          // this.isLoggedIn(true);
          this.$router.push('Base');
        },
        HttpErrorHandler.bind(this));
    }

    console.log('beforeMount Login');
  },
};
</script>

<style lang="scss">
@import 'Login.scss';
</style>