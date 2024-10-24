import './App.css';
import React from 'react';
import {Display} from "./Display";
import io from "socket.io-client";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: null};
  }
  componentDidMount() {
    let socket = io("https://mst-full-stack-dev-test.herokuapp.com/");
    socket.on("data-update", msg => {
      this.setState({data: msg}); 
    });
    setInterval(() => {
      console.log(this.state.data1);
    }, 5000);
  }
  componentDidUpdate() {

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Playing next...</h1>
          <Display data={this.state.data} />
        </header>
      </div>
    );
  }
}

export default App;
