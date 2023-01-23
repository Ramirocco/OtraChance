import { Modal as NewModal, StyleSheet, Text, View } from 'react-native';

import { Button } from 'react-native-paper';
import React from 'react'

const Modal = ({modalVisible ,  HandleModal,HandleModalTicket, DeleteToList, AddToCart, ItemSelected, setModalVisible}) => {
  return (
    <NewModal animationType="fade" transparent={true} visible={modalVisible} >
        <View style={styles.modalStyle}>
          <Text>¿Compraste o Deseas eliminar el producto "{ItemSelected}"?</Text>

          <Button icon="delete" mode="outlined" style={styles.ButtonDeleteItem} onPress={(item) => {
            DeleteToList(ItemSelected)
            setModalVisible(!modalVisible)
          }}>Delete</Button>

          <Button icon="cart-check" mode="outlined" style={styles.ButtonAddItem} onPress={() => {
            setModalVisible(!modalVisible)
            HandleModalTicket(ItemSelected)
          }}>Buyed</Button>

          <Button icon="close-circle" mode="outlined" style={styles.ButtonClose}  onPress={HandleModal}>cerrar</Button>
        </View>
      </NewModal>
  )
}

export default Modal
const styles = StyleSheet.create( {

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
      ButtonAddItem: {
        marginLeft: 20,
        backgroundColor: '#43ff64d9'
      } ,
      ButtonClose: {
        marginLeft: 20,
        backgroundColor: '#0000033',
      } ,
      ButtonDeleteItem: {
        marginLeft: 20,
        backgroundColor:'#e72424c2'

      } ,

    });


