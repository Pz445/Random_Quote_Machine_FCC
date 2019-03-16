import React, { Component } from 'react';
import './App.css';
import QuoteBox from './components/QuoteBox';
import axios from 'axios';

class App extends Component {
  state = {
    quoteText: "",
    quoteAuthor: ""
  }

  componentDidMount() {
    axios.get('https://quota.glitch.me/random')
      .then(res => {
        this.setState({
          quoteText: res.data.quoteText,
          quoteAuthor: res.data.quoteAuthor
        })
      })
  }

  handleClick = (e) => {
    axios.get('https://quota.glitch.me/random')
      .then(res => {
        this.setState({
          quoteText: res.data.quoteText,
          quoteAuthor: res.data.quoteAuthor
        })
      })
  }

  render() {
    return (
      <div className="App">
        <QuoteBox
          onClick={this.handleClick}
          text={this.state.quoteText}
          author={this.state.quoteAuthor}
        />
      </div>
    );
  }
}

export default App;
