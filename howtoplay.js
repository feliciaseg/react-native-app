import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
export class HowToPlay extends React.Component {
  render() {
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
            4. Efter 5 låtar är det dags för lag 2 att sjunga!
          </Text>
        </View>

        <TouchableOpacity
          style={stylesHTP.button}
          onPress={() => this.props.navigation.navigate("GamePlay")}
        >
          <Text style={stylesHTP.buttonText}> Nu kör vi! </Text>
        </TouchableOpacity>
      
      </View>
    );
  }
}

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
