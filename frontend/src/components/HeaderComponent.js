import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppBar, Toolbar, Tabs, Tab } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link, useHistory } from 'react-router-dom'

const HeaderComponent = () => {
  const [index, setIndex] = useState(0)
  const history = useHistory()
  const dispatch = useDispatch()

  const userLogOut = () => {
    history.push('/')
    dispatch({ type: 'LOGOUT_USER' })
  }

  const headerStyle = makeStyles((theme) => ({
    toolStyle: {
      ...theme.mixins.toolbar,
    },
    tabsStyle: {
      marginLeft: 'auto',
    },
    tabStyle: {
      '&:hover': {
        backgroundColor: '#316B83',
        borderRadius: '10px',
      },
    },
  }))

  const style = headerStyle()

  return (
    <>
      <AppBar>
        <Toolbar>
          <Tabs
            className={style.tabsStyle}
            value={index}
            onChange={(e, value) => setIndex(value)}
          >
            <Tab
              className={style.tabStyle}
              label='Home'
              to='/home'
              component={Link}
            />
            <Tab
              className={style.tabStyle}
              label='Products'
              to='/products'
              component={Link}
            />
            <Tab
              className={style.tabStyle}
              label='Cart'
              to='/cart'
              component={Link}
            />
            <Tab
              className={style.tabStyle}
              label='Orders'
              to='/orders'
              component={Link}
            />
            <Tab
              className={style.tabStyle}
              label='Profile'
              to='/profile'
              component={Link}
            />
            <Tab
              className={style.tabStyle}
              label='LogOut'
              onClick={(e) => userLogOut()}
            />
          </Tabs>
        </Toolbar>
      </AppBar>
      <div className={style.toolStyle} />
    </>
  )
}

export default HeaderComponent
