import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

const ButtonRadio = () => {
  const [checked, setChecked] = React.useState('Urgente');

  return (
    <View style={styles.container}>
        <View style={styles.containerDeDentro}>
            <Text>Urgente</Text>
            <RadioButton
                value="0"
                status={ checked === '0' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('0')}
            />
        </View>

        <View style={styles.containerDeDentro}>
            <Text>Normal</Text>
            <RadioButton
                value="1"
                status={ checked === '1' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('1')}
            />
        </View>

        <View style={styles.containerDeDentro}>
            <Text>Opcional</Text>
            <RadioButton
                value="2"
                status={ checked === '2' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('2')}
            />
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    containerDeDentro: {
        flexDirection: 'column',
        margin: 20,
        alignItems: 'center'
    }
});

export default ButtonRadio;