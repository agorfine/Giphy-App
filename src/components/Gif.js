import React, { Component } from 'react';

class Gif extends Component {
	constructor(props) {
		super(props)
		this.state= {
			value: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(e) {
		e.preventDefault()
		this.getData()
		this.loadPage()
	}

	handleChange(e) {
    	let value = e.target.value
    	console.log('change ', e.target.value)
    	this.setState(prevState => ({
        	value
    	}))
  	}

  	getData() {
	    let url = `http://api.giphy.com/v1/gifs/search?q=${this.state.value}&api_key=ZJxsDo30FkIt7sTHq64D943x05AOSVhR&limit=5`
	    fetch(url)
	      .then(result => result.json())
	      .then(data => {
	        console.log(data)
	        this.setState(prevState => ({
	          result: data
	        }))
	        this.props.setAppState({ data: data })
      })
  }

  	loadPage () {
  		this.props.setAppState({ loadPage: true })
		setTimeout(() => {
			this.props.setAppState({ loadPage: false })
		}, 700)
	}

  render () {

  	return(
  		<form className= 'form'>
            <input className= 'input'
            	value = {this.state.value}
            	placeholder = "Enter giph here..."
           		onChange= {(e) => this.handleChange(e)}
            />
            <button className= 'button' onClick= {(e) => this.handleSubmit(e)} > Search for Gif </button>  
      </form>

  		)
  }

}

export default Gif;

