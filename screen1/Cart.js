// Cart.js
import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from './action';

const Cart = () => {
    const cartItem = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Text style={{margin:10,fontSize:20}}>Cart</Text>
            {cartItem.map(item => (
                <View key={item.id} style={styles.item}>
                    <Text>{item.name} - {item.quantity}</Text>
                    <Button title='Xóa khỏi Giỏ Hàng' onPress={() => dispatch(removeItem(item))} />
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        marginBottom: 10,
    },
});

export default Cart;
