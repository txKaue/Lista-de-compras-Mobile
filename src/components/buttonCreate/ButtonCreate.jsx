import * as React from 'react';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const ButtonAdd = () => {
  const navigation = useNavigation();

  return (
    <IconButton
      icon="plus"
      iconColor="blue"
      size={35}
      onPress={() => navigation.navigate("Create")} 
    />
  );
};



export default ButtonAdd;