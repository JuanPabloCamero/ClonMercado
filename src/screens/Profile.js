import React from 'react'
import { Text, View, Image } from 'react-native'
import { stylesProfile } from '../styles/ProfileStyles'

const userProfile = {
  firstName: 'Juan Pablo',
  lastName: 'Camero',
  dateOfBirth: '19/08/2004', 
  photo: require('../assets/fotoPerfil.png'),
}

const isAgeValid = (dob) => {
  const [day, month, year] = dob.split('/').map(Number)
  const birthDate = new Date(year, month - 1, day)
  const today = new Date()
  let age = today.getFullYear() - birthDate.getFullYear()

  const monthDiff = today.getMonth() - birthDate.getMonth()
  const dayDiff = today.getDate() - birthDate.getDate()

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  const ageValid = age >= 18 && age <= 50;  return ageValid
}

const Profile = () => {
  const { firstName, lastName, dateOfBirth, photo } = userProfile

  return (
    <View style={stylesProfile.container}>
      <Image source={photo} style={stylesProfile.photo} />
      <View style={stylesProfile.infoContainer}>
        <Text style={stylesProfile.name}>{firstName} {lastName}</Text>
        {isAgeValid(dateOfBirth) ? (
          <Text style={stylesProfile.dob}>Date of Birth: {dateOfBirth}</Text>
        ) : (
          <Text style={stylesProfile.dob}>Date of Birth: Invalid</Text>
        )}
      </View>
    </View>
  )
}

export default Profile