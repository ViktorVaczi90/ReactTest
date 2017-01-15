import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
	margin: 12,
};

class TopButton extends React.Component {
	constructor(props) {
		super(props);
		this.asdasd = true;
	}
	render() {
		return (
			<div>
				<RaisedButton label="Primary" primary={true} style={style}/>
				<RaisedButton label="Secondary" secondary={true} style={style}/>
			</div>
		);
	}
}

export default connect()(TopButton);
