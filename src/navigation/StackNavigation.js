import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {AuthProvider} from '../context/AuthContext'


//Components
import Login from '../components/Login'
import Home from '../components/Home'
import Registers from '../components/Registers'

const Stack = createStackNavigator()

const StackNavigator = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name='Login'component={Login} options={{headerShown:false}}/>
          <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
          <Stack.Screen name='Registers' component={Registers} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  )
}

export default StackNavigator
