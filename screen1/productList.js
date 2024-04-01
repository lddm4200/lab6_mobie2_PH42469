// ProductList.js
import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './action';

const ProductList = ({ products }) => {
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            {products.map(product => (
                <View key={product.id} style={styles.item}>
                    <Text>{product.name}</Text>
                    <Button title='Thêm vào Giỏ Hàng' onPress={() => dispatch(addItem(product))}/>
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

export default ProductList;
