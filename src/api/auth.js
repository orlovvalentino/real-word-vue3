import axios from '@/api/axios';

const register = credentionals => {
  return axios.post('/users', {user: credentionals})
}
export default {
  register
}
