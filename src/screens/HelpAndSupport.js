import React, { useContext, useEffect } from 'react';
import { Text, View, Pressable, TextInput, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { HelpContext } from '../context/HelpContext'; 

// Styles
import { styles } from '../styles/HomeStyles';
import { stylesCard } from '../styles/StylesCards';
import { helpStyles } from '../styles/HelpStyles';

// Icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { stylesPayment } from '../styles/PaymentStyles';

const HelpAndSupport = ({ navigation }) => {
  const { state, dispatch } = useContext(HelpContext);

  useEffect(() => {
    console.log(`Description changed: ${state.description}`);
  }, [state.description]);

  const handleSubmit = () => {
    if (!state.description) {
      Alert.alert('Error', 'Por favor agreguele una descripción a su solucitud');
      return;
    }

    if (state.description.length > 300) {
      Alert.alert('Error', 'El contenido no puede superar los 300 caracteres');
      return;
    }

    Alert.alert(
      'Confirmar envío',
      `¿Estás seguro de que deseas enviar la solicitud con los siguientes detalles?\n\nTipo: ${state.requestType}\nDescripción: ${state.description}`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Confirmar',
          onPress: () => {
            Alert.alert('Solicitud enviada', 'Tu solicitud ha sido enviada con éxito.');
            dispatch({ type: 'RESET' }); 
          },
        },
      ]
    );
  };

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
          selectedValue={state.requestType}
          style={helpStyles.picker}
          onValueChange={(itemValue) => dispatch({ type: 'SET_REQUEST_TYPE', payload: itemValue })}
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
          value={state.description}
          onChangeText={(text) => dispatch({ type: 'SET_DESCRIPTION', payload: text })}
        />
        <Pressable onPress={handleSubmit} style={stylesPayment.pagarButton}>
          <Text>Enviar solicitud</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default HelpAndSupport;