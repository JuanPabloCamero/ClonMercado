import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'

//Components
import Login from '../components/Login'
import Registers from '../components/Registers'
import Home from '../components/Home'
import Menu from '../components/Menu'
import PaymentBranch from '../screens/PaymentBranch'
import ShoppingCart from '../screens/ShoppingCart'
import ArticleDetails from '../screens/ArticleDetails'
import ItemCategory from '../screens/ItemCategory'
import MyFavorites from '../screens/MyFavorites'
import Offers from '../screens/Offers'
import Profile from '../screens/Profile'
import HelpAndSupport from '../screens/HelpAndSupport'
import MyShoppings from '../screens/MyShoppings'

const Stack = createStackNavigator()

const StackNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
          <Stack.Screen name="Registers" component={Registers} options={{ headerShown: false }}/>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
          <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }}/>
          <Stack.Screen name="PaymentBranch" component={PaymentBranch} options={{ headerShown: false }}/>
          <Stack.Screen name="ShoppingCart" component={ShoppingCart} options={{ headerShown: false }}/>
          <Stack.Screen name="ArticleDetails" component={ArticleDetails} options={{ headerShown: false }}/>
          <Stack.Screen name="ItemCategory" component={ItemCategory} options={{ headerShown: false }}/>
          <Stack.Screen name="MyFavorites" component={MyFavorites} options={{ headerShown: false }}/>
          <Stack.Screen name="MyShoppings" component={MyShoppings} options={{ headerShown: false }}/>
          <Stack.Screen name="Offers" component={Offers} options={{ headerShown: false }}/>
          <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
          <Stack.Screen name="HelpAndSupport" component={HelpAndSupport} options={{ headerShown: false }}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation
