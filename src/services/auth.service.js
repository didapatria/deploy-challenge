import axios from 'axios'

const API_URL = 'https://didapatria-challenge-server.herokuapp.com/api/auth/'

const register = (fullname, email, password) => {
  return axios.post(API_URL + 'signup', {
    fullname,
    email,
    password,
  })
}

const login = (email, password) => {
  return axios
    .post(API_URL + 'signin', {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data))
      }
      return response.data
    })
}

const logout = () => {
  localStorage.removeItem('user')
}

export default {
  register,
  login,
  logout,
}
