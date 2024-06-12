import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import ButtonLess from "../buttonLess/ButtonLess";
import ButtonAdd from "../buttonAdd/ButtonAdd";


const QuantityInput = () => {

    const [qntd, setQntd] = useState("0");

    return(
        <View style={styles.container}>

            <Text>Quantidade</Text>
            <View style={styles.display}>
            
                <ButtonLess >

                </ButtonLess>

                <Text style={{fontSize:30}}>
                    {qntd}
                </Text>

                <ButtonAdd >

                </ButtonAdd>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },

    display:{
        flexDirection: 'row',
        alignItems: 'center',
    }
})

export default QuantityInput;