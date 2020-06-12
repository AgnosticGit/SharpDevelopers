import React from 'react'
import { useSelector } from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderWithInfo } from './components/HeaderWithInfo';
import { Auth } from '../../modules/auth/views/Auth'
import { NavigationPages } from './NavigationPages'
import { Login } from '../../modules/auth/views/Login';
import { SignUp } from '../../modules/auth/views/SignUp';
import { Main } from '../../modules/main/views/Main'
import { Transactions } from '../../modules/main/views/Transactions';


const Stack = createStackNavigator()

export function Router() {
  const token = useSelector(state => state.auth.token)
  const userInfo = useSelector(state => state.auth.userInfo)
  const balance = useSelector(state => state.main.balance)

  if (!token) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name={NavigationPages.auth}
          component={Auth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={NavigationPages.login}
          component={Login}
        />
        <Stack.Screen
          name={NavigationPages.signUp}
          component={SignUp}
        />
      </Stack.Navigator>
    )
  } else {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name={NavigationPages.main}
          component={Main}
          options={HeaderWithInfo(userInfo, balance)}
        />
        <Stack.Screen
          name={NavigationPages.transactions}
          component={Transactions}
          options={HeaderWithInfo(userInfo, balance)}
        />
      </Stack.Navigator>
    )
  }
} 