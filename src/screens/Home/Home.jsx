import React from "react";
import { View, Text } from "react-native";
import { initDatabase } from "../../services/databases/initDb";
import { getItems } from "../../services/databases/queries";

const Home = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        initDatabase();
        getItems();
    }, []);

    return (
        <View>
            {items.map(item => (
                <Text key={item.id}>{item.name} - {item.quantity}</Text>
            ))}
        </View>
    );
}

export default Home;