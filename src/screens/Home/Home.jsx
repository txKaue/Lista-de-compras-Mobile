import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { addDefaults, initDatabase } from "../../services/databases/initDb";
import { getItems } from "../../services/databases/queries";
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { CardItem } from "../../components";

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
        <View>
            {items.length > 0 ? (
                items.map(item => (
                    <CardItem titulo={item.name} quantidade={item.quantity}>

                    </CardItem>
                ))
            ) : (
                <ActivityIndicator animating={true} color={MD2Colors.red800} />
            )}
        </View>
    );
}

export default Home;
