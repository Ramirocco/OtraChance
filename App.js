import { Button, TextInput } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';

import { useState } from 'react';

export default function App() {

  const [textItem, setTextItem] = useState('');
  const [list, setList] = useState([]);

  const OnHandleChangeItem = e => { setTextItem(e) };
  
  const AddToList = () => { setList( prevState => [...prevState, textItem] ), setTextItem("") };
  
  const OpenModule = () => {};



  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Escriba producto' mode="flat" style={styles.inputAddItem} onChangeText={OnHandleChangeItem} value={textItem} />
        <Button icon="playlist-check" mode="outlined" style={styles.ButtonAddItem} onPress={AddToList}></Button>
      </View >
      <View style={styles.listContainer}>
        {list.map(item => (
          <View style={styles.itemListContainer}>
            <Text>{item}</Text>
            <Button icon="lead-pencil" mode="" onPress={OpenModule}>Edit</Button>
          </View>
        ))}
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

  itemListContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  inputAddItem: {
    width: 200
  },

  ButtonAddItem: {
    marginLeft: 20,
    color: "yelow"
  },

  listContainer: { flex: 3 }
});
