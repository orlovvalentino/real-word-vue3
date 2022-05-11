import axios from '@/api/axios'

const register = credentionals => {
  return axios.post('/users', {user: credentionals})
}
const login = credentionals => {
  return axios.post('/users/login', {user: credentionals})
}

export default {
  register,
  login
}
