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
const pressedCards = (state = { leftCard: undefined, rightCard: undefined }, action) => {
	switch (action.type) {
		case 'CARD_PRESSED':
			if (action.side === 'left' && !state.leftCard) {
				return Object.assign({}, state, { leftCard: action.card });
			}
			if (action.side === 'right' && !state.rightCard) {
				return Object.assign({}, state, { rightCard: action.card });
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
