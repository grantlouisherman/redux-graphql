import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';
import { dbLoader } from './reducer/db';

class App extends Component {

  componentDidMount(){
    this.props.loader();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todoList:state.db.list
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loader: () => {
      dispatch( dbLoader() )
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
