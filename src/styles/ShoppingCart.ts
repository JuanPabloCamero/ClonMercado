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
    color: '#000'
  },

  thumbnail: {
    width: 80,
    height: 80,
    marginRight: 10,
    color: '#000'

  },

  itemInfo: {
    flex: 1,
    color: '#000'
  },

  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000'
  },

  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    color: '#000'

  },

  quantityButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginHorizontal: 5,
    color: '#000'

  },

  quantityInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: 50,
    textAlign: 'center',
    color: '#000'

  },

  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#000'

  },
})
