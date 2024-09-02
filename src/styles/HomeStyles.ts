import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5F2EEA', 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#3E53F7', 
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 10,
    flex: 1,
    marginHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 10,
    color: 'black',
  },
  body: {
    flex: 1,
    backgroundColor: 'white', 
  },

  cardContainer: {
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#f5f5f5',
    padding: 20,
    width: '100%',
    height: '15%',
  },

  ListContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  containerLogo: {
    alignItems: 'center',
    marginVertical: 20
  },

  Images: {
    width: 140,
    height: 100,
  },

})