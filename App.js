import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import store from './screen1/store'
import Cart from './screen1/Cart'
import ProductList from './screen1/productList'

const App = () => {
  const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
  ]
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <Provider store={store}>
        <View>
          <ProductList products={products} />
          <Cart />
        </View>
      </Provider></View>

  )
}

export default App

const styles = StyleSheet.create({})