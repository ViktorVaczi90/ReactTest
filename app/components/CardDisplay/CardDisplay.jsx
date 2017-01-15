import React from 'react';
import { connect } from 'react-redux';

import { GridList, GridTile } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

const styles = {
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
	},
	gridList: {
		width: 700,
		height: 450,
		overflowY: 'auto',
	},
};

class CardDisplay extends React.Component {
	constructor (props) {
		super(props);
		this.asdasd = true;
	}

	render () {
		return (
			<div style={styles.root}>
				<GridList
					cols={3}
					cellHeight={100}
					style={styles.gridList}
				>
					<Subheader>December</Subheader>
					{this.props.deck.map(card => (
						<GridTile
							key={card.code}
							onClick={()=>
								alert('fasz')
							}
						>
							<img role="presentation" src={card.image}/>
						</GridTile>
					))}
				</GridList>
			</div>
		);
	}
}

export default connect()(CardDisplay);
