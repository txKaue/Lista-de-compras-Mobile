import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { initDatabase } from "../../services/databases/initDb";
import { getItems, deleteItem } from "../../services/databases/queries"; // Certifique-se de importar deleteItem corretamente
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { ButtonCreate, CardItem, ButtonReload } from "../../components";

const Home = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    // Função para carregar os itens do banco de dados
    const fetchItems = async () => {
        try {
            console.log("Iniciando inicialização do banco de dados...");
            await initDatabase(); // Inicializa o banco de dados se necessário
            console.log("Banco de dados inicializado com sucesso.");

            console.log("Obtendo itens do banco de dados...");
            const itemsFromDB = await getItems(); // Obtém os itens do banco de dados
            console.log("Itens obtidos com sucesso:", itemsFromDB);

            setItems(itemsFromDB);
        } catch (error) {
            console.error("Erro ao inicializar banco de dados ou obter itens:", error);
        } finally {
            setLoading(false); // Marca o carregamento como concluído, independentemente do resultado
        }
    };

    // Atualiza os itens sempre que a tela for focada
    useFocusEffect(
        React.useCallback(() => {
            fetchItems();
        }, [])
    );

    const handleReload = () => {
        setLoading(true); // Define o estado de carregamento como verdadeiro novamente
        fetchItems(); // Recarrega os itens
    };

    const handleDeleteItem = async (id) => {
        try {
            await deleteItem(id); // Chama a função para deletar o item
            console.log('Item deletado com sucesso!');
            setItems(prevItems => prevItems.filter(item => item.id !== id)); // Atualiza o estado removendo o item deletado
        } catch (error) {
            console.error('Erro ao deletar item:', error);
            // Trate o erro de forma apropriada, se necessário
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                {loading ? (
                    <ActivityIndicator animating={true} color={MD2Colors.red800} />
                ) : items.length > 0 ? (
                    items.map(item => (
                        <CardItem key={item.id} id={item.id} titulo={item.name} quantidade={item.quantity} categoria={item.category} func={handleReload} descricao={item.description}/>
                    ))
                ) : (
                    <Text>Nenhum item encontrado</Text>
                )}
            </View>
            <View style={styles.addButton}>
                <ButtonReload handleReload={handleReload}/>
                <ButtonCreate/>
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
        flex:1,
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
        justifyContent: 'center'
    },
});

export default Home;
