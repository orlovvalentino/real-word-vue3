<template>
  <div class='auth-page'>
    <div class='container page'>
      <div class='row'>

        <div class='col-md-6 offset-md-3 col-xs-12'>
          <h1 class='text-xs-center'>Sign in</h1>
          <p class='text-xs-center'>
            <router-link :to="{name:'register'}">Need an account?</router-link>
          </p>

          <rw-validation-errors v-if='validationErrors' :validation-errors='validationErrors' />
          <form @submit.prevent='onSubmit'>
            <fieldset class='form-group'>
              <input class='form-control form-control-lg' type='email' placeholder='Email' v-model='email'>
            </fieldset>

            <fieldset class='form-group'>
              <input class='form-control form-control-lg' type='password' placeholder='Password' v-model='password'>
            </fieldset>

            <button class='btn btn-lg btn-primary pull-xs-right'
                    type='submit'
                    :disabled='isSubmitted'>Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RwValidationErrors from '@/components/ValidationErrors';

export default {
  name: 'RwRegister',
  components: {RwValidationErrors},
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    isSubmitted() {
      return this.$store.state.auth.isSubmitting
    },
    validationErrors() {
      return this.$store.state.auth.validationErrors
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('login',
        {
          email: this.email,
          password: this.password
        }
      ).then(() => {
        this.$router.push({name: 'home'});
      })
    }
  }
}
</script>
