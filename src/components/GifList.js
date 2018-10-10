import React, { Component } from 'react';


class GifList extends Component {
	constructor(props) {
		super(props)
		this.state= {
			show: false
		}
	}



	render () {
		const gify = this.props.theGif ? this.props.theGif[0].embed_url : '';
		console.log(gify)

		return (
			<div className = 'giph'>
				<iframe src={gify} className = "img"></iframe>
			</div>
			)
	}
}

export default GifList;