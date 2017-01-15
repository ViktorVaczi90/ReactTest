import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

require('./App.css');

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			time: new Date(),
		};

		this.timer = null;
	}

	componentDidMount() {
		this.timer = setInterval(() => {
			this.setState({ time: new Date() });
		}, 1000);
	}

	componentWillUnmount() {
		this.timer = clearInterval(this.timer);
	}

	render() {
		return (
			<MuiThemeProvider>
				<div>
					<h1>Hello World</h1>
					<Paper zDepth={3}>
						<p>Hi material</p>
					</Paper>
					<p>The time is <b>{this.state.time.toString()}</b></p>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
