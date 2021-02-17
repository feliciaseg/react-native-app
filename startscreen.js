import React from "react";
import { StyleSheet, Text, View} from "react-native";

export class StartScreen extends React.Component {
  render() {
    setTimeout(() => {
      this.props.navigation.navigate("HowToPlay");
    }, 3000);
    return (
      <View style={styles.container}>
        <View style={styles.div}>
          <Text style={styles.h1}>SING{"\n"}SING</Text>
        </View>
      </View>
    );
  }
}

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
});
