import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import '../scss/main.scss';

import {CharactersController} from '../components/display-characters/charactersController';
import {AddCharacterController} from './add-character/addCharacterController';
import Header from './common/header';

const App: React.FC = () => {
	return (
		<div className='container'>
			<Header />
			<BrowserRouter>
				<Switch>
					<Route path='/' exact component={CharactersController} />

					<Route path='/add' exact component={AddCharacterController} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
