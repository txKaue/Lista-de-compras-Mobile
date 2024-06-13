import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';
import { TextInputKaue, ButtonRadio } from '../../components';
import { updateItem } from '../../services/databases/queries';

const DetailsScreen = ({ navigation }) => {
    const route = useRoute();
    const { id, nome, quantidade, descricao, categoria } = route.params;

    const [name, setName] = React.useState(nome);
    const [description, setDescription] = React.useState(descricao);
    const [quantity, setQuantity] = React.useState(quantidade);
    const [category, setCategory] = React.useState(categoria);

    const salvarDetalhes = () => {
        updateItem(id, name, quantity, description, category);
        console.log('Detalhes salvos!');
        navigation.navigate("Home");
    };

    return (
        <View style={styles.container}>
            <TextInputKaue label={nome} value={name} onChangeText={setName}></TextInputKaue>
            <TextInputKaue label={quantidade} value={quantity} keyboardType="numeric" onChangeText={setQuantity}></TextInputKaue>
            <TextInputKaue label={descricao} value={description} onChangeText={setDescription}></TextInputKaue>
            
            <View style={styles.containerDeDentro}>
                <ButtonRadio value={category} onChangeText={setCategory} />
            </View>

            <Button
                style={styles.button}
                mode="contained"
                onPress={salvarDetalhes}
            >
                Salvar
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: 16,
        marginBottom: 10,
    },
    button: {
        marginTop: 20,
    },
    containerDeDentro: {
        alignItems: 'center',
    },
});

export default DetailsScreen;
