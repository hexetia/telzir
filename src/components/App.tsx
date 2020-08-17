import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { Main } from './sections/Main';
import { Header } from './sections/Header';
import {SaveNow} from "./sections/SaveNow";

export const App = () => {
	return (
		<>
			<CssBaseline />
			<Header />
			<Main />
			<SaveNow />
		</>
	);
};

export const maxWidthDesktop = 1100;

export const prices = {
	'11|16': 1.9,
	'16|11': 2.9,
	'11|17': 1.7,
	'17|11': 2.7,
	'11|18': 0.9,
	'18|11': 1.9
};
