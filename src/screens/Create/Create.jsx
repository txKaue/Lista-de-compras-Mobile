import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {TextInputKaue, ButtonRadio, QuantityInput } from "../../components";

const Create = () => {
    return (
        <View >
            <TextInputKaue label="Nome do item"/>
            <TextInputKaue label="Descrição"/>
            <View style={styles.containerDeDentro}>
                <ButtonRadio></ButtonRadio>
                <QuantityInput></QuantityInput>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        
    },
    containerDeDentro: {
        alignItems: 'center',
    },
});

export default Create;