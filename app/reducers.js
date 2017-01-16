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
				if (state.rightCard) { // If there is a right card
					if (state.rightCard === action.card) { // If there is a match
						state.rightCard.done = true;
						action.card.done = true;
						return Object.assign({},
							{ leftCard: action.card, moves: state.moves + 1 });
					}
					// if there is no match
					return Object.assign({}, state,
						{ leftCard: action.card, moves: state.moves + 1 });
				}
				// There is no right card yet
				return Object.assign({}, state,
					{ leftCard: action.card });
			}
			// there is no right card yet
			if (action.side === 'right' && !state.rightCard) {
				if (state.leftCard) { // If there is a left card
					if (state.leftCard === action.card) { // If there is a match
						state.leftCard.done = true;
						action.card.done = true;
						return Object.assign({}, state,
							{ rightCard: action.card, moves: state.moves + 1 });
					}
					// if there is no match
					return Object.assign({}, state,
						{ rightCard: action.card, moves: state.moves + 1 });
				}
				// There is no right card yet
				return Object.assign({}, state,
					{ rightCard: action.card });
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
