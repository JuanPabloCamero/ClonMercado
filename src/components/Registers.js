import React, { useRef, useState, useEffect, useContext } from 'react';
import { View, Text, Alert, TextInput, Pressable, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from '../styles/GlobalStyles';
import { colombiaData } from '../data/colombiaData';
import { AuthContext } from '../context/AuthContext';

const Registers = ({ navigation }) => {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [correo, setCorreo] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [direccion, setDireccion] = useState('');
  const [departamentoSeleccionado, setDepartamentoSeleccionado] = useState('');
  const [ciudadSeleccionada, setCiudadSeleccionada] = useState('');

  const { dispatch } = useContext(AuthContext);
  const correoRef = useRef('');
  const departamentos = Object.keys(colombiaData);

  useEffect(() => {
    if (correoRef.current !== correo) {
      correoRef.current = correo;
    }
  }, [correo]);

  const obtenerCiudades = (dept) => colombiaData[dept] || [];

  const validarUsuario = (usuario) => usuario.length <= 10;

  const validarContraseña = (contraseña) => {
    const regexContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regexContraseña.test(contraseña);
  };

  const validarCorreo = (correo) => correo.includes('@');

  const validarFechaNacimiento = (fechaNacimiento) => {
    const hoy = new Date();
    const fechaNacimientoDate = new Date(fechaNacimiento);
    const edad = hoy.getFullYear() - fechaNacimientoDate.getFullYear();
    const edadMaxima = 50;
    const edadMinima = 18;

    if (edad < edadMinima || edad > edadMaxima) {
      Alert.alert('Error', 'No estás en el rango de edad permitido');
      return false;
    }

    return true;
  };

  const handleRegister = () => {
    if (!validarUsuario(usuario)) {
      Alert.alert('Error', 'El nombre de usuario debe contener máximo 10 caracteres');
      return;
    }

    if (!validarContraseña(contraseña)) {
      Alert.alert('Error', 'La contraseña debe contener 8 caracteres, incluyendo mayúsculas, minúsculas, números y caracteres especiales');
      return;
    }

    if (!validarCorreo(correo)) {
      Alert.alert('Error', 'El correo no es válido');
      return;
    }

    if (!validarFechaNacimiento(fechaNacimiento)) {
      return;
    }

    if (direccion.length > 30) {
      Alert.alert('Error', 'La dirección no debe exceder los 30 caracteres');
      return;
    }

    if (!departamentoSeleccionado || !ciudadSeleccionada) {
      Alert.alert('Error', 'Debes seleccionar un departamento y ciudad');
      return;
    }

    dispatch({
      type: 'REGISTER_USER',
      payload: {
          usuario,
          contraseña,
          correo,
          fechaNacimiento, 
          departamento: departamentoSeleccionado,
          ciudad: ciudadSeleccionada,
          direccion,
      },
    });

    Alert.alert('Registro exitoso', `Bienvenido ${usuario}`);
    navigation.navigate('Login');

    setUsuario('');
    setContraseña('');
    setCorreo('');
    setFechaNacimiento('');
    setDireccion('');
    setDepartamentoSeleccionado('');
    setCiudadSeleccionada('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image source={require('../assets/newUser.png')} style={styles.Images} />
      </View>
      <Text style={styles.title}>Crear Cuenta</Text>

      <TextInput
        style={styles.input}
        placeholder='Usuario'
        placeholderTextColor={'#000'}
        value={usuario}
        onChangeText={setUsuario}
        maxLength={10}
        autoCapitalize='none'
      />

      <TextInput
        style={styles.input}
        placeholder='Contraseña'
        placeholderTextColor={'#000'}
        value={contraseña}
        onChangeText={setContraseña}
        secureTextEntry
        maxLength={8}
      />

      <TextInput
        style={styles.input}
        placeholder='Correo'
        placeholderTextColor={'#000'}
        value={correo}
        onChangeText={setCorreo}
        autoCapitalize='none'
        keyboardType='email-address'
      />

      <TextInput
        style={styles.input}
        placeholder='Fecha de nacimiento (AAAA-MM-DD)'
        placeholderTextColor={'#000'}
        value={fechaNacimiento}
        onChangeText={setFechaNacimiento}
        keyboardType='date'
      />

      <TextInput
        style={styles.input}
        placeholder='Dirección'
        placeholderTextColor={'#000'}
        value={direccion}
        onChangeText={setDireccion}
      />

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={departamentoSeleccionado}
          onValueChange={(itemValue) => {
            setDepartamentoSeleccionado(itemValue);
            setCiudadSeleccionada('');
          }}
          style={styles.picker}
        >
          <Picker.Item label="Seleccionar Departamento" value="" />
          {departamentos.map((dept) => (
            <Picker.Item key={dept} label={dept} value={dept} />
          ))}
        </Picker>
      </View>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={ciudadSeleccionada}
          onValueChange={(itemValue) => {
            setCiudadSeleccionada(itemValue);
          }}
          style={styles.picker}
          enabled={departamentoSeleccionado.length > 0}
        >
          <Picker.Item label="Seleccionar Ciudad" value="" />
          {obtenerCiudades(departamentoSeleccionado).map((ciudad) => (
            <Picker.Item key={ciudad} label={ciudad} value={ciudad} />
          ))}
        </Picker>
      </View>

      <Pressable style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>REGISTRAR</Text>
      </Pressable>
    </View>
  );
};

export default Registers;