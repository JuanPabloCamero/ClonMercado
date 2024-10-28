// MyFavorites.js
import React, { useContext } from 'react';
import { Text, View, Pressable, Image, FlatList, TextInput } from 'react-native';
import { FavoritesContext } from '../context/FavoritesContext'; 
import { styles } from '../styles/HomeStyles';
import { stylesCard } from '../styles/StylesCards';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const MyFavorites = ({ navigation }) => {
  const { state } = useContext(FavoritesContext); 

  const renderItem = ({ item }) => (
    <View style={stylesCard.Card}>
      <Image source={item.image} style={styles.Images} />
      <View style={stylesCard.productInfo}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.status}>Status: Available</Text>
      </View>
    </View>
  );

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
        data={state.favoriteItems} 
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default MyFavorites;