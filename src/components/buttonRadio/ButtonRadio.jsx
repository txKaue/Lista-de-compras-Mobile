import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

const ButtonRadio = ({ value, onChangeText }) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerDeDentro}>
                <Text>Urgente</Text>
                <RadioButton
                    value="0"
                    status={value === '0' ? 'checked' : 'unchecked'}
                    onPress={() => onChangeText('0')}
                />
            </View>

            <View style={styles.containerDeDentro}>
                <Text>Normal</Text>
                <RadioButton
                    value="1"
                    status={value === '1' ? 'checked' : 'unchecked'}
                    onPress={() => onChangeText('1')}
                />
            </View>

            <View style={styles.containerDeDentro}>
                <Text>Opcional</Text>
                <RadioButton
                    value="2"
                    status={value === '2' ? 'checked' : 'unchecked'}
                    onPress={() => onChangeText('2')}
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