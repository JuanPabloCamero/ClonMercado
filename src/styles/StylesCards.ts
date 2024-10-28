import {StyleSheet} from 'react-native'

export const stylesCard = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor: '#fff',
      marginBottom: 15,
  },
  cardContainer: {
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#f5f5f5',
    padding: 10,
    margin: 5,
    width: '48%', 
    height: 200, 
  },

  ListContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  Card: {
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#D2F0FA', 
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: '94%',
    marginLeft: 14,
    marginTop: 10,
    color:'#000'
  },

  cardHeader: {
    marginBottom: 10,
    alignItems: 'center',
  },

  productInfo: {
    fontSize: 14,
    flex: 1,
    marginHorizontal: 10,
    color:'#000'
  },

  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color:'#000'
  },

  productCategory: {
    fontSize: 12,
    fontStyle: 'italic',
    marginBottom: 5,
    color:'#000'
  },

  Images: {
    width: 80, 
    height: 80,
    resizeMode: 'contain',
  },

  price:{
    fontWeight: 'bold',
    color:'#000'
  }
})