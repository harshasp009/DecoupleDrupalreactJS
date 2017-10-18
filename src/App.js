import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      node_title: '',
      node_body: ''
    };
  }

  componentDidMount() {
    var that = this;
    var url = 'http://redcrackled8.local/node/1?_format=json';
    fetch(url).then(function(response) {
      return response.json();
    }).then(function(data) {
      that.setState({node_title : data.title[0].value});
      that.setState({node_body : data.body[0].value});
      console.log(data);
      console.log(data.title[0].value);
      console.log(data.body[0].value);
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <h1>{this.state.node_title}</h1>
        <div dangerouslySetInnerHTML={ {__html: this.state.node_body} } />
        <p className="App-intro">
        </p>
      </div>
    );
  }


}

export default App;
