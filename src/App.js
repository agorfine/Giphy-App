import React, { Component } from 'react';
import Gif from './components/Gif'
import GifList from './components/GifList'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      search: '',
      data: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.setTheState = this.setTheState.bind(this)
  }

  handleSubmit(search) {
    this.setState(prevState => ({
      search: [...prevState.search, search],
      value: ''
    }))
  }

  setTheState(obj) {
    this.setState ( obj )
  }

  render() {
    return (
      <div className = "page">
        
        <h1 className= "title">Giphy Search App</h1>
        
        <Gif 
            getSearch = { this.handleSubmit }
            setAppState = { this.setTheState }
        />
      
        <GifList 
            gif= {this.state.data.data}
        />
      
      </div>
    );
  }
}

export default App;
