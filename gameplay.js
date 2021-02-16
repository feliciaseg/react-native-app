import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export class GamePlay extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: [
        {
          lyric1:
            "I wonder how, I wonder why Yesterday you told me 'bout the blue blue sky",
          lyric2: "And all that I can see is just a yellow lemon tree",
          title: "LEMON TREE",
          artist: "Fools Garden",
        },
        {
          lyric1: "I'm so excited, and I just can't hide it ",
          lyric2: "I'm about to lose control and I think I like it",
          title: "I'M SO EXCITED",
          artist: "The Pointer Sisters",
        },
        {
          lyric1: "One night to be confused",
          lyric2: "One night to speed up truth",
          title: "HEARTBEATS",
          artist: "The Knife",
        },
        {
          lyric1:
            "I don't care if Monday's blue Tuesday's grey and Wednesday too",
          lyric2: "Thursday I don't care about you It's Friday, I'm in love",
          title: "FRIDAY I'M IN LOVE",
          artist: "The Cure",
        },
      ],
      randomNumber: 0,
      gamesPlayed: 0,
      rightAnswersTeam1: 0,
      rightAnswersTeam2: 0,
      teamPlaying: 1, //1 for team1 and 2 for team 2
    };
  }

  wrongAnswer = () => {
    this.setState({ gamesPlayed: ++this.state.gamesPlayed });
    this.newSong();
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
    this.newSong();
    //console.log(this.state.rightAnswersTeam1);
  };

  newSong = () => {
    console.log(
      "Games played: " +
        this.state.gamesPlayed +
        "right answers 1 = " +
        this.state.rightAnswersTeam1 +
        "right answers 2 = " +
        this.state.rightAnswersTeam2 +
        "The team that is playing: " +
        this.state.teamPlaying
    );
    let NewNumber = Math.floor(Math.random() * this.state.songs.length) + 0;
    this.setState({
      randomNumber: NewNumber,
    });
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
    flex: 1,
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
