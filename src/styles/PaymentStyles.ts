import {StyleSheet} from 'react-native'

export const stylesPayment = StyleSheet.create({
  container: {
    flex: 1,
    alignContent:'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft:25,
    marginTop:10,
    color:'black'
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    marginLeft:20
  },
  thumbnail: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  input: {
    borderWidth: 2,
    borderColor: '#3E53F7',
    padding: 10,
    marginVertical: 10,
    borderRadius:25
  },
  picker: {
    height: 50,
    width: '100%',
    marginVertical: 10,
  },
  containerPagar:{
    alignContent:'center',
    alignItems:'center',
    
  },
  pagarButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#D2F0FA',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:50
  },
  formContainer: {
    marginTop: 16,
  },
  container2: {
    padding:20,
    marginBottom:110
  },
  text:{
    color:'black',
    fontWeight: 'bold'
  },
})