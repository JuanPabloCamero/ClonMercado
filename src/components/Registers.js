import React, { useRef } from 'react'
import { View, Text, Alert, TextInput, Pressable, Image } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { styles } from '../styles/GlobalStyles'
import { colombiaData } from '../data/colombiaData'

const Registers = ({ navigation }) => {
  const usernameRef = useRef('')
  const passwordRef = useRef('')
  const emailRef = useRef('')
  const birthdateRef = useRef('')
  const addressRef = useRef('')
  const selectedDepartmentRef = useRef('')
  const selectedCityRef = useRef('')

  const forceUpdate = React.useReducer(() => ({}), {})[1]

  const departments = Object.keys(colombiaData)
  const getCityOptions = (dept) => colombiaData[dept] || []

  const validateUsername = (username) => username.length <= 10

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    return passwordRegex.test(password)
  };

  const validateEmail = (email) => email.includes('@')

  const validateBirthdate = (birthdate) => {
    const today = new Date()
    const birthDate = new Date(birthdate)
    const age = today.getFullYear() - birthDate.getFullYear()
    const maxAge = 50
    const minAge = 18

    if (age < minAge || age > maxAge) {
      Alert.alert('Error', 'No estás en el rango de edad permitido')
      return false
    }

    return true
  }

  const handleRegister = () => {
    const username = usernameRef.current
    const password = passwordRef.current
    const email = emailRef.current
    const birthdate = birthdateRef.current
    const address = addressRef.current
    const selectedDepartment = selectedDepartmentRef.current
    const selectedCity = selectedCityRef.current

    if (!validateUsername(username)) {
      Alert.alert('Error', 'El nombre del usuario debe contener máximo 10 caracteres')
      return
    }

    if (!validatePassword(password)) {
      Alert.alert('Error', 'La contraseña debe contener 8 caracteres, incluyendo mayúsculas, minúsculas, números y caracteres especiales')
      return
    }

    if (!validateEmail(email)) {
      Alert.alert('Error', 'El correo no es válido')
      return
    }

    if (!validateBirthdate(birthdate)) {
      return
    }

    if (address.length > 30) {
      Alert.alert('Error', 'La dirección no debe exceder los 30 caracteres')
      return
    }

    if (!selectedDepartment || !selectedCity) {
      Alert.alert('Error', 'Debes seleccionar un departamento y ciudad')
      return
    }

    Alert.alert('Registro exitoso', `${username}`)
    navigation.navigate('Login')

    usernameRef.current = ''
    passwordRef.current = ''
    emailRef.current = ''
    birthdateRef.current = ''
    addressRef.current = ''
    selectedDepartmentRef.current = ''
    selectedCityRef.current = ''

    forceUpdate()
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image source={require('../assets/newUser.png')} style={styles.Images} />
      </View>
      <Text style={styles.title}>Create Account</Text>

      <TextInput
        style={styles.input}
        placeholder='Username'
        value={usernameRef.current}
        onChangeText={(text) => { usernameRef.current = text; forceUpdate()}}
        maxLength={10}
        autoCapitalize='none'
      />

      <TextInput
        style={styles.input}
        placeholder='Password'
        value={passwordRef.current}
        onChangeText={(text) => { passwordRef.current = text; forceUpdate()}}
        secureTextEntry
        maxLength={8}
      />

      <TextInput
        style={styles.input}
        placeholder='Email'
        value={emailRef.current}
        onChangeText={(text) => { emailRef.current = text; forceUpdate()}}
        autoCapitalize='none'
        keyboardType='email-address'
      />

      <TextInput
        style={styles.input}
        placeholder='Birthdate (YYYY-MM-DD)'
        value={birthdateRef.current}
        onChangeText={(text) => { birthdateRef.current = text; forceUpdate()}}
        keyboardType='numeric'
      />

      <TextInput
        style={styles.input}
        placeholder='Address'
        value={addressRef.current}
        onChangeText={(text) => { addressRef.current = text; forceUpdate()}}
      />

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedDepartmentRef.current}
          onValueChange={(itemValue) => {
            selectedDepartmentRef.current = itemValue
            selectedCityRef.current = ''
            forceUpdate()
          }}
          style={styles.picker}
        >
          <Picker.Item label="Select Department" value="" />
          {departments.map((dept) => (
            <Picker.Item key={dept} label={dept} value={dept} />
          ))}
        </Picker>
      </View>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedCityRef.current}
          onValueChange={(itemValue) => {
            selectedCityRef.current = itemValue
            forceUpdate()
          }}
          style={styles.picker}
          enabled={selectedDepartmentRef.current !== ''}
        >
          <Picker.Item label="Select City" value="" />
          {getCityOptions(selectedDepartmentRef.current).map((cityName) => (
            <Picker.Item key={cityName} label={cityName} value={cityName} />
          ))}
        </Picker>
      </View>

      <Pressable style={styles.loginButton} onPress={handleRegister}>
        <Text style={styles.loginButtonText}>Register</Text>
      </Pressable>
    </View>
  )
}

export default Registers