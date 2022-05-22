import authApi from '@/api/auth.js';
import {setItem} from '@/utils/persistanceStorage';

const state = {
  isSubmitting: false,
  currentUser: null,
  userIsLoggedIn: null,
  validationErrors: null
}
const mutations = {
  registerStart(state) {
    state.isSubmitting = true
  },
  registerSuccess(state, payload) {
    state.isSubmitting = false;
    state.currentUser = payload;
    state.userIsLoggedIn = true;
  },
  registerFailure(state,payload) {
    state.isSubmitting = false;
    state.validationErrors = payload;
  }
}
const actions = {
  register(context, credentionals) {
    return new Promise((resolve) => {
      context.commit('registerStart');
      authApi
        .register(credentionals)
        .then(response => {
          context.commit('registerSuccess', response.data.user);
          setItem('accessToken', response.data.user.token);
          resolve(response.data.user);
        })
        .catch(result => {
          context.commit('registerFailure', result.response.data.errors);
          console.log(`error ${result}`);
        });
    })
  },
  login(context, credentionals){
    return new Promise((resolve)=>{
      context.commit('registerStart');
      authApi
        .login(credentionals)
        .then(response =>{
          context.commit('registerSuccess', response.data.user);
          setItem('accessToken', response.data.user.token);
          resolve(response.data.user);
        })
        .catch(result =>{
          context.commit('registerFailure', result.response.data.errors);
          console.log(`error ${result}`);
        })
    })
  }
}
export default {
  state,
  mutations,
  actions
}
