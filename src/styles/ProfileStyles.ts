import { StyleSheet } from 'react-native'

export const stylesProfile = StyleSheet.create ({

  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#3E53F7',
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  infoContainer: {
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dob: {
    fontSize: 16,
    color: 'white',
  },
})