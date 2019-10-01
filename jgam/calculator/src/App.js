import React from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './Display'
import Numbers from './Numbers'
import Operations from './Operations'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      numbers: '',
      operations: ''
    };
  }


  //take in numbers for display
  handleNumbers = (number) => {
    var new_number = this.state.numbers + number;
    console.log('got hiere');
    console.log(new_number);
    this.setState({
      numbers: new_number
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <body>
          
          {this.state.numbers}
          
          <Numbers handleButton={this.handleNumbers}/>
          <Operations />
        </body>
      </div>
    );
  }
}

export default App;
