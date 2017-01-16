import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import Chip from 'material-ui/Chip';

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
				<RaisedButton label="Primary" primary style={style} />
				<RaisedButton label="Secondary" secondary style={style} />
				<Chip style={style}>Turns so far:{this.props.moves}</Chip>
			</div>
		);
	}
}
const mapStateToProps = state =>
	({
		moves: state.pressedCards.moves,
	});
export default connect(mapStateToProps)(TopButton);
