import React from 'react';
import { Avatar, Card } from 'react-native-paper';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import ButtonDelete from '../buttonDelete/ButtonDelete';
import { useNavigation } from '@react-navigation/native';

const CardItem = ({ id, titulo, quantidade, categoria, func, descricao }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Details', {
          id: id,  // Passando id diretamente, não como { id }
          nome: titulo,  // Passando titulo diretamente, não como { titulo }
          quantidade: quantidade,  // Passando quantidade diretamente
          descricao: descricao,  // Passando descricao diretamente
          categoria: categoria  // Passando categoria diretamente
        });
      }}
      style={styles.cardStyle}
    >
      <Card.Title
        title={titulo}
        left={(props) => {
          let avatarStyle = styles.livre;  // Padrão livre
          if (categoria === 0) {
            avatarStyle = styles.urgente;  // Urgente
          } else if (categoria === 1) {
            avatarStyle = styles.normal;  // Normal
          }
          return <Avatar.Icon {...props} style={avatarStyle} />;
        }}
        right={(props) => (
          <View style={styles.direita}>
            <Text style={styles.qtd}>x{quantidade}</Text>
            <ButtonDelete id={id} func={func} />
          </View>
        )}
        titleStyle={styles.estiloText}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  qtd: {
    color: 'black',
    fontSize: 20,
    paddingTop: 0,
    marginRight: 20,
    marginLeft: 20
  },
  cardStyle: {
    backgroundColor: '#DCDCDC',
    margin: 10,
    borderWidth: 0,
    borderColor: 'black',
    borderRadius: 10,
    shadowColor: '#A9A9A9',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    width: '95%'
  },
  estiloText: {
    color: 'black',
    fontSize: 20,
    paddingTop: 5,
  },
  urgente: {
    backgroundColor: "red",
  },
  normal: {
    backgroundColor: "orange",
  },
  livre: {
    backgroundColor: "green",
  },
  direita: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export default CardItem;
