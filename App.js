import * as React from 'react';

import { FlatList, StyleSheet, Text, View } from 'react-native';

import { Button } from 'react-native-paper';
import Inputs from './src/components/Inputs.js';
import Modal from './src/components/Modal.js';
import ModalTicket from './src/components/ModalTicket.js';
import Ticket from './src/components/Ticket.js';
import { useState } from 'react';

export default function App() {

  //variante de cada item
  const [textItem, setTextItem] = useState('');
  const [quantityItem, setquantityItem] = useState('');
  const [QuantityTicketItem, setQuantityTicketItem] = useState();

  //variante de la lista
  const [list, setList] = useState([]);
  const [ticket, setTicket] = useState([]);
  const [ItemPrice, setItemPrice] = useState();
  //Modal
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTicketVisible, setModalTicketVisible] = useState(false);
  const [ItemSelected, setItemSelected] = useState('');
  const [IdProduct, setIdProduct] = useState(-1);

  const [selectedValue, setSelectedValue] = useState("")
  //MODAL ABRE Y EXPORTA PROPS
  const AddToCart = () => list.map(item => {
    if (item.name === ItemSelected) {
      item.iswasBuyed = true;
      console.log(item);
      AddToTicket(ItemSelected)
    };
  })


  const DeleteToList = item => {
    setList(list => list.filter(element => element.name !== item))
    setModalVisible(false);
  };
  const DeleteToTicket = item => {
    setTicket(Ticket => Ticket.filter(element => element.name !== item))
    setModalVisible(false);
  };

  //seteo de la lista, guardando valor anterior , mas el item actual y seteo el item en 0 para que no aparexca en el cuadro
  const AddToList = () => { 
    setIdProduct(list.length); 
    console.log(list); 
    setList(list => [...list, { name: textItem, iswasBuyed: false, id: IdProduct, quantityItem: quantityItem } ]); 
    setTextItem(""); 
    setquantityItem(""); 
    console.log(list) };

  const HandleModal = element => {
    setModalVisible(!modalVisible)
    setItemSelected(element)
  };
  const HandleModalTicket = (ItemSelected )=> {
    setModalTicketVisible(!modalTicketVisible)
    setItemSelected(ItemSelected)
  }
  //CIERRO MODAL


  //guardado del cambio de tipeo en el item 
  const OnHandleChangeItem = e => setTextItem(e);
  const OnHandleChangeItemQuantity = e => setquantityItem(parseInt(e));

  const OnHandleChangeBuyedPrice  = e => setPriceTicketItem(parseInt(e));
  const OnHandleChangeBuyedQuantity = e => setQuantityTicketItem(parseInt(e));


  const [PriceTicketItem, setPriceTicketItem] = useState()

  
  {/*La data tiene la lista, esa lista esta compuesta por items, en la funcion RenderList da como parametro
        la data y desestructuras los items*/}
  const RenderList = ({ item }) => (
    <View style={styles.itemListContainer}>
      <Text style={item.iswasBuyed ? styles.renderItemBuyed : styles.renderItem} >{item.name}  </Text>
      <Text>  Cant:{item.quantityItem}</Text>
      <Button icon="lead-pencil" mode="" onPress={() => { HandleModal(item.name) }}>Edit</Button>
    </View>
  );

  const cantidad = "cantidad";

  return (
    <View style={styles.container}>
      <Text>Shopping List</Text>
      <Inputs OnHandleChangeItem={OnHandleChangeItem} OnHandleChangeItemQuantity={OnHandleChangeItemQuantity} AddToList={AddToList} textItem={textItem} quantityItem={quantityItem} />
      <View style={styles.listContainer}>
        {/*FlatList hace un .map a partir del "data", por eso se pone "item" que es es cada elemento del list o "data"*/}
        <FlatList
          data={list}
          keyExtractor={items => items.name}
          renderItem={RenderList} />
      </View>
      <Ticket ticket={ticket} />
      <ModalTicket setItemPrice={setItemPrice} OnHandleChangeBuyedQuantity={OnHandleChangeBuyedQuantity} OnHandleChangeBuyedPrice={OnHandleChangeBuyedPrice} ItemPrice={ItemPrice}  setModalTicketVisible={setModalTicketVisible} setItemPrice={setItemPrice}  ticket={ticket} modalTicketVisible={modalTicketVisible}  HandleModalTicket={HandleModalTicket} DeleteToTicket={DeleteToTicket}  ItemSelected={ItemSelected} setTicket={setTicket} QuantityTicketItem={QuantityTicketItem}  PriceTicketItem={PriceTicketItem} />
      <Modal setModalVisible={setModalVisible} ItemSelected={ItemSelected} AddToCart={AddToCart} DeleteToList={DeleteToList} modalVisible={modalVisible} HandleModal={HandleModal} HandleModalTicket={HandleModalTicket}/>
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


  listStyle: {
    backgroundColor: "yellow",
    width: 50,
    padding: 0,
    margin: 0
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
  listContainer: { flex: 3 },
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
