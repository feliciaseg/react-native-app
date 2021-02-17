import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import songs from "./songs.js"
export class GamePlay extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: songs.data,
      randomNumber: Math.floor(Math.random() * songs.data.length) + 0, //random song
      gamesPlayed: 0,
      rightAnswersTeam1: 0,
      rightAnswersTeam2: 0,
      teamPlaying: 1, //1 for team1 and 2 for team 2
    };
  }

  wrongAnswer = () => {
    this.setState({ gamesPlayed: ++this.state.gamesPlayed });
    this.updateScreen();
  };

  rightAnswer = () => {
    this.setState({ gamesPlayed: ++this.state.gamesPlayed });
    if (this.state.teamPlaying === 1) {
      this.setState({ rightAnswersTeam1: ++this.state.rightAnswersTeam1 });
    } else {
      this.setState({ rightAnswersTeam2: ++this.state.rightAnswersTeam2 });
    }
    this.updateScreen();
  };

  newSong = () => {
    let randomize = Math.floor(Math.random() * 4) + 1;
    let NewNumber = this.state.randomNumber + randomize
    if (NewNumber > songs.data.length-1){
      NewNumber = 0
    }
    this.setState({
      randomNumber: NewNumber,
    });
    console.log(NewNumber)
  };

  updateScreen = () => {
    if (this.state.gamesPlayed === 5) {
      this.props.navigation.navigate("ChangeScreen", {
        rightAnswersTeam1: this.state.rightAnswersTeam1,
        rightAnswersTeam2: this.state.rightAnswersTeam2,
        teamPlaying: this.state.teamPlaying,
      });
      this.setState({
        gamesPlayed: 0,
      });
      if (this.state.teamPlaying === 1) {
        this.setState({
          teamPlaying: 2,
        });
      } else {
        this.setState({
          teamPlaying: 1,
        });
      }
      setTimeout(this.newSong, 1000)
    } else {
      this.newSong();
    }
  };

  render() {
    //const points1 = this.props.route.params.points1;
    //const team1points = this.props.route.params.team1;
    return (
      <View style={stylesGP.container}>
        <View style={stylesGP.lyrics}>
          <View style={stylesGP.lyric1}>
            <Text style={stylesGP.textLyric1}>
              {this.state.songs[this.state.randomNumber].lyric1}
            </Text>
          </View>
          <View style={stylesGP.bar} />
          <View style={stylesGP.lyric2}>
            <Text style={stylesGP.textLyric2}>
              {this.state.songs[this.state.randomNumber].lyric2}
            </Text>
          </View>
        </View>
        <View style={stylesGP.lower}>
          <View style={stylesGP.titleArtist}>
            <Text style={stylesGP.title}>
              {" "}
              {this.state.songs[this.state.randomNumber].title}
            </Text>
            <Text style={stylesGP.artist}>
              {" "}
              {this.state.songs[this.state.randomNumber].artist}
            </Text>
          </View>

          <View style={stylesGP.buttons}>
            <TouchableOpacity
              style={stylesGP.button1}
              onPress={() => this.rightAnswer()}
            >
              <Text style={stylesGP.buttonText}>Rätt svar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={stylesGP.button1}
              onPress={this.wrongAnswer}
            >
              <Text style={stylesGP.buttonText}>Fel svar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

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
    flex: 1,
    width: "100%",
    backgroundColor: "#1B62A8",
  },
  titleArtist: {
    height: 99,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    paddingTop: 5,
    color: "white",
    textAlign: "center",
    fontSize: 28,
    fontFamily: "OpenSans_800ExtraBold_Italic",
  },
  artist: {
    color: "white",
    textAlign: "center",
    fontSize: 22,
    fontFamily: "OpenSans_800ExtraBold_Italic",
  },
  buttons: {
    height: 94,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
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
  },
});
