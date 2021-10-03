import { combineReducers } from 'redux'

const logInReducer = (state = 'LogIn', action) => {
  switch (action.type) {
    case 'LOGIN':
      return 'LogIn'
    case 'REGISTER':
      return 'Register'
    default:
      return state
  }
}

const isLogInReducer = (state = false, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return true
    case 'LOGOUT_USER':
      return false
    default:
      return state
  }
}

export default combineReducers({
  loginType: logInReducer,
  isLogin: isLogInReducer,
})
