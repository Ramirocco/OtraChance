import { Button, TextInput } from 'react-native-paper';
import { Modal as NewModal, StyleSheet, Text, View } from 'react-native';

import React from 'react'

const ModalTicket = ({ modalTicketVisible,ticket,setTicket, QuantityTicketItem, PriceTicketItem,ItemPrice, HandleModalTicket, DeleteToTicket, ItemSelected, setModalTicketVisible ,OnHandleChangeBuyedPrice, OnHandleChangeBuyedQuantity, setItemPrice }) => {
    return (
        <NewModal animationType="fade" transparent={true} visible={modalTicketVisible} >
            <View style={styles.modalStyle}>
                <Text>Cuantos {ItemSelected} compraste?</Text>
                <TextInput placeholder='Cantidad' mode="flat" style={styles.inputAddItem} onChangeText={OnHandleChangeBuyedQuantity} value={QuantityTicketItem} />

                <Text>Que precio tiene {ItemSelected}?</Text>
                <TextInput placeholder='Precio' mode="flat" style={styles.inputAddItem} onChangeText={OnHandleChangeBuyedPrice} value={PriceTicketItem} />

                <Button icon="delete" mode="outlined" style={styles.ButtonDeleteItem} onPress={(item) => {
                    DeleteToTicket(ItemSelected)
                    setModalVisible(!modalVisible)
                }}>Cerrar</Button>

                <Button icon="cart-check" mode="outlined" style={styles.ButtonAddItem} onPress={() => {
                    setItemPrice(PriceTicketItem * QuantityTicketItem);
                    setTicket( PrevTicket => [... PrevTicket, { item: ItemSelected, PriceUnity: PriceTicketItem, QuantityTicketItem:QuantityTicketItem, PriceTotalItem: ItemPrice }]);
                    console.log(ticket); 
                setModalTicketVisible(!modalTicketVisible)
                }}>Agrregar al Ticket</Button>

            <Button icon="close-circle" mode="outlined" style={styles.ButtonClose} onPress={HandleModalTicket}>cerrar</Button>
        </View>
        </NewModal >
    )
}

export default ModalTicket
const styles = StyleSheet.create({

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
    },
    ButtonClose: {
        marginLeft: 20,
        backgroundColor: '#0000033',
    },
    ButtonDeleteItem: {
        marginLeft: 20,
        backgroundColor: '#e72424c2'

    },

});


