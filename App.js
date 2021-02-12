import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, OpenSans_800ExtraBold_Italic } from '@expo-google-fonts/open-sans'
import { AppLoading } from "expo"

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_800ExtraBold_Italic,
  })


  return (
    <View style={styles.container}>
      <View style = {styles.div}>
      <Text style= {styles.h1}>SING{'\n'}SING</Text>
      <View style={styles.pinkDot1}></View>
      <View style={styles.pinkDot2}></View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E83844',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    fontSize: 120,
    fontFamily: "OpenSans_800ExtraBold_Italic",
    color: "#1B62A8",
  },
  div: {
    backgroundColor: "white",
    height: 352,
    width: 305,
    alignItems: 'center',
    justifyContent: 'center',
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
    bottom: 176,
    left: -153,
    backgroundColor: "#F9DADF",
  }
});
