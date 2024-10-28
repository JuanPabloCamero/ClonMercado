import React from 'react'
import { Text, View, Pressable, TextInput, FlatList, Image } from 'react-native'
import productsData from '../data/productsData'

//Styles
import {styles} from '../styles/HomeStyles'
import {stylesCard} from '../styles/StylesCards'

// Icons
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const discountOptions = [5, 20, 30, 35, 60]
const getFilterOfferts = () =>{
  return productsData.filter((_,index) => index % 4 === 0).map((product, index)=>({
    ...product, 
    discount: discountOptions[index % discountOptions.length]
  }))
} 

const renderItem = ({item}) => (
  <View style={stylesCard.Card}>
    <Image source={item.image} style={styles.Images}/>
    <View style={stylesCard.productInfo}>
      <Text style={stylesCard.productName}>{item.name}</Text>
      <Text style={stylesCard.productInfo}>{item.description}</Text>
      <Text style={stylesCard.productName}>price: {item.price}</Text>
      <Text style={stylesCard.productName}>discount: {item.discount} %</Text>
    </View>
  </View>
)
const Offers = ({navigation}) => {

 const filterOfferts = getFilterOfferts()
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
            placeholderTextColor={'#000'}
          />
        </View>

        <Pressable onPress={() => navigation.navigate('ShoppingCart')}>
          <AntDesign name="shoppingcart" size={30} color="black" />
        </Pressable>
      </View>

      <FlatList
        data={filterOfferts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}

export default Offers
