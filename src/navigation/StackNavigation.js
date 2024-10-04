import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//Context
import { AuthProvider } from '../context/AuthContext'
import { FavoritesProvider } from '../context/FavoritesContext'
import { HelpProvider } from '../context/HelpContext'
import { QuestionsProvider } from '../context/QuestionContext'
import { ProfileProvider } from '../context/ProfileContext'

//Components
import Login from '../components/Login'
import Home from '../components/Home'
import Registers from '../components/Registers'
import Menu from '../components/Menu'

//Screens
import PaymentBranch from '../screens/PaymentBranch'
import ShoppingCart from '../screens/ShoppingCart'
import MyFavorites from '../screens/MyFavorites'
import Offers from '../screens/Offers'
import Profile from '../screens/Profile'
import ItemCategory from '../screens/ItemCategory'
import ArticleDetails from '../screens/ArticleDetails'
import MyShoppings from '../screens/MyShoppings'
import HelpAndSupport from '../screens/HelpAndSupport'

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <AuthProvider> 
      <FavoritesProvider>
        <HelpProvider>
          <QuestionsProvider>
            <ProfileProvider>
              <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                  <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                  <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                  <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
                  <Stack.Screen name="Registers" component={Registers} options={{ headerShown: false }} />
                  <Stack.Screen name="PaymentBranch" component={PaymentBranch} options={{ headerShown: false }} />
                  <Stack.Screen name="ShoppingCart" component={ShoppingCart} options={{ headerShown: false }} />
                  <Stack.Screen name="MyFavorites" component={MyFavorites} options={{ headerShown: false }} />
                  <Stack.Screen name="Offers" component={Offers} options={{ headerShown: false }} />
                  <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
                  <Stack.Screen name="ItemCategory" component={ItemCategory} options={{ headerShown: false }} />
                  <Stack.Screen name="ArticleDetails" component={ArticleDetails} options={{ headerShown: false }} />
                  <Stack.Screen name="MyShoppings" component={MyShoppings} options={{ headerShown: false }} />
                  <Stack.Screen name="HelpAndSupport" component={HelpAndSupport} options={{ headerShown: false }} />
                </Stack.Navigator>
              </NavigationContainer>
            </ProfileProvider>
          </QuestionsProvider>
        </HelpProvider>
      </FavoritesProvider>
    </AuthProvider>
  );
};

export default StackNavigator;