import {calcNewPrice, calcPrice, Plans, PlanStore} from "../stores/PlanStore";

describe('calc price', () => {
	it('old price', () => {
		// first example
		expect(calcPrice(11, 16, 20)).toBe(38);

		// second example
		expect(calcPrice(11, 17, 80)).toBe(136);

		// third example
		expect(calcPrice(18, 11, 200)).toBe(380);
	});

	it('new price', () => {
		// first example
		expect(calcNewPrice(11, 16, 20)).toBe(0);

		PlanStore.plan = Plans.FALEMAIS60;
		// second example
		expect(calcNewPrice(11, 17, 80)).toBe(37.4);

		PlanStore.plan = Plans.FALEMAIS120;
		// third example
		expect(calcNewPrice(18, 11, 200)).toBe(167.2);
	});
});
