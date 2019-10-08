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
      operations: '',
      previous_num: ''
    };
  }


  //take in numbers for display
  handleNumbers = (number) => {
    var new_number = this.state.numbers + number;
    this.setState({
      numbers: new_number
    });
  }

  //this is to handle operation
  handleOperations = (operation) => {
    if(operation === 'ce'){
      this.setState({
        numbers: '',
        operations: '',
        pervious_num: ''
      });
    }
    else if(operation === '='){
      //here actual computation
      if(this.state.operations==='+'){
        this.setState({
          numbers: (parseFloat(this.state.previous_num) + parseFloat(this.state.numbers)).toString(),
          operations: '',
          previous_num: ''
        });
      }
      else if(this.state.operations ==='-'){
        this.setState({
          numbers: (parseFloat(this.state.previous_num) - parseFloat(this.state.numbers)).toString(),
          operations: '',
          previous_num: ''
        });
      }
      else if(this.state.operations ==='*'){
        this.setState({
          numbers: (parseFloat(this.state.previous_num) * parseFloat(this.state.numbers)).toString(),
          operations: '',
          previous_num: ''
        });
      }
      else{
        this.setState({
          numbers: (parseFloat(this.state.previous_num) / parseFloat(this.state.numbers)).toString(),
          operations: '',
          previous_num: ''
        });
      }
      //after computation numbers should be the result
    }
    else{
      if(this.state.operations !== ''){
        //if this state is not equal to any operations then keep doing the operations
        var actual_previous_num = eval(this.state.previous_num + this.state.operations + this.state.numbers);
        this.setState({
          previous_num: actual_previous_num.toString(),
          operations:operation,
          numbers: ''
        });
      }
      else{
        this.setState({
          previous_num: this.state.numbers,
          operations: operation,
          numbers: ''
        });
      }
    }
  }

  render() {
    return (
      <div className="App">
        
        <body>
          
          {this.state.numbers}
          
          <Numbers handleButton={this.handleNumbers}/>
          <Operations handleOperations={this.handleOperations}/>
        </body>
      </div>
    );
  }
}

export default App;
