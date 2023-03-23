import { StatusBar } from 'expo-status-bar';
import React, {useState} from "react";
import { StyleSheet,  TextInput, Text, View } from 'react-native';

export default function App() {

  const [Situacao, setSituacao] = useState(true);
  
  const aparecerTexto = () => {
    setSituacao(!Situacao);
  }

  return (
    <View style={styles.container}>

      <TextInput 
        multiline
        style={styles.input}
        placeholder = 'Texto'
        onChangeText={setSituacao}
      />

      {
        Situacao!='Ligado' ?
        <Text></Text>
        : 
        <Text> Apresentando o Texto!</Text>
      }

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderWidth:1,
    borderColor: '#777',
    padding: 8,
    margin:10,
    width:200
  },
});
