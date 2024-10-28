import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3E53F7',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
      
    title: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
    },
      
    subtitle: {
        fontSize: 16,
        color: '#fff',
        marginBottom: 40,
    },
      
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 20,
        marginBottom: 20,
        color: '#000'
    },

    pickerContainer: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 20,
        justifyContent: 'center',
    },

    picker: {
        width: '100%',
        color: '#000',
        marginBottom: 10,
    },

    pickerItem: {
        fontSize: 16,
        color: '#000',
    },
      
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 20,
        marginBottom: 20,
    },
      
    passwordInput: {
        flex: 1,
        color: '#000'
    },
    
    forgotPassword: {
        color: '#fff',
        marginBottom: 40,
    },
      
    loginButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#D2F0FA',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
      
    loginButtonText: {
        color: '#000',
        fontSize: 18,
    },
      
    registerLink: {
        color: '#fff',
        marginTop: 20,
    },
    
    registerText: {
        fontStyle: 'italic',
        color: 'white',
        fontSize: 20,
        marginTop: 100
    },

    buttonMenu:{
        width: '60%',
        height: 30,
        backgroundColor: '#ffff',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        textAlign: 'center'
    },

    buttonMenutText:{
        color: '#000',
        fontSize: 18,
    },

    containerLogo: {
        alignItems: 'center',
        marginVertical: 20
    },

    Images: {
        width: 100,
        height: 100,
    },
})