import OrdersScreen from "../screens/OrdersScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();


export default OrdersNavigator = () => {



  return (

      <Stack.Navigator initialRouteName="Orders" screenOptions={{  /* screenOptions para todas las pantallas */
        headerShadowVisible: false, 
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}> 
        <Stack.Screen
          name="Orders"
          component={OrdersScreen}
          options={{ /* Options para una sola categoria */
          title: 'Ordenes',
          
        }} /> 


      </Stack.Navigator>

  );
};
