import * as React from 'react';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const ButtonAdd = ({number}) => {
  const navigation = useNavigation();

  return (
    <IconButton
      icon="plus"
      iconColor="blue"
      size={35}
      onPress={() => number+=1} 
    />
  );
};



export default ButtonAdd;