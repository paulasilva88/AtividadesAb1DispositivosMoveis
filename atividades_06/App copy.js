import { StatusBar } from 'expo-status-bar';
import React, {useState} from "react";
import { StyleSheet,  TextInput, Text, View, Button } from 'react-native';

export default function App() {

  const [Situacao, setSituacao] = useState(true);
  const [textoBotao, setTextoBotao] = useState('APRESENTAR TEXTO');
  
  const aparecerTexto = () => {
    setSituacao(!Situacao);
  }

  const clicarBotao =  () => {
    setTextoBotao(!textoBotao);
  }

    if(Situacao == false){
      setTextoBotao('REMOVER TEXTO')
    } else if (Situacao =='true'){
      setTextoBotao('APRESENTAR TEXTO')
    }


  return (
    <View style={styles.container}>
      <Text>Situacao {Situacao}</Text>
      <Text>textoBotao {textoBotao}</Text>

      <Text>Digite um nome:</Text>
      <TextInput 
        multiline
        style={styles.input}
        placeholder = 'Ex.: Yoongi'
        onChangeText={setSituacao}
      />

      <Text>Digite a idade:</Text>
      <TextInput 
        multiline
        style={styles.input}
        placeholder = 'Ex.: 30'
        onChangeText={setSituacao}
      />

      <Button 
        title = "Apertar"
        onPress = {clicarBotao}
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
