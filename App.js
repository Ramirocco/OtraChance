import { Button, TextInput } from 'react-native-paper';
import { FlatList, Modal, StyleSheet, Text, View } from 'react-native';

import { useState } from 'react';

export default function App() {

  //variante de cada item
  const [textItem, setTextItem] = useState('');
  //variante de la lista
  const [list, setList] = useState(["manzana", "pera", "zanahora"]);
  //Modal
  const [modalVisible, setModalVisible] = useState(false);
  const [ItemSelected, setItemSelected] = useState('');
  const AddToCart = () => { setList(list => [...list, textItem]), setTextItem("") };
  const DeleteToList = () => { setList(list => [...list, textItem]), setTextItem("") };

  //guardado del cambio de tipeo en el item 
  const OnHandleChangeItem = e => { setTextItem(e) };
  //seteo de la lista, guardando valor anterior , mas el item actual y seteo el item en 0 para que no aparexca en el cuadro
  const AddToList = () => { setList(list => [...list, textItem]), setTextItem("") };

  const OpenModal = () => {setModalVisible(true);};


  {/*La data tiene la lista, esa lista esta compuesta por items, en la funcion RenderList da como parametro
        la data y desestructuras los items*/}
  const RenderList = ({ item }) => (
    <View style={styles.itemListContainer}>
      <Text style={styles.renderItem} >{item}</Text>
      <Button icon="lead-pencil" mode="" onPress={OpenModal}>Edit</Button>
    </View>
  );


  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Escriba producto' mode="flat" style={styles.inputAddItem} onChangeText={OnHandleChangeItem} value={textItem} />
        <Button icon="playlist-check" mode="outlined" style={styles.ButtonAddItem} onPress={AddToList}>Add</Button>
      </View >
      <View style={styles.listContainer}>
        {/* {list.map(item => (
          <View style={styles.itemListContainer}>
            <Text>{item}</Text>
            <Button icon="lead-pencil" mode="" onPress={OpenModule}>Edit</Button>
          </View>
        ))} */}
        {/*FlatList hace un .map a partir del "data",
         por eso se pone "item" que es es cada elemento del list o "data"*/}
        <FlatList
          data={list}
          keyExtractor={items => items.id}
          renderItem={RenderList} />
      </View>
      
      <Modal animationType="fade" transparent={true} modalVisible={modalVisible} >
        <View style={styles.modalStyle}>
          <Text></Text>
          <Button icon="delete" mode="outlined" style={styles.ButtonAddItem} onPress={DeleteToList}>Delete</Button>
          <Button icon="cart-check" mode="outlined" style={styles.ButtonAddItem} onPress={AddToCart}>Buyed</Button>
        </View>
      </Modal>
      
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
    alignItems: 'center',
  },

  itemListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    width: 350,
    marginVertical: 5,
    marginBottom: 20,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 4,
    elevation: 2
  },

  inputAddItem: {
    width: 200
  },

  ButtonAddItem: {
    marginLeft: 20,
    color: "yelow"
  },

  listContainer: { flex: 3 },

  modalStyle: {
    margin:20, 
    backgroundColor:"white",
    flex: 1,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth:1,
    borderRadius: 60,
    justifyContent: 'center'},

  renderItem: {
    fontSize: 20,
    fontStyle: "italic",
    textTransform: "uppercase"
  }
});
