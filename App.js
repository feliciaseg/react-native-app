import React from "react";
import "react-native-gesture-handler";
import {
  useFonts,
  OpenSans_800ExtraBold_Italic,
} from "@expo-google-fonts/open-sans";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { GamePlay } from "./gameplay";
import { HowToPlay } from "./howtoplay";
import { StartScreen } from "./startscreen";
import { ChangeScreen } from "./changescreen";

const Stack = createStackNavigator();

function App() {
  let [fontsLoaded, error] = useFonts({
    OpenSans_800ExtraBold_Italic,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        initalRouteName="StartScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="HowToPlay" component={HowToPlay} />
        <Stack.Screen name="GamePlay" component={GamePlay} />
        <Stack.Screen name="ChangeScreen" component={ChangeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
