import * as React from 'react';
import { TextInput } from 'react-native-paper';

const TextInputKaue = ({ label, value, onChangeText, keyboardType }) => {
    
    return (
        <TextInput
            label={label}
            value={value}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            cursorColor="black"
            underlineColor="black"
            activeUnderlineColor="black"
            outlineColor="black"
            style={{
                backgroundColor: "#D3D3D3",
                margin: 10,
                height: 80,
                width: "95%"
            }}
        />
    );
};

export default TextInputKaue;
