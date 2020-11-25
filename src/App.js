  
import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
    count: 0
  };
  add = () => {
    this.setState(current => ({count: current.count + 1}))
  } 

  minus = () => {
    this.setState(current => ({count: current.count - 1}))
  }

  componentDidMount() { //페이지 로딩
    console.log("component rendered")
  }

  componentDidUpdate() {//페이지 데이터 업데이트
    console.log("I just Updating")
  }

  componentWillUnmount() {//페이지 로딩 실패
    console.log("Goodbye, crule world")
  }
  render() {
    console.log("I'm rendering")
    return (
      <div>
        <h1> This number is {this.state.count} </h1>
        <button onClick={this.add}>Add</button> 
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App;