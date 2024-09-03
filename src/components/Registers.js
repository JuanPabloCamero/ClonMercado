import React, { useRef, useState, useEffect } from 'react'
import { View, Text, Alert, TextInput, Pressable, Image } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { styles } from '../styles/GlobalStyles'
import { colombiaData } from '../data/colombiaData'

const Registers = ({ navigation }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [address, setAddress] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('')
  const [selectedCity, setSelectedCity] = useState('')

  const emailRef = useRef('')
  const departments = Object.keys(colombiaData)

  useEffect(() => {
    if (emailRef.current !== email) {
      emailRef.current = email
    }
  }, [email])

  
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

    setUsername('')
    setPassword('')
    setEmail('')
    setBirthdate('')
    setAddress('')
    setSelectedDepartment('')
    setSelectedCity('')
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
        value={username}
        onChangeText={setUsername}
        maxLength={10}
        autoCapitalize='none'
      />

      <TextInput
        style={styles.input}
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        maxLength={8}
      />

      <TextInput
        style={styles.input}
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
        autoCapitalize='none'
        keyboardType='email-address'
      />

      <TextInput
        style={styles.input}
        placeholder='Birthdate (YYYY-MM-DD)'
        value={birthdate}
        onChangeText={setBirthdate}
        keyboardType='numeric'
      />

      <TextInput
        style={styles.input}
        placeholder='Address'
        value={address}
        onChangeText={setAddress}
      />

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedDepartment}
          onValueChange={(itemValue) => {
            setSelectedDepartment(itemValue)
            setSelectedCity('')
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
          selectedValue={selectedCity}
          onValueChange={(itemValue) => {
            setSelectedCity(itemValue)
          }}
          style={styles.picker}
          enabled={selectedDepartment !== ''}
        >
          <Picker.Item label="Select City" value="" />
          {getCityOptions(selectedDepartment).map((cityName) => (
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