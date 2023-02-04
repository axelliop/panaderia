import CartScreen from "../screens/CartScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();


export default CartNavigator = () => {



  return (

      <Stack.Navigator initialRouteName="Categories" 
      screenOptions={{  /* screenOptions para todas las pantallas */
        headerShadowVisible: false, 
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}> 
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{ /* Options para una sola categoria */
          title: 'Carrito',
          
        }} /> 


      </Stack.Navigator>

  );
};
