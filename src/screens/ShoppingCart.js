import React from 'react'
import { TextInput, View, Pressable, FlatList, Text, Image, ScrollView } from 'react-native'
import productsData from '../data/productsData'

// Styles
import { styles } from '../styles/HomeStyles'
import { stylesCard } from '../styles/StylesCards'
import { stylesCart } from '../styles/ShoppingCart'

// Icons
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { stylesPayment } from '../styles/PaymentStyles'

let cartItems = []

const addProduct = (product) => {
  const existingItemIndex = cartItems.findIndex((item) => item.id === product.id)
  if (existingItemIndex >= 0) {
    cartItems[existingItemIndex].quantity += 1
  } else {
    cartItems.push({ ...product, quantity: 1 })
  }
}

const updateQuantity = (id, delta) => {
  cartItems = cartItems.map((item) =>
    item.id === id ? { ...item, quantity: Math.max(item.quantity + delta, 1) } : item
  )
}

const removeItem = (id) => {
  cartItems = cartItems.filter((item) => item.id !== id)
}

const filterProductsByCategory = (products) => {
  const seenCategories = new Set()
  return products.filter((product) => {
    if (!seenCategories.has(product.category)) {
      seenCategories.add(product.category)
      return true
    }
    return false
  })
}

const renderItem = ({ item }) => (
  <View style={stylesCart.cartItem}>
    <Image source={item.image} style={stylesCart.thumbnail} />
    <View style={stylesCart.itemInfo}>
      <Text style={stylesCart.itemName}>{item.name}</Text>
      <Text>{item.description}</Text>
      <Text>{item.price}</Text>
      <View style={stylesCart.quantityContainer}>
        <Pressable onPress={() => updateQuantity(item.id, -1)} style={stylesCart.quantityButton}>
          <Text>-</Text>
        </Pressable>
        <TextInput
          style={stylesCart.quantityInput}
          value={item.quantity.toString()}
          keyboardType="numeric"
          onChangeText={(text) => updateQuantity(item.id, parseInt(text) - item.quantity)}
        />
        <Pressable onPress={() => updateQuantity(item.id, 1)} style={stylesCart.quantityButton}>
          <Text>+</Text>
        </Pressable>
      </View>
      <Pressable title="Remove" onPress={() => removeItem(item.id)} color="red" />
    </View>
  </View>
)

const ShoppingCart = ({ navigation }) => {
  const filteredProducts = filterProductsByCategory(productsData);
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

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
          />
        </View>

        <Pressable onPress={() => navigation.navigate('ShoppingCart')}>
          <AntDesign name="shoppingcart" size={30} color="black" />
        </Pressable>
      </View>
      <ScrollView>
        <View style={stylesCard.ListContainer}>
          <FlatList
            data={filteredProducts}
            renderItem={({ item }) => (
              <Pressable onPress={() => addProduct(item)}>
                <View style={stylesCard.Card}>
                  <Image source={item.image} style={stylesCard.Images} />
                  <Text style={stylesCard.name}>{item.name}</Text>
                  <Text style={stylesCard.price}>{item.price}</Text>
                </View>
              </Pressable>
            )}
            keyExtractor={(item) => item.id.toString()}
          />

          <FlatList
            data={cartItems}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            ListFooterComponent={<Text style={stylesCart.total}>Total: ${totalAmount.toFixed(2)}</Text>}
          />

          <Pressable onPress={() => alert('Proceeding to checkout')} style={stylesPayment.pagarButton}>
            <Text>Proceed to checkout</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  )
}

export default ShoppingCart