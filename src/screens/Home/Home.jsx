import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { addDefaults, initDatabase } from "../../services/databases/initDb";
import { getItems } from "../../services/databases/queries";

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
                    <Text key={item.id}>{item.name} - {item.quantity}</Text>
                ))
            ) : (
                <Text>Carregando...</Text>
            )}
        </View>
    );
}

export default Home;
