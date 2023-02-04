import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

import { PRODUCTS } from '../data/Products'
import ProductsItem from '../components/ProductsItem'

const ProductsScreen = ({navigation , route}) => {

  const newProducts = PRODUCTS.filter(product => product.category === route.params.categoryId) //--- FUNCION FILTRAR POR PRODUCTO
   

  const handleSelectedProduct = () => {
    navigation.navigate('Details', {
      name: item.name
    })
  }

  const renderProductItem = ({item}) => ( 

    //---------- FALTA ESTO -------------
    <ProductsItem item={item} onSelected={handleSelectedProduct} /> //con parentesis cuando voy a poner un componente, como si fuese un return

  ) 

useEffect(() => {
  console.log(route.params)
}, [])

 //-------- FLATLIST ME VA A MOSTRAR LA INFORMACION EN COLUMNAS, DATA PARA MOSTRARME LA DATA, RENDERITEM LO QUE QUIERO QUE RENDERICE Y KEYEXTRACTOR PARA QUE ME LA SEPARE POR KEY
  return (
    <View style={styles.container}>
      <FlatList data={newProducts}  renderItem={renderProductItem} keyExtractor={item => item.id}/> 
      <View style={styles.productsContainer}>
      <ProductsItem/>
      </View>
    </View>
  )
}

export default ProductsScreen

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    productsContainer: {
      height: 150
    }


})