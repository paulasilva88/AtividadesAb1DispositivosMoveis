import { StatusBar } from 'expo-status-bar';
import React, {useState} from "react";
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [ligar, setLigar] = useState(true);
  const [ligar2, setLigar2] = useState(true);

  const clicarBotao = () => {
    setLigar(!ligar);
  }

  const clicarBotao2 = () => {
    setLigar2(!ligar2);
  }

  return (
    <View style={styles.container}>
      {
        ligar ?
        <Text></Text>
        : 
        <Text> Aqui tem um texto que desaprece!</Text>
      }
      <Button
        title = {'Apertar'}
        onPress = {clicarBotao}
      />

      <StatusBar style="auto" />

      {
        ligar2 ?
        <Text></Text>
        : 
        <Text> Aqui tem um texto que desaparece!</Text>
      }
      <Button
        title = {'Apertar'}
        onPress = {clicarBotao2}
      />

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
});
