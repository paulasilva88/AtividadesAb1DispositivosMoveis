import { StatusBar } from 'expo-status-bar';
import React, {useState} from "react";
import { Button, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Feather';


export default function App() {

  const [ligar, setLigar] = useState(true);
  const [texto, setTexto] = useState('ATIVAR');

  const clicarBotao = () => {
    setLigar(!ligar);

    if(ligar == false){
      setTexto('ATIVAR')
    } else if (ligar ==true){
      setTexto('DESATIVAR')
    }
  }

  return (

    <View style={styles.container}>
      <Button
        title = {texto}
        onPress = {clicarBotao}
      />

    {
      ligar ?
      <Text></Text>
      : 
      <View style={styles.bloquinhoPostagem}>
        <Text style={styles.p}> Sit on the laptop. Meow all night cat snacks, and attack like a vicious monster and scratch so owner
        bleeds and fart in owners food man running from cops stops to pet cats</Text>
        <Icon name="trash-o" size={30} style={styles.icone}/>
        <Icon2 name="send" size={30} style={styles.icone}/>

      </View>
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

  bloquinhoPostagem:{
    backgroundColor: 'pink',
    borderRadius: 10,
    margin:40,
    flexDirection: 'row',
    alignItems: 'center'
  },
  p:{
    marginHorizontal: 20,
    marginVertical:10,
    textAlign: 'justify'
  },
  icone:{
    margin: 3
  }
});
