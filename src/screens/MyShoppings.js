import React from 'react'
import { Text, View, Pressable, TextInput, Image, FlatList } from 'react-native'
import productsData from '../data/productsData'

//Styles
import {styles} from '../styles/HomeStyles'
import {stylesCard} from '../styles/StylesCards'

// Iconos
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const MyShoppings = ({navigation}) => {
  const filterShoppings = productsData.filter((_,index) => index % 5 === 0)

  const renderItem = ({item}) => (
    <View style={stylesCard.Card}>
      <Image source={item.image} style={styles.Images}/>
      <View style={stylesCard.productInfo}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.status}>Status: {item.status}</Text>
      </View>
    </View>
  )

  return (
    <View style={stylesCard.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate('Menu')}>
          <Ionicons name='menu' size={30} color="black" />
        </Pressable>

        <View style={styles.searchContainer}>
          <AntDesign name="search1" size={20} color="gray" />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar en Mercado Libre"
          />
        </View>

        <Pressable onPress={() => navigation.navigate('ShoppingCart')}>
          <AntDesign name="shoppingcart" size={30} color="black" />
        </Pressable>
      </View>

      <FlatList
        data={filterShoppings}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}

export default MyShoppings
