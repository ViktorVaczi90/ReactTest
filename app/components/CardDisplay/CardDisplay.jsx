import React from 'react';
import { connect } from 'react-redux';

import { GridList } from 'material-ui/GridList';
import SingleCard from '../SingleCard/SingleCard';

const styles = {
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		//justifyContent: 'space-around',
	},
	gridList: {
		width: 700,
		height: 600,
		//overflowY: 'auto',
	},
};

class CardDisplay extends React.Component {
	constructor(props) {
		super(props);
		this.asdasd = true;
	}

	render() {
		return (
			<div style={styles.root} >
				<GridList
					cols={3}
					cellHeight={100}
					style={styles.gridList}
				>
					{this.props.deck.map(card =>
						<SingleCard card={card} side={this.props.side} key={card.code} />)}
				</GridList>
			</div>
		);
	}
}
const mapStateToProps = state =>
	({
		pressedCards: state.pressedCards,
	});


export default connect(mapStateToProps)(CardDisplay);
