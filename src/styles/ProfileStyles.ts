import { StyleSheet } from 'react-native'

export const stylesProfile = StyleSheet.create ({

  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#5F2EEA',
    alignContent: 'center'
  },
  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    height: 250, 
    overflow: 'hidden', 
  },
  photo: {
    width: 95,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    marginLeft: 26
  },
  infoContainer: {
    alignItems: 'center',
    alignContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'black'
  },
  dob: {
    fontSize: 16,
    color: 'black',
  },
  deleteButton: {
    backgroundColor: '#D2F0FA',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  deleteButtonText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
})