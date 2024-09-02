import React from 'react'
import { View, Text, Button, FlatList, Pressable, TextInput } from 'react-native'
import productsData from '../data/productsData'

// Styles
import { stylesCard } from '../styles/StylesCards'
import { styles } from '../styles/HomeStyles'
import { stylesCategory } from '../styles/CategoryStyles'

// Icons
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

// Definición de categorías
const categories = Array.from(new Set(productsData.map(product => product.category)))

// Función para filtrar productos por categoría
const filterProductsByCategory = (category) => {
  return productsData.filter(product => product.category === category)
}

const ItemCategory = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = React.useState(null)

  // Manejo de selección de categoría
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  }

  // Productos a mostrar según la categoría seleccionada
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
            <View style={stylesCategory.buttonContainer}>
              <Button
                title={item}
                onPress={() => handleCategorySelect(item)}
              />
            </View>
          )}
        />
        <View style={stylesCategory.buttonContainer}>
          <Button
            title="Todos"
            onPress={() => handleCategorySelect(null)}
          />
        </View>
      </View>

      <FlatList
        data={displayProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={stylesCategory.productItem}>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>{item.price}</Text>
          </View>
        )}
        contentContainerStyle={stylesCategory.productList}
      />
    </View>
  )
}

export default ItemCategory
