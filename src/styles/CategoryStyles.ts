import { StyleSheet } from 'react-native'

export const stylesCategory = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor:'#D2F0FA'
  },
  menu: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  buttonContainer: {
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#5F2EEA',
    backgroundColor: '#D2F0FA'
  },
  buttonText: {
    fontSize: 16,
    fontWeight:'bold',
    color: '#5F2EEA',
  },
  productItem: {
    flex: 1,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#D2F0FA',
    borderRadius: 10,
    shadowColor: '#D2F0FA',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  productImage: {
    width: '90%',
    height: 380,
    borderRadius: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  productList: {
    paddingBottom: 20,
  },
})