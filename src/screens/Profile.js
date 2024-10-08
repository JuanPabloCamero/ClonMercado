import React, { useContext, useEffect, useState } from 'react';
import { Text, View, Image, TextInput, Pressable, ScrollView } from 'react-native';
import { stylesProfile } from '../styles/ProfileStyles';
import { ProfileContext } from '../context/ProfileContext';

const isAgeValid = (dob) => {
  const [day, month, year] = dob.split('/').map(Number);
  const birthDate = new Date(year, month - 1, day);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();

  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age >= 18 && age <= 50;
};

const Profile = () => {
  const { state, dispatch } = useContext(ProfileContext);
  const [newProfile, setNewProfile] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    photo: require('../assets/fotoPerfil.png'),
  });

  useEffect(()=>{
    console.log('Estado actualiazado', state)
  },[state])

  const handleAddProfile = () => {
    if (newProfile.firstName && newProfile.lastName && newProfile.dateOfBirth) {
      dispatch({ type: 'ADD_PROFILE', payload: newProfile });
      setNewProfile({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        photo: require('../assets/fotoPerfil.png'),
      });
    }
  };

  const handleInputChange = (field, value) => {
    setNewProfile({
      ...newProfile,
      [field]: value,
    });
  };

  const handleDeleteProfile = (index) => {
    dispatch({ type: 'DELETE_PROFILE', payload: index });
  };

  return (
    <View style={stylesProfile.container}>
      <ScrollView>
        {state.profiles.map((profile, index) => (
          <View key={index} style={stylesProfile.profileCard}>
            <Image source={profile.photo} style={stylesProfile.photo} />
            <View style={stylesProfile.infoContainer}>
              <Text style={stylesProfile.name}>
                {profile.firstName} {profile.lastName}
              </Text>
              {isAgeValid(profile.dateOfBirth) ? (
                <Text style={stylesProfile.dob}>Date of Birth: {profile.dateOfBirth}</Text>
              ) : (
                <Text style={stylesProfile.dob}>Date of Birth: Invalid</Text>
              )}
            </View>
            <Pressable
              style={stylesProfile.deleteButton}
              onPress={() => handleDeleteProfile(index)}
            >
              <Text style={stylesProfile.deleteButtonText}>Delete</Text>
            </Pressable>
          </View>
        ))}

        <View style={stylesProfile.form}>
          <TextInput
            style={stylesProfile.input}
            placeholder="First Name"
            placeholderTextColor='white'
            value={newProfile.firstName}
            onChangeText={(value) => handleInputChange('firstName', value)}
          />
          <TextInput
            style={stylesProfile.input}
            placeholder="Last Name"
            placeholderTextColor='white'
            value={newProfile.lastName}
            onChangeText={(value) => handleInputChange('lastName', value)}
          />
          <TextInput
            style={stylesProfile.input}
            placeholder="Date of Birth (dd/mm/yyyy)"
            placeholderTextColor='white'
            value={newProfile.dateOfBirth}
            onChangeText={(value) => handleInputChange('dateOfBirth', value)}
          />
          <Pressable onPress={handleAddProfile} style={stylesProfile.deleteButton}>
            <Text style={stylesProfile.deleteButtonText}>Add new user</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;