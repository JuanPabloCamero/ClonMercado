import React, { useContext, useEffect, useState } from 'react';
import { View, FlatList, Text, Image, Pressable, TextInput } from 'react-native';
import { AuthContext } from '../context/AuthContext'; 


// Styles
import { stylesCard } from '../styles/StylesCards';
import { stylesCart } from '../styles/ShoppingCart';
import { stylesPayment } from '../styles/PaymentStyles';
import { styles } from '../styles/HomeStyles';

// Icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ShoppingCart = ({ navigation }) => {
  const { state, dispatch } = useContext(AuthContext);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    console.log('Estado actualizado:', state)
    const total = state.cartItems.reduce((sum, item) => sum + (parseFloat(item.price.replace(/[^\d.-]/g, '')) * item.quantity), 0);
    setTotalAmount(total);
  }, [state.cartItems]);

  const updateQuantity = (id, delta) => {
    dispatch({ type: 'UPDATE_ITEM_QUANTITY', payload: { id, delta } });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM_FROM_CART', payload: id });
  };

  const handleCheckout = () => {
    navigation.navigate('PaymentBranch', { cartItems: state.cartItems });
    dispatch({ type: 'CLEAR_CART' });
  };

  const renderItem = ({ item }) => (
    <View style={stylesCart.cartItem}>
      <Image source={item.image} style={stylesCart.thumbnail} />
      <View style={stylesCart.itemInfo}>
        <Text style={stylesCart.itemName}>{item.name}</Text>
        <Text style={stylesCart.itemInfo}>{item.description}</Text>
        <Text>{item.price}</Text>
        <View style={stylesCart.quantityContainer}>
          <Pressable onPress={() => updateQuantity(item.id, -1)} style={stylesCart.quantityButton}>
            <Text style={stylesCart.itemInfo}>-</Text>
          </Pressable>
          <TextInput
            style={stylesCart.quantityInput}
            value={item.quantity.toString()}
            keyboardType="numeric"
            onChangeText={(text) => {
              const newQuantity = parseInt(text) || 1;
              updateQuantity(item.id, newQuantity - item.quantity);
            }}
          />
          <Pressable onPress={() => updateQuantity(item.id, 1)} style={stylesCart.quantityButton}>
            <Text style={stylesCart.itemInfo}>+</Text>
          </Pressable>
        </View>
        <Pressable onPress={() => removeItem(item.id)} style={stylesCart.removeButton}>
          <Text style={{ color: 'red' }}>Remove</Text>
        </Pressable>
      </View>
    </View>
  );

  return (
    <View style={stylesCard.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate('Menu')}>
          <Ionicons name="menu" size={30} color="black" />
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
        data={state.cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={<Text style={stylesCart.total}>Total: ${totalAmount.toFixed(2)}</Text>}
      />

      <Pressable onPress={handleCheckout} style={stylesPayment.pagarButton}>
        <Text style={stylesPayment.text}>Proceed to checkout</Text>
      </Pressable>
    </View>
  );
};

export default ShoppingCart;