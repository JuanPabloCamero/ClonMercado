import {StyleSheet} from 'react-native'

export const stylesCart = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    elevation: 2,
  },

  thumbnail: {
    width: 80,
    height: 80,
    marginRight: 10,
  },

  itemInfo: {
    flex: 1,
  },

  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },

  quantityButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginHorizontal: 5,
  },

  quantityInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: 50,
    textAlign: 'center',
  },

  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  },
})
