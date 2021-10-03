import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core'
import { theme } from './styles/theme'
import LoginComponent from './components/LoginComponent'
import RegisterComponent from './components/RegisterComponent'
import HeaderComponent from './components/HeaderComponent'
import HomePage from './components/pages/HomePage'
import OrdersPage from './components/pages/OrdersPage'
import ProductsPage from './components/pages/ProductsPage'
import ProfilePage from './components/pages/ProfilePage'
import CartPage from './components/pages/CartPage'

const App = () => {
  const loginType = useSelector((state) => state.loginType)
  const isLogin = useSelector((state) => state.isLogin)
  return (
    <>
      <ThemeProvider theme={theme}>
        {isLogin ? (
          <BrowserRouter>
            <HeaderComponent />
            <Route path='/' exact component={HomePage} />
            <Route path='/home' exact component={HomePage} />
            <Route path='/orders' exact component={OrdersPage} />
            <Route path='/products' exact component={ProductsPage} />
            <Route path='/cart' exact component={CartPage} />
            <Route path='/profile' exact component={ProfilePage} />
          </BrowserRouter>
        ) : loginType === 'LogIn' ? (
          <LoginComponent />
        ) : (
          <RegisterComponent />
        )}
      </ThemeProvider>
    </>
  )
}

export default App
