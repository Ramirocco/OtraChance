import { Button, TextInput } from 'react-native-paper';
import { StyleSheet, View } from 'react-native'

const Inputs = ({ OnHandleChangeItem, OnHandleChangeItemQuantity, AddToList, textItem, quantityItem }) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder='Producto...' mode="flat" style={styles.inputAddItem} onChangeText={OnHandleChangeItem} value={textItem} />
            <TextInput placeholder='Cant.' mode="flat" style={styles.inputAddItemQuantity} onChangeText={OnHandleChangeItemQuantity} value={quantityItem} />
            <Button icon="playlist-check" mode="outlined" onPress={AddToList}>Add</Button>
        </View >
    )
}

export default Inputs

const styles = StyleSheet.create({

    inputContainer: {
        flex: 1,
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    inputAddItemQuantity: {
        width: 100,
        margin: 10,

    },

    inputAddItem: {
        width: 140
    }
})