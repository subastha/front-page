<template>
<div class="main-wrapper">
  <div class="title-bar">
      <h2>My Homepage</h2>
  </div>
  <div class="reset-container">
    <form novalidate class="reset-form-container" @submit.prevent>
      <p>A password reset link will be sent to this email address.</p>
      <md-field class='custom-md-field'>
        <label> email</label>
        <md-input v-model='form.email' name="email" type="text"></md-input>
        <span class="md-error custom-md-error" v-if="showErrors && !$v.form.email.required">Email is required.</span>
      </md-field>
      <div class="reset-button-container">
        <md-button @click="reset()" class="md-primary md-raised" type="submit">Submit</md-button>
        <!-- <a href="#">Forgot Password</a> -->
      </div>
    </form>
  </div>
</div>
  
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, email } from 'vuelidate/lib/validators';

export default {
  mixins: [validationMixin],
  data() {
    return {
      showErrors: false,
      form: {
        email: '',
      },
    };
  },
  validations: {
    form: {
      email: {
        required,
        email,
      },
    },
  },
  methods: {
    reset() {
      if (this.validateForm()) {
        console.log('validated');
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
@import 'PwReset.scss';
</style>