import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View> 
        <Text style={styles.h1}>Título da aplicação</Text>
      </View>

      <Text style={styles.p}>
        Sit on the laptop. Meow all night cat snacks, and attack like a 
        vicious monster and scratch so owner bleeds and fart in owners food 
        man running from cops stops to pet cats, goes to jail chase ball of 
        string. Leave fur on owners clothes lick the plastic bag.</Text>

      <View style={styles.body}>
        <Text style={styles.h2}>Postagem Simples</Text>
        <Text style={styles.p}> Meow all night cat snacks, and attack like a vicious monster </Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.h2}>Postagem Simples</Text>
        <Text style={styles.p}> Meow all night cat snacks, and attack like a vicious monster </Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.h2}>Postagem Simples</Text>
        <Text style={styles.p}> Meow all night cat snacks, and attack like a vicious monster </Text>
      </View>

      <View style={styles.areaFoto}>
        <Text > Area para foto</Text>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30
  },

  h1:{
    fontSize: 40,
    fontWeight: 'bold',
    margin: 30
  },

  h2:{
   
    fontSize: 30,
    fontWeight: 'bold',
    
  },

  body:{
    flex:1,
    alignContent: 'flex-start',
    justifyItems: 'flex-start',
    marginTop: 20,
    maxHeight: 80
   
  },

  p:{
    padding: 5,
    textAlign: 'justify'
  },

  areaFoto:{
    flex: 1,
    backgroundColor: 'red',
    width: '100%',
    alignItems: 'center', 
    justifyContent: 'center',
    height: 1000,
  },
});
