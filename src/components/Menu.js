import React from 'react'
import { Pressable, Text, View, Image } from 'react-native'
import {styles} from '../styles/GlobalStyles'

const Menu = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.containerLogo}> 
            <Image source={require('../assets/logoMenu.png')} style={styles.Images}/>
        </View>
        <Pressable style={styles.buttonMenu} onPress={() => navigation.navigate('PaymentBranch')}>
            <Text style={styles.buttonMenutText}>
               Payment branch
            </Text>
        </Pressable>

        <Pressable style={styles.buttonMenu} onPress={() => navigation.navigate('ShoppingCart')}>
            <Text style={styles.buttonMenutText}>
                Shopping cart
            </Text>
        </Pressable>

        <Pressable style={styles.buttonMenu} onPress={() => navigation.navigate('ListOfItems')}>
            <Text style={styles.buttonMenutText}>
                List of items
            </Text>
        </Pressable>

        <Pressable style={styles.buttonMenu} onPress={() => navigation.navigate('ArticleDetails')}>
            <Text style={styles.buttonMenutText}>
                Article details
            </Text>
        </Pressable>

        <Pressable style={styles.buttonMenu} onPress={() => navigation.navigate('ItemCategory')}>
            <Text style={styles.buttonMenutText}>
                Item category
            </Text>
        </Pressable>

        <Pressable style={styles.buttonMenu} onPress={() => navigation.navigate('MyShoppings')}>
            <Text style={styles.buttonMenutText}>
                My shoppings
            </Text>
        </Pressable>

        <Pressable style={styles.buttonMenu} onPress={() => navigation.navigate('MyFavorites')}>
            <Text style={styles.buttonMenutText}>
                My Favorites
            </Text>
        </Pressable>
        
        <Pressable style={styles.buttonMenu} onPress={() => navigation.navigate('Offers')}>
            <Text style={styles.buttonMenutText}>
                Offers
            </Text>
        </Pressable>

        <Pressable style={styles.buttonMenu} onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.buttonMenutText}>
                Profile
            </Text>
        </Pressable>

        <Pressable style={styles.buttonMenu} onPress={() => navigation.navigate('HelpAndSupport')}>
            <Text style={styles.buttonMenutText}>
                Help and Support
            </Text>
        </Pressable>
        
    </View>
   
  )
}

export default Menu
