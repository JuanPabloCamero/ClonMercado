import React from 'react'
import { View, Text, Image, FlatList, Pressable, TextInput, StyleSheet } from 'react-native'
import productsData from '../data/productsData'

// Styles
import { stylesCard } from '../styles/StylesCards'
import { styles } from '../styles/HomeStyles'
import { stylesCategory } from '../styles/CategoryStyles'

// Icons
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const categories = Array.from(new Set(productsData.map(product => product.category)))

const filterProductsByCategory = (category) => {
  return productsData.filter(product => product.category === category)
}

const ItemCategory = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = React.useState(null)

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  }

  const displayProducts = selectedCategory ? filterProductsByCategory(selectedCategory) : productsData

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

      <View style={stylesCategory.menu}>
        <FlatList
          horizontal
          data={categories}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => handleCategorySelect(item)}
              style={[stylesCategory.buttonContainer, {backgroundColor: selectedCategory === item ? '#D2F0FA' : '#fff'}]}
            >
              <Text style={stylesCategory.buttonText}>{item}</Text>
            </Pressable>
          )}
        />
        <Pressable
          onPress={() => handleCategorySelect(null)}
          style={stylesCategory.buttonContainer}
        >
          <Text style={stylesCategory.buttonText}>Todos</Text>
        </Pressable>
      </View>

      <FlatList
        data={displayProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={stylesCategory.productItem}>
            <Image source={item.image} style={stylesCategory.productImage} />
            <Text style={stylesCategory.productName}>{item.name}</Text>
            <Text style={stylesCategory.productDescription}>{item.description}</Text>
            <Text style={stylesCategory.productPrice}>{item.price}</Text>
          </View>
        )}
        contentContainerStyle={stylesCategory.productList}
      />
    </View>
  )
}

export default ItemCategory