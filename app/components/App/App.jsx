import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import $ from 'jquery';
import { connect } from 'react-redux';

import TopButton from '../TopButtons/TopButton';
import CardDisplay from '../CardDisplay/CardDisplay';

require('./App.css');

/**
 * STOLEN :)
 * Shuffles array in place. ES6 version
 * @param {Array} a items The array containing the items.
 */
const shuffle = (a) => {
	const b = a.slice();
	for (let i = b.length; i; i -= 1) {
		const j = Math.floor(Math.random() * i);
		[b[i - 1], b[j]] = [b[j], b[i - 1]];
	}
	return b;
};

class App extends React.Component {
	constructor(props) {
		super(props);
		console.log(this);

		this.state = {
			time: new Date(),
		};

		this.timer = null;
	}

	componentDidMount() {
		$.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1', data =>
			$.get(`https://deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=9`, (cards) => {
				cards.cards = cards.cards.map(card => Object.assign(card, { done: false }));
				this.props.dispatch({
					type: 'NEW_DECK',
					deck: cards.cards,
				});
				this.props.dispatch({
					type: 'NEW_RIGHT_DECK',
					deck: shuffle(cards.cards),
				});
				this.props.dispatch({
					type: 'NEW_LEFT_DECK',
					deck: shuffle(cards.cards),
				});
			}));
	}

	render() {
		return (
			<MuiThemeProvider>
				<div>
					<TopButton />
					<Paper zDepth={3} >
						<div className="container" >
							<div className="row" >
								<div className="col-xs-6" >
									<CardDisplay deck={this.props.leftDeck} side="left" />
								</div>
								<div className="col-xs-6" >
									<CardDisplay deck={this.props.rightDeck} side="right" />
								</div>
							</div>
						</div>
					</Paper>
					<p>The time is <b>{this.state.time.toString()}</b></p>
				</div>
			</MuiThemeProvider>
		);
	}
}
const mapStateToProps = state =>
	({
		leftDeck: state.leftDeck,
		rightDeck: state.rightDeck,
	});
export default connect(mapStateToProps)(App);
