import React, { Component } from "react";
import Nav from "../Nav";
import Header from "../Header";
import Container from "../Container";

class Game extends Component {
    state = {
        data: null,
        score: 0,
        topScore: 0
    };

    render() {
        return (
            <div>
                <Nav score={this.state.score} topScore={this.state.topScore} />
                <Header />
                <Container></Container>
            </div>
        );
    }
}

export default Game;