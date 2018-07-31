import React from "react";
import Header from "./component/header";
import Search from "./component/search";
import Player from "./component/player";
import PlayerDetail from "./component/playerDetail";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Search />
        <Player />
        <PlayerDetail />
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default App;
