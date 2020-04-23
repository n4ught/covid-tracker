
import React from 'react';

import {Cards, Chart, CountryPicker} from './components/index';
import styles from './App.module.css';
import { fetchData } from './api/index';

class App extends React.Component{

	state = {
		data: {}
	}

	async componentDidMount(){

		// An object would be assigned to data variable.
		// { confirmed, recovered, deaths, lastUpdate }.
		const data = await fetchData();

		this.setState({ data: data });

	}

	render(){

		// Destructure the data from the state.
		const {data} = this.state;

		return(

			<div className={styles.container}>

				<Cards data={data} />
				<CountryPicker />
				<Chart />
				

			</div>

		);

	}

}

export default App;     