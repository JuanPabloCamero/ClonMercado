import React, { useState } from 'react'
import { 
  View,
  Text,
  TextInput, 
  Image, 
  Pressable, 
  FlatList 
} from 'react-native'
import { Picker } from '@react-native-picker/picker'

// Styles
import { styles } from '../styles/HomeStyles'
import { stylesPayment } from '../styles/PaymentStyles'

// Icons
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ScrollView } from 'react-native-gesture-handler'

const PaymentBranch = (props) => {
  const { route, navigation } = props;
  const { product, cartItems } = route.params || {}

  const [address, setAddress] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('PSE')
  const [selectedBank, setSelectedBank] = useState('Bank1')

  const items = cartItems || (product ? [product] : [])

  if (items.length === 0) {
    return <Text>No items available for payment</Text>
  }

  const handlePayment = () => {
    alert('Simulando el pago...')
    navigation.navigate('Home', { clearCart: true })
  };

  const totalValue = items.reduce((sum, item) => sum + (parseFloat(item.price.replace(/[^\d.-]/g, '')) * (item.quantity || 1)), 0)

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

      <Text style={stylesPayment.title}>Detalle de Pago</Text>

      
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <View style={stylesPayment.itemContainer}>
              <Image source={item.image} style={stylesPayment.thumbnail} />
              <View style={stylesPayment.infoContainer}>
                <Text style={stylesPayment.name}>{item.name}</Text>
                <Text style={stylesPayment.description}>{item.description}</Text>
                <Text>Valor: {item.price}</Text>
                <Text>Cantidad: {item.quantity || 1}</Text>
                <Text>Subtotal: {(parseFloat(item.price.replace(/[^\d.-]/g, '')) * (item.quantity || 1)).toFixed(2)}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
          ListFooterComponent={
            <Text style={stylesPayment.total}>Total: ${totalValue.toFixed(2)}</Text>
          }
        />

      <ScrollView>
        <View style={stylesPayment.container2}>
          <Text style={stylesPayment.text}>Dirección de Entrega:</Text>
          <TextInput
            style={stylesPayment.input}
            value={address}
            maxLength={30}
            onChangeText={setAddress}
          />

          <Text style={stylesPayment.text}>Forma de Pago:</Text>
          <Picker
            selectedValue={paymentMethod}
            style={stylesPayment.picker}
            onValueChange={(itemValue) => setPaymentMethod(itemValue)}
          >
            <Picker.Item label="PSE" value="PSE"/>
            <Picker.Item label="Tarjeta de crédito" value="credit_card" />
            <Picker.Item label="Efecty" value="efecty" />
          </Picker>

          {paymentMethod === 'PSE' && (
            <>
              <Text style={stylesPayment.text}>Selecciona el Banco:</Text>
              <Picker
                selectedValue={selectedBank}
                style={stylesPayment.picker}
                onValueChange={(itemValue) => setSelectedBank(itemValue)}
              >
                <Picker.Item label="Bancolombia" value="Bank1" />
                <Picker.Item label="Daviplata" value="Bank2" />
                <Picker.Item label="Banco de Bogota" value="Bank3" />
                <Picker.Item label="BBVA" value="Bank4" />
                <Picker.Item label="Banco Caja Social" value="Bank5" />
                <Picker.Item label="Banco ITAÚ" value="Bank6" />
                <Picker.Item label="Banco Agrario" value="Bank7" />
              </Picker>

              {selectedBank === 'Bank1' && (
                <View style={stylesPayment.formContainer}>
                  <Text style={stylesPayment.text}>Formulario Banco:</Text>
                  <TextInput
                    style={stylesPayment.input}
                    placeholder="Número de Cuenta"
                    maxLength={20}
                  />
                  <TextInput
                    style={stylesPayment.input}
                    placeholder="Nombre del Titular"
                    maxLength={50}
                  />
                </View>
              )}
              {selectedBank === 'Bank2' && (
                <View style={stylesPayment.formContainer}>
                  <Text>Formulario Banco 2:</Text>
                  <TextInput
                    style={stylesPayment.input}
                    placeholder="Número de Cuenta"
                    maxLength={20}
                  />
                  <TextInput
                    style={stylesPayment.input}
                    placeholder="Código de Banco"
                    maxLength={10}
                  />
                </View>
              )}
              {selectedBank === 'Bank3' && (
                <View style={stylesPayment.formContainer}>
                  <Text>Formulario Banco 3:</Text>
                  <TextInput
                    style={stylesPayment.input}
                    placeholder="Número de Cuenta"
                    maxLength={20}
                  />
                  <TextInput
                    style={stylesPayment.input}
                    placeholder="Nombre del Titular"
                    maxLength={50}
                  />
                </View>
              )}
              {selectedBank === 'Bank4' && (
                <View style={stylesPayment.formContainer}>
                  <Text>Formulario Banco 4:</Text>
                  <TextInput
                    style={stylesPayment.input}
                    placeholder="Número de Cuenta"
                    maxLength={20}
                  />
                  <TextInput
                    style={stylesPayment.input}
                    placeholder="Nombre del Titular"
                    maxLength={50}
                  />
                </View>
              )}
              {selectedBank === 'Bank5' && (
                <View style={stylesPayment.formContainer}>
                  <Text>Formulario Banco 5:</Text>
                  <TextInput
                    style={stylesPayment.input}
                    placeholder="Número de Cuenta"
                    maxLength={20}
                  />
                  <TextInput
                    style={stylesPayment.input}
                    placeholder="Nombre del Titular"
                    maxLength={50}
                  />
                </View>
              )}
              {selectedBank === 'Bank6' && (
                <View style={stylesPayment.formContainer}>
                  <Text>Formulario Banco 6:</Text>
                  <TextInput
                    style={stylesPayment.input}
                    placeholder="Número de Cuenta"
                    maxLength={20}
                  />
                  <TextInput
                    style={stylesPayment.input}
                    placeholder="Nombre del Titular"
                    maxLength={50}
                  />
                </View>
              )}
              {selectedBank === 'Bank7' && (
                <View style={stylesPayment.formContainer}>
                  <Text>Formulario Banco 7:</Text>
                  <TextInput
                    style={stylesPayment.input}
                    placeholder="Número de Cuenta"
                    maxLength={20}
                  />
                  <TextInput
                    style={stylesPayment.input}
                    placeholder="Nombre del Titular"
                    maxLength={50}
                  />
                </View>
              )}
            </>
          )}

        </View>
      </ScrollView>
      
      <View style={stylesPayment.containerPagar}>
        <Pressable onPress={handlePayment} style={stylesPayment.pagarButton}>
          <Text>Pagar</Text>
        </Pressable>
      </View>
      
    </View>
  )
}

export default PaymentBranch