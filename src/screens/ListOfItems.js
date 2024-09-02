import React, {useState} from 'react'
import { Text, View, FlatList, Image, Pressable, TextInput} from 'react-native'
import productsData from '../data/productsData'
import {styles} from '../styles/HomeStyles'
import {stylesCard} from '../styles/StylesCards'

//Iconos
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const ListOfItems = ({navigation}) => {
  const [products, setProducts] = useState(productsData)

  return (
    <View>
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
        data={products}
        renderItem={({item}) => (
            <View style={stylesCard.Card}>
              <View style={stylesCard.cardHeader}>
                <Image source={item.image} style={styles.Images}/>
              </View>
              <View style={stylesCard.productInfo}>
                <Text style={stylesCard.productName}>{item.name}</Text>
                <Text style={stylesCard.productCategory}>Cateeory: {item.category}</Text>
                <Text>{item.description}</Text>
                <Text style={stylesCard.price}>{item.price}</Text>
              </View>
          </View>
      )}

        keyExtractor={(item) => item.id.toString()}
        />
    </View>
  )
}

export default ListOfItems
