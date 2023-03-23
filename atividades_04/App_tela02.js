import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.bloquinhoPostagem}>
        <Icon name="github" size={60} style={styles.icone}/>

        <View style={styles.bloquinhoTexto}>
          <Text style={styles.h1}> The cats life </Text>
          <Text style={styles.p}> Scratch the furniture </Text>
        </View>
        
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
    marginTop: 40
  },

  bloquinhoPostagem:{
    flex: 1,
    backgroundColor: '#cab4ff',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginBottom: 700
  },
  bloquinhoTexto:{
    flex:1,
    textAlign: 'center'
  },
  h1: {
    fontSize: 30,
    fontWeight:'bold',
    textAlign: 'center'
  },

  p:{
    textAlign: 'center',
    color: 'gray'
  },
  icone:{
    margin: 10,
    width: 60,
    height:60,
    marginLeft: 40
  }
});
