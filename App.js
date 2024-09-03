import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//componentes
import Login from './src/components/Login'
import Registers from './src/components/Registers'
import Home from './src/components/Home'
import Menu from './src/components/Menu'
import PaymentBranch from './src/screens/PaymentBranch'
import ShoppingCart from './src/screens/ShoppingCart'
import ListOfItems from './src/screens/ListOfItems'
import ArticleDetails from './src/screens/ArticleDetails'
import ItemCategory from './src/screens/ItemCategory'
import MyFavorites from './src/screens/MyFavorites'
import Offers from './src/screens/Offers'
import Profile from './src/screens/Profile'
import HelpAndSupport from './src/screens/HelpAndSupport'
import MyShoppings from './src/screens/MyShoppings'

const Stack = createStackNavigator()

const App = () => {
  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
          <Stack.Screen name="Registers" component={Registers} options={{ headerShown: false }}/>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
          <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }}/>
          <Stack.Screen name="PaymentBranch" component={PaymentBranch} options={{ headerShown: false }}/>
          <Stack.Screen name="ShoppingCart" component={ShoppingCart} options={{ headerShown: false }}/>
          <Stack.Screen name="ListOfItems" component={ListOfItems} options={{ headerShown: false }}/>
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

export default App