import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { TextInputKaue, ButtonRadio, QuantityInput } from "../../components";
import { addItem } from "../../services/databases/queries";
import { useNavigation } from "@react-navigation/native";

const Create = () => {
    const navigation = useNavigation();

    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [quantity, setQuantity] = React.useState("");
    const [category, setCategory] = React.useState("");

    const handleCreateItem = () => {
        // Chame a função addItem passando os valores dos estados
        addItem(name, quantity, description, category);
        navigation.navigate('Home', { refresh: true });

    };

    return (
        <View style={styles.container}>
            <TextInputKaue label="Nome do item" value={name} onChangeText={setName} />
            <TextInputKaue label="Quantidade" value={quantity} keyboardType="numeric" onChangeText={setQuantity} />
            <TextInputKaue label="Descrição" value={description} onChangeText={setDescription} />
            <View style={styles.containerDeDentro}>
                <ButtonRadio value={category} onChangeText={setCategory} />
            </View>
            <TouchableOpacity onPress={handleCreateItem} style={styles.botao}>
                <Text style={styles.texto}>Criar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerDeDentro: {
        alignItems: 'center',
    },
    botao: {
        backgroundColor: 'blue',
        borderRadius: 10,
        width:"25%",
        height: "10%",
        position: 'absolute',
        right: 10,
        bottom: 10,
        justifyContent: "center",
      },
      texto: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
      },
});

export default Create;
