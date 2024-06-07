import { Avatar, Card, IconButton } from 'react-native-paper';

const CardItem = ({titulo, quantidade}) => (
    <Card.Title
      title={titulo}
      subtitle={quantidade}
      left={(props) => <Avatar.Icon {...props} icon="folder" />}
      right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
      
    />
  );
  
  export default CardItem;