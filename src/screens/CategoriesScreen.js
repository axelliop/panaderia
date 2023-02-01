import { Button, FlatList, StyleSheet, Text, View } from 'react-native'

import { CATEGORIES } from '../data/Cateagories'
import CategoriesItem from '../components/CategoriesItem'
import React from 'react'

const CategoriesScreen = ({navigation}) => { /* SIEMPRE HAY QUE LLAMAR A LA PROP DE NAVIGATION, YA QUE DE ESA FORMA ESTOY INDICANDO A DONDE QUIERO NAVEGAR */

const handleSelectedCategory = item => {
  navigation.navigate('Products', {
    categoryId: item.id,
    title: item.title, /* le estaria pasando info como objetos, como si fuesen props */
  })
}

const renderCategoriesItem = ({item}) => (
  <View style={styles.categoriesContainer}>
  <CategoriesItem item={item} onSelected={handleSelectedCategory}/>
  </View>
)

  return (
    <View style={styles.container}>
      <FlatList data={CATEGORIES} renderItem={renderCategoriesItem} keyExtractor={item => item.id}/>
      <View>
      </View>


    </View>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({


        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        categoriesContainer: {
          padding: 10,
          height: 200,
          backgroundColor: 'red',
        }
})