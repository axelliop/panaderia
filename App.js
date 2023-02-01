import { StyleSheet, Text, View } from "react-native";

import ShopNavigator from "./src/navigation/ShopNavigator";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

export default function App() {
  /* ------- PARA LA FUENTE DE LETRA */
  const [fontsLoaded] = useFonts({
    RobotoBlack: require("./src/assets/fonts/Roboto-Black.ttf"),
  });

  if (!fontsLoaded) {
    // ---- SI NO CARGA ME RETORNA UN NULO
    return null;
  }

  return <ShopNavigator/> 
}
