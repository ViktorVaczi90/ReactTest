/**
 * Created by v on 1/15/17.
 */
import { combineReducers } from 'redux';

const deck = (state = [], action) => {
	switch (action.type) {
		case 'NEW_DECK':
			return action.deck;
		default:
			return state;
	}
};
const leftDeck = (state = [], action) => {
	switch (action.type) {
		case 'NEW_LEFT_DECK':
			return action.deck;
		default:
			return state;
	}
};
const rightDeck = (state = [], action) => {
	switch (action.type) {
		case 'NEW_RIGHT_DECK':
			return action.deck;
		default:
			return state;
	}
};
const pressedCards = (state = { leftCard: undefined, rightCard: undefined, moves: 0 }, action) => {
	switch (action.type) {
		case 'CARD_PRESSED':
			// Both cards have been put to a place
			if (state.leftCard && state.rightCard) {
				if (action.side === 'left') {
					return Object.assign({},
						{ leftCard: action.card, rightCard: undefined, moves: state.moves });
				}
				if (action.side === 'right') {
					return Object.assign({},
						{ leftCard: undefined, rightCard: action.card, moves: state.moves });
				}
			}
			// there is no left card yet
			if (action.side === 'left' && !state.leftCard) {
				if (state.rightCard && state.rightCard === action.card) { // If there is a match
					state.rightCard.done = true;
					action.card.done = true;
					return Object.assign({},
						{ leftCard: undefined, rightCard: undefined, moves: state.moves + 1 });
				}
				return Object.assign({}, state,
					{ leftCard: action.card, moves: state.moves + 1 }); // No match
			}
			// there is no right card yet
			if (action.side === 'right' && !state.rightCard) {
				if (state.leftCard && state.leftCard === action.card) { // If there is a match
					state.leftCard.done = true;
					action.card.done = true;
					return Object.assign({},
						{ leftCard: undefined, rightCard: undefined, moves: state.moves + 1 });
				}
				return Object.assign({}, state,
					{ rightCard: action.card, moves: state.moves + 1 }); // No match
			}
			return state;
		default:
			return state;
	}
};
const appReducer = combineReducers({
	deck,
	leftDeck,
	rightDeck,
	pressedCards,
});
export default appReducer;
