import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
export class ChangeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      team1: 0,
      team2: 0,
      teamNotPlaying: 1,
    };
  }

  componentDidMount() {
    if (this.props.route.params.teamPlaying === 1) {
      this.setState({ teamNotPlaying: 2 });
    } else {
      this.setState({ teamNotPlaying: 1 });
    }
    this.setState({
      team1: this.props.route.params.rightAnswersTeam1,
      team2: this.props.route.params.rightAnswersTeam2,
    });
  }

  playAgain = () => {
    this.props.navigation.navigate("GamePlay", {
      points1: this.state.team1,
      points2: this.state.team2,
    });
  };

  render() {
    return (
      <View style={stylesCS.container}>
        <TouchableOpacity
          style={stylesCS.closeButton}
          onPress={() => this.props.navigation.push("StartScreen")}
        >
          <Text style={stylesCS.x}>×</Text>
        </TouchableOpacity>

        <View style={stylesCS.divButtonContainer}>
          <View style={stylesCS.div}>
            <Text style={stylesCS.h1}>Poängställning</Text>
            <Text style={stylesCS.text}>
              {" "}
              Lag 1 har {this.state.team1} poäng {"\n"} Lag 2 har{" "}
              {this.state.team2} poäng{" "}
            </Text>
            <Text style={stylesCS.text}>
              {" "}
              Nu är det dags för lag {this.state.teamNotPlaying} att ta över
              mobilen!
            </Text>
          </View>

          <TouchableOpacity style={stylesCS.button} onPress={this.playAgain}>
            <Text style={stylesCS.buttonText}> Nu kör vi! </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const stylesCS = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E83844",
  },
  closeButton: {
    marginTop: 35,
    margin: 15,
    height: 51,
    width: 53,
    backgroundColor: "white",
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  x: {
    fontSize: 45,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "900",
    color: "#1B62A8",
  },
  divButtonContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  div: {
    backgroundColor: "white",
    height: 352,
    width: 305,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  h1: {
    fontSize: 35,
    fontFamily: "OpenSans_800ExtraBold_Italic",
    color: "#E83844",
    paddingTop: 10,
  },
  text: {
    fontSize: 30,
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
