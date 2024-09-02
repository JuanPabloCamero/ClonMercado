import React from 'react'
import { View, Text, TextInput, Image, Pressable } from 'react-native'
import { Picker } from '@react-native-picker/picker'

//Styles
import { styles } from '../styles/HomeStyles'
import { stylesPayment } from '../styles/PaymentStyles'

//Iconos
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const PaymentBranch = (props) => {
  const { route, navigation } = props
  const { product } = route.params || {}

  if (!product) {
    return <Text>No product data available</Text>
  }

  const handlePayment = () => {
    alert('Simulando el pago...')
    navigation.goBack()
  }

  let quantity = 1
  let address = ''
  let paymentMethod = 'PSE'
  let value = parseFloat(product.price.replace(/[^\d.-]/g, ''))

  const totalValue = value * quantity

  return (
    <View style={stylesPayment.container}>
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
      <View style={stylesPayment.container1}>

        <Text style={stylesPayment.title}>Detalle de Pago</Text>

        <View style={stylesPayment.itemContainer}>
          <Image source={product.image} style={stylesPayment.thumbnail} />
          <View style={stylesPayment.infoContainer}>
            <Text style={stylesPayment.name}>{product.name}</Text>
            <Text style={stylesPayment.description}>{product.description}</Text>
          </View>
        </View>

        <Text>Valor:</Text>
        <TextInput
          style={stylesPayment.input}
          value={value.toString()}
          keyboardType="numeric"
          maxLength={8}
          onChangeText={(text) => { value = parseFloat(text); }}
        />

        <Text>Cantidad:</Text>
        <TextInput
          style={stylesPayment.input}
          value={quantity.toString()}
          keyboardType="numeric"
          maxLength={2}
          onChangeText={(text) => { quantity = parseInt(text); }}
        />

        <Text>Valor Total: {totalValue.toFixed(2)}</Text>

        <Text>Dirección de Entrega:</Text>
        <TextInput
          style={stylesPayment.input}
          value={address}
          maxLength={30}
          onChangeText={(text) => { address = text; }}
        />

        <Text>Forma de Pago:</Text>
        <Picker
          selectedValue={paymentMethod}
          style={stylesPayment.picker}
          onValueChange={(itemValue) => { paymentMethod = itemValue; }}
        >
          <Picker.Item label="PSE" value="PSE" />
          <Picker.Item label="Tarjeta de crédito" value="credit_card" />
          <Picker.Item label="Efecty" value="efecty" />
        </Picker>

        <Pressable onPress={handlePayment} style={stylesPayment.pagarButton}>
          <Text>Pagar</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default PaymentBranch