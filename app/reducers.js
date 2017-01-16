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
					return { leftCard: action.card, rightCard: undefined };
				}
				if (action.side === 'right') {
					return { leftCard: undefined, rightCard: action.card };
				}
			}
			// there is no left card yet
			if (action.side === 'left' && !state.leftCard) {
				if (state.rightCard && state.rightCard === action.card) { // If there is a match
					state.rightCard.done = true;
					action.card.done = true;
					return { leftCard: undefined, rightCard: undefined };
				}
				return Object.assign({}, state, { leftCard: action.card }); // No match
			}
			// there is no right card yet
			if (action.side === 'right' && !state.rightCard) {
				if (state.leftCard && state.leftCard === action.card) { // If there is a match
					state.leftCard.done = true;
					action.card.done = true;
					return { leftCard: undefined, rightCard: undefined };
				}
				return Object.assign({}, state, { rightCard: action.card }); // No match
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
