import { FlatList, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const Ticket = ({ticket}) => {

    const RenderTicket = ({ item }) => { console.log(ticket)
        return(
        <View style={styles.itemListContainer}>
          <Text >{item.item} </Text>
          <Text>  Cant:{item.QuantityTicketItem}</Text>
          <Button icon="lead-pencil" mode="" onPress={() => { HandleModal(item.name) }}>Edit</Button>
        </View>
      );

    
  return (
    <View>
      <FlatList
          data={ticket}
          keyExtractor={items => items.item}
          renderItem={RenderTicket} />
    </View>
  )
}
}
export default Ticket

const styles = StyleSheet.create({})