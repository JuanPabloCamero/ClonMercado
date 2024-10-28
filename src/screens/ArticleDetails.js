import React, { useState, useContext } from 'react';
import { Text, View, Pressable, TextInput, Image, FlatList, ScrollView, Alert } from 'react-native';
import descriptionProductData from '../data/descriptionProductData';
import { QuestionsContext } from '../context/QuestionContext';

// Styles
import { stylesCard } from '../styles/StylesCards';
import { styles } from '../styles/HomeStyles';
import { stylesDetails } from '../styles/StylesDetails';

// Icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ArticleDetails = ({ navigation }) => {
  const { state, dispatch } = useContext(QuestionsContext);
  const [question, setQuestion] = useState('');
  const [ratingData, setRatingData] = useState({});

  const handleAddQuestion = (productId) => {
    if (!question) {
      Alert.alert('Error', 'No puedes enviar una pregunta vacía');
      return;
    }
    if (question.length <= 100) {
      dispatch({
        type: 'ADD_QUESTION',
        payload: { productId, question },
      });
      setQuestion('');
    } else {
      Alert.alert('Error', 'La pregunta debe contener máximo 100 caracteres');
    }
  };

  const handleRatingSubmit = (productId) => {
    const productRating = ratingData[productId]?.rating;
    const productRatingComment = ratingData[productId]?.comment;

    if (productRating && productRatingComment.length <= 200) {
      dispatch({
        type: 'ADD_COMMENT',
        payload: { productId, comment: { rating: productRating, comment: productRatingComment } },
      });
      Alert.alert('Éxito', 'Calificación enviada');
    } else {
      Alert.alert('Error', 'Por favor califique el producto y escriba un comentario válido');
    }
  };

  const handleSetRating = (productId, star) => {
    setRatingData((prevData) => ({
      ...prevData,
      [productId]: {
        ...prevData[productId],
        rating: star,
      },
    }));
  };

  const handleSetRatingComment = (productId, comment) => {
    setRatingData((prevData) => ({
      ...prevData,
      [productId]: {
        ...prevData[productId],
        comment,
      },
    }));
  };

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
            placeholderTextColor={'#000'}
          />
        </View>

        <Pressable onPress={() => navigation.navigate('ShoppingCart')}>
          <AntDesign name="shoppingcart" size={30} color="black" />
        </Pressable>
      </View>

      <View style={stylesDetails.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </Pressable>
        <Text style={stylesDetails.title}>Detalles del artículo</Text>
      </View>

      <FlatList
        data={descriptionProductData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item: product }) => {
          const productRating = ratingData[product.id]?.rating || 0;
          const productRatingComment = ratingData[product.id]?.comment || '';
          const productQuestions = state.questions[product.id] || [];
          const productComments = state.comments[product.id] || [];

          return (
            <View style={stylesDetails.container}>
              <ScrollView>
                <View style={stylesDetails.itemContainer}>
                  <Image source={product.image} style={stylesDetails.image} />
                  <View style={stylesDetails.infoContainer}>
                    <Text style={stylesDetails.name}>{product.name}</Text>
                    <View style={stylesDetails.container2}>
                      <Text style={stylesDetails.description}>{product.description}</Text>
                      <Text style={stylesDetails.name}>Valor:</Text>
                      <Text style={stylesDetails.description}>{product.price}</Text>
                      <Text>{product.features}</Text>
                      <Text style={stylesDetails.name}>Medios de pago:</Text>
                      <Text style={stylesDetails.description}>{product.paymentMethods}</Text>
                    </View>

                    <View style={stylesDetails.questionsContainer}>
                      <Text style={stylesDetails.name}>Preguntas al vendedor</Text>
                      <TextInput
                        style={stylesDetails.input}
                        value={question}
                        maxLength={100}
                        onChangeText={setQuestion}
                        placeholder='Escribe tu pregunta'
                        placeholderTextColor={'#000'}
                      />
                      <Pressable style={stylesDetails.button} onPress={() => handleAddQuestion(product.id)}>
                        <Text style={stylesDetails.buttonText}>Enviar pregunta</Text>
                      </Pressable>

                      <FlatList
                        data={productQuestions}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => <Text>{item}</Text>}
                      />
                    </View>

                    <View style={stylesDetails.ratingContainer}>
                      <Text style={stylesDetails.name}>Calificación</Text>

                      <View style={stylesDetails.starsRow}>
                        {[1, 2, 3, 4, 5].map(star => (
                          <Pressable key={star} onPress={() => handleSetRating(product.id, star)}>
                            <MaterialIcons name="star" size={30} color={productRating >= star ? "gold" : "gray"} />
                          </Pressable>
                        ))}
                      </View>

                      {productRating !== null && (
                        <TextInput
                          style={stylesDetails.input2}
                          value={productRatingComment}
                          maxLength={200}
                          onChangeText={(text) => handleSetRatingComment(product.id, text)}
                          placeholder="Escribe un comentario sobre tu calificación"
                          placeholderTextColor={'#000'}
                        />
                      )}

                      <Pressable onPress={() => handleRatingSubmit(product.id)} style={stylesDetails.button}>
                        <Text style={stylesDetails.buttonText}>Enviar calificación</Text>
                      </Pressable>
                    </View>

                    <View style={stylesDetails.commentsContainer}>
                      <Text style={stylesDetails.name}>Comentarios y calificaciones</Text>

                      <FlatList
                        data={productComments}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) =>
                          <View style={stylesDetails.commentItem}>
                            <Text style={stylesDetails.text}>Rating: {item.rating} estrellas</Text>
                            <Text style={stylesDetails.text}>Comentario: {item.comment}</Text>
                          </View>
                        }
                      />
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ArticleDetails;