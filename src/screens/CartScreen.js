import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { CART } from '../data/Cart'
import CartItem from '../components/CartItem'
import React from 'react'

const CartScreen = ({item, onDelete}) => {

    const total = 120

    const handleConfirmCart = () => {
        console.log('confirmar carrito')
    }

    const handleDeleteItem = () => {
        console.log('borrar elemento')
    }

    const renderCartItem = () => {
        <CartItem item={item} onDelete={handleDeleteItem}/>
    } 

//--------- FLATLIST OBLIGATORIOS

  return (
    <View style={styles.container}>
        <View style={styles.list}>
        <FlatList
        data={CART}
        keyExtractor={(item) => item.id}
        renderItem={renderCartItem}
        />
        </View>
        <View style={styles.footer}>
            <TouchableOpacity style={styles.confirm}
            onPress={handleConfirmCart}>
                
                <Text>Confirmar</Text>
                <View style={styles.total}>
                    <Text style={styles.text}>
                        total
                    </Text >
                    <Text style={styles.text}>${total}</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({


    footer: {
        flex: 1,
        padding: 12,
        backgroundColor: 'blue',
        paddingBottom: 120,
    },

    list: {
        flex: 1
    },

    footer: {
        padding: 12,
        borderTopColor: '#ccc',
        borderTopWidth: 1,
    },

    confirm: {
        backgroundColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    total: {
        flexDirection: 'row',
    },

    text: {
        
    }
})