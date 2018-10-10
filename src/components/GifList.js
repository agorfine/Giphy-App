import React, { Component } from 'react';


class GifList extends Component {
	constructor(props) {
		super(props)
		this.state= {
		}
	}

	

	render () {

		const gify = this.props.theGif ? this.props.theGif[0].embed_url : '';
		console.log(gify)

		let toRender;
		if(this.props.loadPage) {
			toRender = <h3>Please wait...</h3>
		} else {
			toRender = (<iframe src={gify} className = "img"></iframe>)
		}

		return (
			<div className = 'giph'>
				{ toRender }
			</div>
			)
	}
}

export default GifList;