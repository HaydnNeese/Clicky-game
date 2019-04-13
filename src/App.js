import React, { Component } from 'react';
import Navbar from './components/Navbar/index';
import Jumbotron from "./components/Jumbotron/index";
import players from './players.json';
import Wrapper from './components/Wrapper/index';
import Card from './components/Card/index';
class App extends Component {
  state = {
    clickedPlayerIds: [],
    players,
    score: 0,
    topScore: 0,
    maxScore: 12,
    message: "Click a card"
  }

  cardClicked = id => {
    console.log(id);
    let clicked = this.state.clickedPlayerIds;
    if (!clicked.includes(id)) {
      clicked.push(id);
      this.setState({
        score: this.state.score + 1,
        message: "Good job, keep going",
        players: this.shuffleCards(players),
        clickedPlayerIds: clicked
      })
      if(this.state.score >= this.state.topScore) {
        this.setState({
        topScore: this.state.topScore + 1,
        })
      }
    } else {
      this.gameOver();
    }

    if(clicked.length === 12) {
      alert("Congrats You Win!");
      this.setState({
        score: 0
      })
    }

  }

  //make the shuffle function
  shuffleCards = arr => {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr
  }

  gameOver = () => {
    alert("Game over! You clicked the same card twice!");
    this.setState({
      score: 0,
      clickedPlayerIds: []
    })
  }

  render() {
    return (
      <Wrapper>
        <Navbar
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Jumbotron />
        <div className="d-flex flex-wrap justify-content-center">
          {this.state.players.map(players => (
            <Card
              id={players.id}
              key={players.id}
              image={players.image}
              name={players.name}
              cardClick={() => this.cardClicked(players.id)}
            />
          ))}
        </div>
      </Wrapper>
    )
  }
}

export default App;
