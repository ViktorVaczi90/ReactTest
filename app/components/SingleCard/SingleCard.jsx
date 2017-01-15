import React from 'react';
import { connect } from 'react-redux';

import { GridTile } from 'material-ui/GridList';

const mapDispatchToProps = dispatch =>
	({
		onCardClick: (card, side) => {
			dispatch({
				type: 'CARD_PRESSED',
				side,
				card,
			});
		},
	});

const mapStateToProps = (state, props) =>
	({
		visible: !!(((props.side === 'left') && state.pressedCards.leftCard && (state.pressedCards.leftCard.code === props.card.code))
		|| ((props.side === 'right') && state.pressedCards.rightCard && (state.pressedCards.rightCard.code === props.card.code))),
	});

const SingleCard = ({ card, side, visible, onCardClick }) =>
	<GridTile onClick={() => onCardClick(card, side)} >
		<img
			role="presentation"
			src={visible ?
				card.image :
				'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Spirit_Rover-Mars_Night_Sky.jpg/211px-Spirit_Rover-Mars_Night_Sky.jpg'}
		/>
	</GridTile>;
export default connect(mapStateToProps, mapDispatchToProps)(SingleCard);
