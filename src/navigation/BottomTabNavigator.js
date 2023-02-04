import { StyleSheet, Text, View } from "react-native";

import CartNavigator from "./CartNavigator";
import IonIcons from "@expo/vector-icons/Ionicons"
import OrdersNavigator from "./OrdersNavigator";
import ShopNavigator from "./ShopNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTabs = createBottomTabNavigator();

export default BottomTabNavigator = () => {
    return(
        <BottomTabs.Navigator initialRouteName="ShopTab" 
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: true,
            tabBarStyle: styles.tabBar,
        }}>
            <BottomTabs.Screen name='ShopTab' component={ShopNavigator}
            options={{
                tabBarIcon: () => (
                    <View style={styles.icon}>
                        <IonIcons name='home' size={20} color='black'/>
                        <Text>Tienda</Text>
                    </View>
                )
            }}
            />
            <BottomTabs.Screen name='CartTab' component={CartNavigator}
                        options={{
                            tabBarIcon: () => (
                                <View style={styles.icon}>
                                    <IonIcons name='cart' size={20} color='black'/>
                                    <Text>Carrito</Text>
                                </View>
                            )
                        }}/>

<BottomTabs.Screen name='OrdersTab' component={OrdersNavigator}
                        options={{
                            tabBarIcon: () => (
                                <View style={styles.icon}>
                                    <IonIcons name='list' size={20} color='black'/>
                                    <Text>Orders</Text>
                                </View>
                            )
                        }}/>
        </BottomTabs.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        shadowColor: '#7f5df0',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.5,
        shadowRadius: 0.5,
        elevation: 5,
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 90,
    }
})