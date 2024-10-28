import React, { useContext, useEffect, useState } from 'react';
import { Text, View, Image, TextInput, Pressable, ScrollView } from 'react-native';
import { stylesProfile } from '../styles/ProfileStyles';
import { ProfileContext } from '../context/ProfileContext';

const validarEdad = (fechaNacimiento) => {
  const [dia, mes, año] = fechaNacimiento.split('/').map(Number);
  const fechaNacimientoDate = new Date(año, mes - 1, dia);
  const hoy = new Date();
  const edad = hoy.getFullYear() - fechaNacimientoDate.getFullYear();
  return edad >= 18 && edad <= 50;
};

const Perfil = () => {
  const { state } = useContext(ProfileContext);
  const [usuario, setUsuario] = useState('');
  const [correo, setCorreo] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');

  useEffect(() => {
    if (state.profile) {
      setUsuario(state.profile.usuario);
      setCorreo(state.profile.correo);
      setFechaNacimiento(state.profile.fechaNacimiento);
    }
  }, [state]);

  const actualizarPerfil = () => {
    if (!validarEdad(fechaNacimiento)) {
      alert('Edad no válida para el perfil');
      return;
    }

    alert('Perfil actualizado con éxito');
  };

  return (
    <ScrollView contentContainerStyle={stylesProfile.container}>
      <View style={stylesProfile.containerImage}>
        <Image source={require('../assets/fotoPerfil.png')} style={stylesProfile.photo} />
      </View>
      <Text style={stylesProfile.title}>Bienvenido, {usuario}!</Text>


      <TextInput
        style={stylesProfile.input}
        placeholder="Fecha de nacimiento (dd/mm/yyyy)"
        value={fechaNacimiento}
        onChangeText={setFechaNacimiento}
      />

      
    </ScrollView>
  );
};

export default Perfil;