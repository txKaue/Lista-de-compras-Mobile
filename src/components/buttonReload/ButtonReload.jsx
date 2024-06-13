import * as React from 'react';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const ButtonReload = ({handleReload}) => {
  const navigation = useNavigation();

  return (
    <IconButton
      icon="reload"
      iconColor="blue"
      size={35}
      onPress={() => handleReload()} 
    />
  );
};



export default ButtonReload;