import React, { useState, useContext } from 'react';
import { Alert, Text, View, TextInput, Pressable, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from '../styles/GlobalStyles';
import { AuthContext } from '../context/AuthContext';

const Login = ({ navigation }) => {
    const [usuario, setUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');
    const { state, dispatch } = useContext(AuthContext);

    const validarUsuario = (usuario) => usuario.length <= 10;

    const validarContraseña = (contraseña) => {
        const regexContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regexContraseña.test(contraseña);
    };

    const verificarUsuarioRegistrado = (usuario) => {
        return state.registeredUsers && state.registeredUsers.some(u => u.usuario === usuario);
    };

    const handleLogin = () => {
        if (!validarUsuario(usuario)) {
            Alert.alert('Error', 'El nombre de usuario debe contener máximo 10 caracteres');
            return;
        }

        if (!validarContraseña(contraseña)) {
            Alert.alert('Error', 'La contraseña debe tener al menos 8 caracteres, incluyendo letras mayúsculas, minúsculas, números y caracteres especiales');
            return;
        }

        if (!verificarUsuarioRegistrado(usuario)) {
            Alert.alert('Usuario no registrado', 'Por favor regístrate antes de iniciar sesión.');
            navigation.navigate('Registers');
            return;
        }

        const usuarioRegistrado = state.registeredUsers.find(u => u.usuario === usuario);
        if (usuarioRegistrado.contraseña !== contraseña) {
            Alert.alert('Error', 'Contraseña incorrecta');
            return;
        }

        dispatch({ type: 'LOGIN', payload: { usuario } });

        Alert.alert('Inicio de sesión exitoso', `Bienvenido ${usuario}`);
        navigation.navigate('Home');
        setUsuario('');
        setContraseña('');
    };

    return (
        <View style={styles.container}>
            <Image source={require('../assets/user.png')} />
            <Text style={styles.title}>Bienvenido</Text>
            <Text style={styles.subtitle}>Inicia sesión para continuar</Text>

            <TextInput
                style={styles.input}
                placeholder="Usuario"
                placeholderTextColor={'#000'}
                value={usuario}
                onChangeText={setUsuario}
                maxLength={10}
                autoCapitalize="none"
            />

            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.passwordInput}
                    placeholder="Contraseña"
                    placeholderTextColor={'#000'}
                    value={contraseña}
                    onChangeText={setContraseña}
                    secureTextEntry
                    maxLength={8}
                />
                <Icon name="eye" size={20} color="gray" />
            </View>

            <Pressable style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>INICIAR SESIÓN</Text>
            </Pressable>

            <Pressable style={styles.registerLink} onPress={() => navigation.navigate('Registers')}>
                <Text style={styles.registerText}>Registrar nuevo usuario</Text>
            </Pressable>
        </View>
    );
};

export default Login;