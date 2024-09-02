import React from 'react'
import { View, TextInput, Pressable, Text, FlatList, Image } from 'react-native'
import {styles} from '../styles/HomeStyles'
import {stylesCard} from '../styles/StylesCards'
import productsData from '../data/productsData'

// Icons
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Home = ({ navigation }) => {
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

      <View>
        <FlatList
          data={productsData}
          renderItem={({item}) => (
            <Pressable onPress={() => navigation.navigate('PaymentBranch', {product: item} )}>
              <View style={stylesCard.Card}>
                <View style={stylesCard.cardHeader}>
                  <Image source={item.image} style={styles.Images}/>
                </View>
                <View style={stylesCard.productInfo}>
                  <Text style={stylesCard.productName}>{item.name}</Text>
                  <Text style={stylesCard.productCategory}>Category: {item.category}</Text>
                  <Text>{item.description}</Text>
                  <Text style={stylesCard.price}>{item.price}</Text>
                </View>
              </View>
            </Pressable>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default Home