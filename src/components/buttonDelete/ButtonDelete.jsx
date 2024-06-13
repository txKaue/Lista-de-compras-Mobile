import * as React from 'react';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { deleteItem } from '../../services/databases/queries';

const ButtonDelete = ({id, func}) => {
  const navigation = useNavigation();

  const handleDeleteItem = async  () => {
    try {
      await deleteItem(id);
      console.log('Item deletado com sucesso!');
      // Atualize o estado 'items' removendo o item excluído
      func()
    } catch (error) {
      console.error('Erro ao deletar item:', error);
      // Trate o erro de forma apropriada, se necessário
    }

  };

  return (
    <IconButton
      icon="trash-can-outline"
      iconColor="black"
      size={25}
      onPress={handleDeleteItem} 
      style={styles.button}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#A9A9A9",
  }

})



export default ButtonDelete;