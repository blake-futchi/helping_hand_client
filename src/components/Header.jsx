import React from 'react'
import { LOGIN_USER, REGISTER_USER, VIEW_PROFILE } from '../state/actions/actionTypes'
import { onLogout } from '../modules/authentication'
import { connect, useDispatch, useSelector } from 'react-redux'
import { Button, Grid, Segment } from 'semantic-ui-react'

const Header = props => {
  const dispatch = useDispatch()
  const authenticated = useSelector(state => state.authenticated)
  let buttons
  if (authenticated) {
    buttons = (
      <>
        <Button 
          id='Profile' 
          style = {{backgroundColor: 'white'}}
          onClick={() => props.dispatch({ type: VIEW_PROFILE })}
        >
          Profile
        </Button>
        <Button 
          id='Logout' 
          onClick={() => onLogout(dispatch)}
          style = {{backgroundColor: '#4f5f76', color: 'white'}}
        >
          Logout
        </Button>
      </>
    )
  } else {
    buttons = (
      <>
        <Button
          style = {{backgroundColor: 'white'}}
          name='login'
          id='login'
          onClick={() => props.dispatch({ type: LOGIN_USER })}
        >
          Login
        </Button>
        <Button
          style = {{backgroundColor: '#4f5f76', color: 'white'}}
          name='register'
          id='register'
          onClick={() => props.dispatch({ type: REGISTER_USER })}
        >
          Signup
        </Button>
      </>
    )
  }
  return (
    <Segment inverted color='red' tertiary>
      <Grid>
        <Grid.Column className='left aligned eight wide column'>
          <h1 className='title'>Helping Hand</h1>
        </Grid.Column>

        <Grid.Column className='right aligned eight wide column'>
          {buttons}
        </Grid.Column>
      </Grid>
    </Segment>
  )
}

export default connect()(Header)
