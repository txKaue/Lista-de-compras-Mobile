import * as React from 'react';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const ButtonLess = ({number}) => {
  const navigation = useNavigation();

  return (
    <IconButton
      icon="minus"
      iconColor="blue"
      size={35}
      onPress={() => number-=1} 
    />
  );
};



export default ButtonLess;