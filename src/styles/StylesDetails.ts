import { StyleSheet } from 'react-native'

export const stylesDetails = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginRight:100
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#D2F0FA', 
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderRadius: 10,
    paddingTop:16,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom:5
  },
  description: {
    fontSize: 16,
    color: '#000',
    marginBottom: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 50,
    padding: 10,
    margin:43,
    marginBottom: 30,
    backgroundColor: '#fff',
    marginRight:50,
    marginLeft:3
  },
  input2: {
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 50,
    padding: 10,
    margin:10,
    marginBottom: 30,
    backgroundColor: '#fff',
    color:'#000'
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#3E53F7',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:50
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
  },
  questionsContainer: {
    marginBottom: 16,
  },
  commentsContainer: {
    marginBottom: 16,
  },
  ratingContainer: {
    marginTop: 5,
    alignItems: 'center',
    marginRight:70,
  },
  starsRow: {
    flexDirection: 'row', 
    marginVertical: 10,
  },
  container2:{
    marginTop:15,
    marginRight:60
  },
  text:{
    color:'#000',
    fontSize: 17
  }
})