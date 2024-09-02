import {StyleSheet} from 'react-native'

export const stylesPayment = StyleSheet.create({
  container: {
    flex: 1,
  },

  container1:{
    padding:20
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  itemContainer: {
    flexDirection: 'row',
    marginBottom: 20,
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
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
  },

  picker: {
    height: 50,
    width: '100%',
    marginVertical: 10,
  },

  pagarButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#D2F0FA',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
})