import React, { useContext } from 'react';
import { Text, View, Pressable, TextInput, Image, FlatList } from 'react-native';
import { AuthContext } from '../context/AuthContext'; 

// Styles
import { styles } from '../styles/HomeStyles';
import { stylesCard } from '../styles/StylesCards';

// Iconos
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const MyShoppings = ({ navigation }) => {
  const { state } = useContext(AuthContext); 
  const { purchasedItems ={}} = state;

  const renderItem = ({ item, index }) => (
    <View style={stylesCard.Card} key={index}>
      <Image source={item.image} style={styles.Images} />
      <View style={stylesCard.productInfo}>
        <Text style={stylesCard.productName}>{item.name}</Text>
        <Text style={stylesCard.productInfo}>{item.description}</Text>
        <Text style={stylesCard.productName}>Status: {item.status}</Text>
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
        data={purchasedItems} 
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.id}-${index}`}
      />
    </View>
  );
}

export default MyShoppings;