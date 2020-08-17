import {store} from 'react-easy-state';
import {prices} from "../components/App";

export enum Plans {
	FALEMAIS30 = 'FaleMais 30',
	FALEMAIS60 = 'FaleMais 60',
	FALEMAIS120 = 'FaleMais 120'
}

/**
 * Para o avaliador, o react-easy-state é parecido com o Mobx, com a vantagem de ter somente 3kB
 */
export const PlanStore = store({plan: Plans.FALEMAIS30});

export const freeMinutesMap = {
	[Plans.FALEMAIS30]: 30,
	[Plans.FALEMAIS60]: 60,
	[Plans.FALEMAIS120]: 120
};

export function calcPrice(origin: number, target: number, minutes: number): number {
	const price = prices[(origin + '|' + target) as keyof typeof prices] || 0;

	return minutes * price;
}

export function calcNewPrice(origin: number, target: number, minutes: number): number {
	let price = prices[(origin + '|' + target) as keyof typeof prices] || 0;
	price = price + price / 10;

	const freeM = freeMinutesMap[PlanStore.plan];

	const effectiveMinutes = minutes - freeM;
	if (effectiveMinutes > 0) {
		return effectiveMinutes * price;
	} else {
		return 0;
	}
}