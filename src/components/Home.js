import React, { useContext } from 'react';
import { View, TextInput, Pressable, Text, FlatList, Image, Alert } from 'react-native';
import { styles } from '../styles/HomeStyles';
import { stylesCard } from '../styles/StylesCards';
import productsData from '../data/productsData';
import { AuthContext } from '../context/AuthContext'; 
import { FavoritesContext } from '../context/FavoritesContext'; 

// Icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Home = ({ navigation }) => {
  const { dispatch } = useContext(AuthContext); 
  const { state: favoritesState, dispatch: favoritesDispatch } = useContext(FavoritesContext); 

  const handleProductPress = (item) => {
    Alert.alert(
      'Opciones del Producto',
      '¿Qué deseas hacer?',
      [
        {
          text: 'Agregar al carrito',
          onPress: () => addProductToCart(item),
        },
        {
          text: isFavorite(item) ? 'Eliminar de Favoritos' : 'Agregar a Favoritos',
          onPress: () => toggleFavorite(item),
        },
        {
          text: 'Pagar',
          onPress: () => navigation.navigate('PaymentBranch', { product: item }),
        },
        {
          text: 'Cancelar',
          style: 'cancel',
        },
      ],
      { cancelable: true }
    );
  };

  const isFavorite = (product) => {
    return favoritesState.favoriteItems.some(item => item.id === product.id);
  };

  const toggleFavorite = (product) => {
    if (isFavorite(product)) {
      favoritesDispatch({ type: 'REMOVE_FAVORITE', payload: product.id }); 
    } else {
      favoritesDispatch({ type: 'ADD_FAVORITE', payload: product }); 
    }
  };

  const addProductToCart = (product) => {
    dispatch({ type: 'ADD_ITEM_TO_CART', payload: { ...product, quantity: 1 } }); 
  };

  return (
    <View style={stylesCard.paddingHome}>
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

      <View styles={stylesCard.container}>
        <FlatList
          data={productsData}
          renderItem={({ item }) => (
            <Pressable onPress={() => handleProductPress(item)}>
              <View style={stylesCard.Card}>
                <View style={stylesCard.cardHeader}>
                  <Image source={item.image} style={styles.Images} />
                  {isFavorite(item) && (
                    <Ionicons name="star" size={20} color="gold" style={{ position: 'absolute', top: 5, left: 200 }} />
                  )}
                </View>
                <View style={stylesCard.productInfo}>
                  <Text style={stylesCard.productName}>{item.name}</Text>
                  <Text style={stylesCard.productCategory}>Category: {item.category}</Text>
                  <Text style={stylesCard.productInfo}>{item.description}</Text>
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

export default Home;