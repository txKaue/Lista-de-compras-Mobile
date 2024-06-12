import { Avatar, Card, IconButton } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

const CardItem = ({ titulo, quantidade, categoria }) => (
  <Card.Title
    title={titulo}
    left={(props) => {
      if (categoria === 0) {
        return <Avatar.Icon {...props} style={styles.urgente} />;
      }
      else if (categoria === 1) {
        return <Avatar.Icon {...props} style={styles.normal} />;
      }
      else {
        return <Avatar.Icon {...props} style={styles.livre} />;
      }
    }}
    right={(props) => <Text style={styles.qtd}>x{quantidade}</Text>}
    style={styles.cardStyle}
    titleStyle={styles.estiloText}
  />
);

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
    borderWidth: 0,  // Definindo a largura da borda
    borderColor: 'black',  // Definindo a cor da borda
    borderRadius: 10,
    shadowColor: '#A9A9A9',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
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
  }
});

export default CardItem;