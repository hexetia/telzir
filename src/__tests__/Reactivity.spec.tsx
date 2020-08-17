import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SaveNow } from '../components/sections/SaveNow';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme();

const setup = () => {
	return render(
		<ThemeProvider theme={theme}>
			<SaveNow />
		</ThemeProvider>
	);
};

test('test update price value', () => {
	const renderResult = setup();
	const minutesInput = renderResult.container.querySelector(`input[name="minutes"]`) as HTMLInputElement;

	// check if default values are initialized correctly
	let valuesArray = renderResult.container.querySelectorAll('h5[data-value]');
	expect(valuesArray[0].textContent).toBe('$ 0.00');

	// with 50 minutes the user must pay something
	fireEvent.change(minutesInput, { target: { value: '50' } });
	expect(minutesInput.value).toBe('50');

	expect(valuesArray[0].textContent).toBe('$ 19.80');
	expect(valuesArray[1].textContent).toBe('$ 45.00');

	// change to that DDD should increase the price
	const dddInput = renderResult.container.querySelector(`input[name="target"]`) as HTMLInputElement;
	fireEvent.change(dddInput, { target: { value: '17' } });
	expect(dddInput.value).toBe('17');

	valuesArray = renderResult.container.querySelectorAll('h5[data-value]');
	expect(valuesArray[0].textContent).toBe('$ 37.40');
	expect(valuesArray[1].textContent).toBe('$ 85.00');
});
