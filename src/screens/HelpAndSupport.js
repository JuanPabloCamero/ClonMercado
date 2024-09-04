import React, {useState, useEffect} from 'react'
import { Text, View, Pressable, TextInput, Alert } from 'react-native'
import { Picker } from '@react-native-picker/picker'

// Styles
import { styles } from '../styles/HomeStyles'
import { stylesCard } from '../styles/StylesCards'
import { helpStyles } from '../styles/HelpStyles'

// Icons
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { stylesPayment } from '../styles/PaymentStyles'

const HelpAndSupport = ({ navigation }) => {
  const [requesType, setRequesType] = useState()
  const [description, setDescription] = useState()

  useEffect(()=> {
    console.log(`description change: ${description}`)
},[description])

  const handleSubmit = () => {
    if(description.length > 300){
      Alert.alert('Error ', 'El contenido no puede superar los 300 caracteres')
      return
    }
    Alert.alert(`Solicitud enviada\nTipo: ${requesType}\nDescripción: ${description}`)
    setRequesType('')
    setDescription('')
  }

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

      <View style={helpStyles.container}> 
        <Text style={helpStyles.label}>Tipo de solicitud</Text>
        <Picker 
          selectedValue={requesType}
          style={helpStyles.picker}
          onValueChange={(itemValue, itemIndex) => setRequesType(itemValue)}
        >
          <Picker.Item label='Queja' value='queja'/> 
          <Picker.Item label='Petición' value='peticion'/> 
          <Picker.Item label='Recurso' value='recurso'/> 
        </Picker>
        <Text style={helpStyles.label}>Descripción de la solicitud</Text>
        <TextInput 
          style={helpStyles.textInput}
          multiline
          placeholder="Descripción"
          maxLength={300}
          value={description}
          onChangeText={setDescription}
        />
        <Pressable onPress={handleSubmit} style={stylesPayment.pagarButton}>
          <Text>Enviar solicitud</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default HelpAndSupport