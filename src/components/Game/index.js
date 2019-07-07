import React, { Component } from "react";
import Nav from "../Nav";

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
            </div>
        );
    }
}

export default Game;