import { COLORS } from "../constants/Colors";
import CategoriesScreen from "../screens/CategoriesScreen";
import DetailsScreen from "../screens/DetailsScreen";
import { NavigationContainer } from "@react-navigation/native";
import ProductsScreen from "../screens/ProductsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";

const Stack = createNativeStackNavigator();


export default ShopNavigator = () => {



  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Categories" screenOptions={{  /* screenOptions para todas las pantallas */
        headerStyle: {backgroundColor: COLORS.primary }, 
        headerTintColor: COLORS.secondary,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}> 
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{ /* Options para una sola categoria */
          title: 'Mi panaderia',
          
        }} /> 
        <Stack.Screen name="Products" component={ProductsScreen} options={({route}) => ({
          title: route.params.title
        })}/>
        <Stack.Screen name="Details" component={DetailsScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};
