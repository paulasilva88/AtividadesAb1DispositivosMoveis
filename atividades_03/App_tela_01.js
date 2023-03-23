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

  p:{
    padding: 5,
    textAlign: 'justify'
  },
});
