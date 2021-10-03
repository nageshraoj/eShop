import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

const LoginComponent = () => {
  const dispatch = useDispatch()

  const userLogIn = (e) => {
    dispatch({ type: 'LOGIN_USER' })
  }

  const switchLogIn = (logType) => {
    switch (logType) {
      case 'LogIn':
        dispatch({ type: 'LOGIN' })
        break
      case 'Register':
        dispatch({ type: 'REGISTER' })
        break
      default:
        break
    }
  }

  const logInStyle = makeStyles((theme) => ({
    logStyle: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FEF1E6',
    },
    cardStyle: {
      //   position: "relative",
      //   top: "50%",
      //   left: "50%",
      height: '60%',
      width: '40%',
      maxWidth: '500px',
      minWidth: '400px',
      minHeight: '200px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#A8E7E9',
      borderRadius: '10px',
    },
    fieldStyle: {
      marginTop: '20px',
      '& #user,#pwd': {
        width: '300px',
      },
    },
    fieldBtnStyle: {
      marginTop: '30px',
      '& button': {
        width: '150px',
        '&:nth-child(2)': {
          marginLeft: '10px',
        },
      },
    },
  }))

  const style = logInStyle()

  return (
    <div className={style.logStyle}>
      <Card className={style.cardStyle}>
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Login
          </Typography>
        </CardContent>
        <div className={style.fieldStyle}>
          <TextField
            type='text'
            label='User Name'
            variant='outlined'
            id='user'
            required
          />
        </div>
        <div className={style.fieldStyle}>
          <TextField
            type='password'
            label='Password'
            variant='outlined'
            id='pwd'
            required
          />
        </div>
        <div className={style.fieldBtnStyle}>
          <Button
            variant='contained'
            color='primary'
            onClick={(e) => switchLogIn('Register')}
          >
            Register
          </Button>
          <Button
            variant='contained'
            color='primary'
            onClick={(e) => userLogIn()}
          >
            Login
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default LoginComponent
