import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';

const TextInputKaue = ({label}) => {
  const [nome, setNome] = useState("");

  return (
    <TextInput
      label={label}
      value={nome}
      onChangeText={nome => setNome(nome)}
      cursorColor="black"
      underlineColor="black"
      activeUnderlineColor="black"
      outlineColor="black"
      style={{
        backgroundColor:"#D3D3D3",
        margin:10,
        height:80
      }}
    />
  );
};

export default TextInputKaue;