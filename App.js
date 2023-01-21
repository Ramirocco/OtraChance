import { Button, TextInput } from 'react-native-paper';
import { FlatList, Modal, StyleSheet, Text, View } from 'react-native';

import { useState } from 'react';

export default function App() {

  //variante de cada item
  const [textItem, setTextItem] = useState('');
  //variante de la lista
  const [list, setList] = useState([]);
  //Modal
  const [modalVisible, setModalVisible] = useState(false);
  const [ItemSelected, setItemSelected] = useState('');
  const [wasBuyed, setwasBuyed] = useState(false);
  const [IdProduct, setIdProduct] = useState()
  
  const AddToCart = ()=> {list.map(item => {console.log(item);
    item.name === ItemSelected ? { ...item, wasBuyed: true } : null;
    console.log(item);
    console.log(item.wasBuyed)}
  ); return (item)};

  //revisar esto de arriba
  const ChangeWasBuyed = ()=> setwasBuyed ( )
  
  const DeleteToList = item => { 
    setList(list => list.filter(element => element.name !== item))
    setModalVisible(false); };

  //guardado del cambio de tipeo en el item 
  const OnHandleChangeItem = e =>  setTextItem(e) ;
  //seteo de la lista, guardando valor anterior , mas el item actual y seteo el item en 0 para que no aparexca en el cuadro
  const AddToList = () => { setIdProduct( list ? list.length + 2 : 1); setList(Prevlist => [...Prevlist, {name:textItem, wasBuyed: false , id: IdProduct} ]);setTextItem("")};

  const HandleModal = element => { 
    setModalVisible(!modalVisible)
    setItemSelected(element) }

  {/*La data tiene la lista, esa lista esta compuesta por items, en la funcion RenderList da como parametro
        la data y desestructuras los items*/}
  const RenderList = ({ item }) => (
    <View style={styles.itemListContainer}>
      <Text style= { wasBuyed ? styles.renderItemBuyed : styles.renderItem } >{item.name}</Text>
      <Text>{item.id}</Text>
      <Button icon="lead-pencil" mode="" onPress={ ()=>{HandleModal(item.name)} }>Edit</Button>
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
        {/*FlatList hace un .map a partir del "data", por eso se pone "item" que es es cada elemento del list o "data"*/}
        <FlatList
          data={list}
          keyExtractor={items => items.id}
          renderItem={RenderList}/>
      </View>
      <Modal animationType="fade" transparent={true} visible={modalVisible} >
        <View style={styles.modalStyle}>
          <Text>¿Compraste o Deseas eliminar el producto "{ItemSelected}"?</Text>
          
          <Button icon="delete" mode="outlined" style={styles.ButtonAddItem} onPress={(item) => { 
            DeleteToList(ItemSelected)
            setModalVisible(!modalVisible)}}>Delete</Button>
            
          <Button icon="cart-check" mode="outlined" style={styles.ButtonAddItem} onPress={()=> 
            {AddToCart(ItemSelected)
            setModalVisible(!modalVisible)}}>Buyed</Button>
          
          <Button icon="cart-check" mode="outlined" style={styles.ButtonAddItem} onPress={ HandleModal }>cerrar</Button>
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
    margin: 30,
    backgroundColor: "white",
    flex: 1,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 60,
    justifyContent: 'center'
  },

  renderItem: {
    fontSize: 20,
    fontStyle: "italic",
    textTransform: "uppercase"
  },

  renderItemBuyed: {
    fontSize: 20,
    fontStyle: "italic",
    textTransform: "uppercase",
    color: "green"
  }
});
