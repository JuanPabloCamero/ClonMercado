import React from 'react'
import { Alert, Text, View, TextInput,Pressable,Image,} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { styles } from '../styles/GlobalStyles'

const Login = ({ navigation }) => {
    let username = ''
    let password = ''
    let usernameInput = null
    let passwordInput = null

    const validateUsername = (username) => {
        return username.length <= 10
    }

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        return passwordRegex.test(password)
    }

    const handleLogin = () => {
        if (!validateUsername(username)) {
            Alert.alert('Error', 'El nombre del usuario debe contener máximo 10 caracteres')
            return
        }

        if (!validatePassword(password)) {
            Alert.alert('Error', 'La contraseña debe tener al menos 8 caracteres, incluyendo letras mayúsculas, minúsculas, números y caracteres especiales')
            return
        }

        Alert.alert('Inicio de sesión exitoso', `Bienvenido ${username}`)
        navigation.navigate('Home')

        username = ''
        password = ''

        if (usernameInput && passwordInput) {
            usernameInput.clear()
            passwordInput.clear()
        }
    }

    return (
        <View style={styles.container}>
            <Image source={require('../assets/user.png')} />
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>Sign in to continue</Text>
        
            <TextInput
                style={styles.input}
                placeholder="Username"
                defaultValue={username}
                onChangeText={(text) => username = text}
                maxLength={10}
                autoCapitalize="none"
            />

            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.passwordInput}
                    placeholder="Password"
                    defaultValue={password}
                    onChangeText={(text) => password = text}
                    secureTextEntry
                    maxLength={8}
                />
                <Icon name="eye" size={20} color="gray" />
            </View>

            <Pressable style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>LOGIN</Text>
            </Pressable>

            <Pressable style={styles.registerLink} onPress={() => navigation.navigate('Registers')}>
                <Text style={styles.registerText}>Register new user</Text>
            </Pressable>
        </View>
    )
}

export default Login