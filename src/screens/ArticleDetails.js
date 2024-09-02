import React from 'react'
import { Text, View, Pressable, TextInput, Image, FlatList } from 'react-native'
import descriptionProductData from '../data/descriptionProductData'

//Styles
import {stylesCard} from '../styles/StylesCards'
import {styles} from '../styles/HomeStyles'
import {stylesDetails} from '../styles/StylesDetails'

// Icons
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const ArticleDetails = ({ productId, navigation }) => {

  const product = descriptionProductData.find(item => item.id === productId)

  if (!product) {
    return <Text>Producto no encontrado</Text>
  }

  let value = parseFloat(product.price.replace(/[^\d.-]/g, '')) || 0
  let question = ''
  let comment = ''
  let rating = null;
  let ratingComment = ''
  const questions = []
  const comments = []

  const handleAddQuestion = () => {
    if(question.length <= 100){
      questions.push(question)
      question = ''
    }else{
      alert('La pregunta debe contener máximo 100 caracteres')
    }
  }

  const handleAddComment = () =>{
    if(comment.length <= 200){
      comments.push(comment)
      comment = ''
    }else{
      alert('El comentario debe contener máximo 200 caracteres')
    }
  }

  const handleRatingSubmit = ()=>{
    if(rating && ratingComment.length <= 200){
      alert('Calificación enviada')
    }else{
      alert('Por favor califique el producto y escriba un comentario valido')
    }
  }

  return (
    <View style={stylesCard.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate('Menu')}>
          <Ionicons name='menu' size={30} color="black" />
        </Pressable>

        <View style={styles.searchContainer}>
          <AntDesign name="search1" size={20} color="gray" />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar en Mercado Libre"
          />
        </View>

        <Pressable onPress={() => navigation.navigate('ShoppingCart')}>
          <AntDesign name="shoppingcart" size={30} color="black" />
        </Pressable>
      </View>

      <View style={stylesDetails.container}>
        <View style={stylesDetails.header}>
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={30} color="black" />
          </Pressable>
          <Text style={stylesDetails.title}>Detalles del articulo</Text>
        </View>

        <View style={stylesDetails.itemContainer}>
          <Image source={product.image} style={stylesDetails.image}/>
          <View style={stylesDetails.infoContainer}>
            <Text style={stylesDetails.name}>{product.name}</Text>
            <Text style={stylesDetails.description}>{product.description}</Text>
            <Text>Valor:</Text>
            <TextInput style={stylesDetails.input}
              value={value.toString()}
              keyboardType='numeric'
              maxLength={8}
              onChangeText={(text) => {value=parseFloat(text)}}
            />
            <Text>Caracteristicas:</Text>
            <Text>{product.features}</Text>
            <Text>Medios de pago</Text>
            <Text>{product.paymentMethods.join(',')}</Text>
            <View style={stylesDetails.questionsContainer}>
              <Text>Preguntas al vendedor</Text>
              <TextInput style={stylesDetails.input}
                value={question}
                maxLength={100}
                onChangeText={(text) => {question = text}}
                placeholder='Escribe tu pregunta'
              />
              <Pressable style={stylesDetails.button} onPress={handleAddQuestion}>
                <Text>Enviar pregunta</Text>
              </Pressable>

              <FlatList
                data={questions}
                keyExtractor={(item, index) => index.toString()} 
                renderItem={({item}) => <Text>{item}</Text>}            
              />
            </View>
            
            <View style={stylesDetails.commentsContainer}>
              <Text>Comentario</Text>
              <TextInput style={stylesDetails.input}
                value={comment}
                maxLength={200}
                onChangeText={(text) => {comment = text}}
                placeholder='Escribe un comentario'
              />
              <Pressable style={stylesDetails.button} onPress={handleAddComment}>
                <Text>Enviar comentario</Text>
              </Pressable>

              <FlatList
                data={comments}
                keyExtractor={(item, index) => index.toString()} 
                renderItem={({item}) => <Text>{item}</Text>}            
              />
            </View>
            
            <View style={stylesDetails.ratingContainer}>
              <Text>Calificación</Text>
              {[1, 2, 3, 4, 5].map(star => (
              <Pressable key={star} onPress={() => { rating = star; }}>
                <MaterialIcons name="star" size={30} color={rating >= star ? "gold" : "gray"} />
              </Pressable>
              ))}
              {rating !== null && (
                <TextInput
                  style={stylesDetails.input}
                  value={ratingComment}
                  maxLength={200}
                  onChangeText={(text) => { ratingComment = text; }}
                  placeholder="Escribe un comentario sobre tu calificación"
                />
              )}
              <Pressable onPress={handleRatingSubmit} style={stylesDetails.button}>
                <Text>Enviar calificación</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ArticleDetails
