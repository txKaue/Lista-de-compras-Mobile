import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { addDefaults, initDatabase } from "../../services/databases/initDb";
import { getItems } from "../../services/databases/queries";
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { ButtonAdd, CardItem } from "../../components";
import { StyleSheet } from "react-native";

const Home = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {

        initDatabase();
        addDefaults();

        getItems()
        .then(items => {
            // Atualizar o estado 'items' com os itens recebidos
            setItems(items);
        })

    }, []);


    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                {items.length > 0 ? (
                    items.map(item => (
                        <CardItem key={item.id} titulo={item.name} quantidade={item.quantity} categoria={item.category} />
                    ))
                ) : (
                    <ActivityIndicator animating={true} color={MD2Colors.red800} />
                )}
            </View>
            <View style={styles.addButton}>
                <ButtonAdd/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    cardContainer: {
        marginTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start'
    },
    addButton: {
        position: 'absolute',
        right: 10,
        bottom: 10,
    },
});

export default Home;
