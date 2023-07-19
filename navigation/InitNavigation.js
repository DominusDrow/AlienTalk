import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StackLogin, StackMain } from './AppNavigator'

import { useSelector, useDispatch } from 'react-redux'
import { loginSimple, logout } from '../redux/authSlice'

const InitNavigation = (props) => {
  const user = useSelector((state) => state.auth.user)
  const dispatch = useDispatch()

  return (
        <NavigationContainer>
            {user === 'guest' ? <StackLogin /> : <StackMain />}
        </NavigationContainer>
  )
}

export default InitNavigation
