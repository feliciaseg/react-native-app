import "react-native-gesture-handler";
//import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import {
  useFonts,
  OpenSans_800ExtraBold_Italic,
} from "@expo-google-fonts/open-sans";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";
//import { ScreenStack } from 'react-native-screens';

const StartScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.div}>
        <Text style={styles.h1}>SING{"\n"}SING</Text>
      </View>
      {/* <View style={styles.pinkDot1}></View>
        <View style={styles.pinkDot2}></View> */}
    </View>
  );
};

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
    fontSize: 110,
    fontFamily: "OpenSans_800ExtraBold_Italic",
    color: "#1B62A8",
    lineHeight: 0,
  },
  // pinkDot1: {
  //   top: -466,
  //   height: 33,
  //   width: 34,
  //   borderRadius: 30,
  //   bottom: 176,
  //   left: 153,
  //   backgroundColor: "#F9DADF",
  // },
  // pinkDot2: {
  //   bottom: 45,
  //   height: 33,
  //   width: 34,
  //   borderRadius: 30,
  //   bottom: 207,
  //   left: -153,
  //   backgroundColor: "#F9DADF",
  // },
});

const HowToPlay = ({ navigation, route }) => {
  return (
    <View style={stylesHTP.container}>
      <View style={stylesHTP.div}>
        <Text style={stylesHTP.h1}>Såhär går det till</Text>
        <Text style={stylesHTP.text}>
          1. Dela upp er i två lag och turas om att hålla i mobiltelefonen.
        </Text>
        <Text style={stylesHTP.text}>
          2. Lag 1 håller i mobilen och sjunger första delen.
        </Text>
        <Text style={stylesHTP.text}>
          3. Lag 2 försöker sjunga resten, är det rätt får dom 1 poäng.
        </Text>
        <Text style={stylesHTP.text}>
          4. Efter 5 låtar är det dags för lag 2 att hålla i mobilen.
        </Text>
      </View>

      <TouchableOpacity
        style={stylesHTP.button}
        onPress={() => navigation.navigate("GamePlay", { GamePlay })}
      >
        <Text style={stylesHTP.buttonText}> Nu kör vi! </Text>
      </TouchableOpacity>
    </View>
  );
};

const stylesHTP = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E83844",
    alignItems: "center",
  },
  div: {
    top: 33,
    backgroundColor: "white",
    height: 548,
    width: 315,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  h1: {
    fontSize: 30,
    fontFamily: "OpenSans_800ExtraBold_Italic",
    color: "#E83844",
    paddingTop: 10,
  },
  text: {
    fontSize: 22,
    color: "#1B62A8",
    fontFamily: "OpenSans_800ExtraBold_Italic",
    textAlign: "center",
    padding: 10,
  },
  button: {
    width: 240,
    height: 52,
    marginTop: 45,
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "#1B62A8",
    fontSize: 30,
    fontFamily: "OpenSans_800ExtraBold_Italic",
  },
});

const GamePlay = ({ navigation, route }) => {
  return (
    <View style={stylesGP.container}>
      <View style={stylesGP.lyrics}>
        <View style={stylesGP.lyric1}>
          <Text style= {stylesGP.textLyric1}>
          I wonder how, I wonder why, yesterday you told me ‘bout the blue, blue sky
          </Text>

        </View>
        <View style={stylesGP.bar} />
        <View style={stylesGP.lyric2}>
        <Text style= {stylesGP.textLyric2}> And all that I can see is just a yellow lemon tree</Text>
        </View>
      </View>
      <View style={stylesGP.lower}>
        <View style={stylesGP.titleArtist}>
          <Text style={stylesGP.title}>Lemon Tree</Text>
          <Text style={stylesGP.artist}>Fools Garden</Text>
        </View>

        <View style={stylesGP.buttons}>
          
          <TouchableOpacity
            style={stylesGP.button1}
            // onPress={() => navigation.navigate("StartScreen", { StartScreen })}
          >
            <Text style={stylesGP.buttonText}>Rätt svar</Text>
          </TouchableOpacity>
          
          
          <TouchableOpacity
            style={stylesGP.button1}
            // onPress={() => navigation.navigate("StartScreen", { StartScreen })}
          >
            <Text style={stylesGP.buttonText}>Fel svar</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </View>
  );
};

const stylesGP = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#F9DADF",
    alignItems: "center",
  },
  lyrics: {
    height: 474,
    width: "100%",
    //backgroundColor: "black"
    display: "flex",
    alignItems: "center",
  },
  lyric1: {
    height: 229,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  textLyric1: {
    color: "#E83844",
    fontSize: 30,
    textAlign: "center",
    fontFamily: "OpenSans_800ExtraBold_Italic",
    paddingTop: 20,
    padding: 10,
  },
  bar: {
    height: 16,
    width: 250,
    backgroundColor: "white",
    borderRadius: 5,
  },
  lyric2: {
    height: 229,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  textLyric2: {
    color: "#E83844",
    fontSize: 30,
    textAlign: "center",
    fontFamily: "OpenSans_800ExtraBold_Italic",
    padding: 10,
  },
  lower: {
    height: 193,
    width: "100%",
    backgroundColor: "#1B62A8",
  },
  titleArtist: {
    height: 97,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 30,
    fontFamily: "OpenSans_800ExtraBold_Italic",
  },
  artist: {
    color: "white",
    fontSize: 24,
    fontFamily: "OpenSans_800ExtraBold_Italic",
  },
  buttons: {
    height: 96,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  button1: {
    height: 46,
    width: 145, 
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 30,
    fontFamily: "OpenSans_800ExtraBold_Italic",
    color: "#1B62A8",
  }
});

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
        initalRouteName="HowToPlay"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="HowToPlay" component={HowToPlay} />
        <Stack.Screen name="GamePlay" component={GamePlay} />
        <Stack.Screen name="StartScreen" component={StartScreen} />
        {/* <Stack.Screen name = "ChangeScreen" component = {ChangeScreen}/>   */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
