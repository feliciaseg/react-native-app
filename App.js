import "react-native-gesture-handler";
//import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  useFonts,
  OpenSans_800ExtraBold_Italic,
} from "@expo-google-fonts/open-sans";
//import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//import { ScreenStack } from 'react-native-screens';

function StartScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.div}>
        <Text style={styles.h1}>SING{"\n"}SING</Text>
        <View style={styles.pinkDot1}></View>
        <View style={styles.pinkDot2}></View>
      </View>
    </View>
  );
}

function HowToPlay() {
  return (
    <View style={styles.container}>
      <View style = {styles.HTPDiv} >
      <Text>Details Screen</Text>
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_800ExtraBold_Italic,
  });
  return (
    <NavigationContainer>
      <Stack.Navigator initalRouteName="HowToPlay">
        <Stack.Screen name="HowToPlay" component={HowToPlay} />
        <Stack.Screen name="StartScreen" component={StartScreen} />
        {/* <Stack.Screen name = "GamePlay" component = {GamePlay}/>
        <Stack.Screen name = "ChangeScreen" component = {ChangeScreen}/>  */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E83844",
    alignItems: "center",
    justifyContent: "center",
  },
  div: {
    backgroundColor: "white",
    height: 352,
    width: 305,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  h1: {
    fontSize: 120,
    fontFamily: "OpenSans_800ExtraBold_Italic",
    color: "#1B62A8",
    marginTop: 60,
    lineHeight: 150,
  },
  pinkDot1: {
    //top: 312,
    height: 33,
    width: 34,
    borderRadius: 30,
    bottom: 176,
    left: 153,
    backgroundColor: "#F9DADF",
  },
  pinkDot2: {
    //top: 312,
    height: 33,
    width: 34,
    borderRadius: 30,
    bottom: 207,
    left: -153,
    backgroundColor: "#F9DADF",
  },
  HTPDiv: {
    top: 33,
    backgroundColor: "white",
    height: 548,
    width: 315,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }
  
});
