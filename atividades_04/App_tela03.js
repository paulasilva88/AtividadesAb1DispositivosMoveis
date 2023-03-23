import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Feather';

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

      <View style={styles.bloquinhoPostagem1}>
        <Text style={styles.p1}> Sit on the laptop. Meow all night cat snacks, and attack like a vicious monster and scratch so owner bleeds and fart in owners food man running from cops stops to pet cats</Text>
        <Icon1 name="trash-o" size={30} style={styles.icone1}/>
        <Icon2 name="send" size={30} style={styles.icone1}/>
      </View>
      <View style={styles.bloquinhoPostagem1}>
        <Text style={styles.p1}> Sit on the laptop. Meow all night cat snacks, and attack like a vicious monster and scratch so owner bleeds and fart in owners food man running from cops stops to pet cats</Text>
        <Icon1 name="trash-o" size={30} style={styles.icone1}/>
        <Icon2 name="send" size={30} style={styles.icone1}/>
      </View>
      <View style={styles.bloquinhoPostagem1}>
        <Text style={styles.p1}> Sit on the laptop. Meow all night cat snacks, and attack like a vicious monster and scratch so owner bleeds and fart in owners food man running from cops stops to pet cats</Text>
        <Icon1 name="trash-o" size={30} style={styles.icone1}/>
        <Icon2 name="send" size={30} style={styles.icone1}/>
      </View>
      <View style={styles.bloquinhoPostagem1}>
        <Text style={styles.p1}> Sit on the laptop. Meow all night cat snacks, and attack like a vicious monster and scratch so owner bleeds and fart in owners food man running from cops stops to pet cats</Text>
        <Icon1 name="trash-o" size={30} style={styles.icone1}/>
        <Icon2 name="send" size={30} style={styles.icone1}/>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
    justifyItems: 'center',
    marginTop: 40
  },

  bloquinhoPostagem:{
    backgroundColor: '#cab4ff',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    height: 100,
    marginTop: 20
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
  },

  bloquinhoPostagem1:{
    backgroundColor: '#FFB6C1',
    borderRadius: 10,
    marginVertical:20,
    marginHorizontal:40,
    flexDirection: 'row',
    alignItems: 'center'
  },
  p1:{
    marginHorizontal: 20,
    marginVertical:10,
    textAlign: 'justify'
  },
  icone1:{
    margin: 3
  }
});
