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
}
const rightDeck = (state = [], action) => {
	switch (action.type) {
		case 'NEW_RIGHT_DECK':
			return action.deck;
		default:
			return state;
	}
}
const appReducer = combineReducers({
	deck,
	leftDeck,
	rightDeck,
});
export default appReducer;
