import { StyleSheet, Text, TextInput, View } from 'react-native';

import { Button } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Escriba producto' style={styles.inputAddItem} />
        <Button icon="playlist-check" mode="outlined" style={styles.ButtonAddItem} onPress={(e) =>
          //agregar el valor de e a un array
        {} }>Agregar
        </Button>
      </View >
      <View style={styles.listContainer}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 15,
    paddingTop: 10
  },

  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  inputAddItem: {
    width: 200,
    borderBottomColor: "black",
    borderBottomWidth: "1"
  },

  ButtonAddItem: {
    marginLeft: 20,
    color: "yelow"
  },
  listContainer:{ flex:3}
});
