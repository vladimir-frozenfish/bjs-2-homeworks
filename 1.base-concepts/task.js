"use strict"

function solveEquation(a, b, c) {
	let discriminant = b ** 2 - 4 * a * c

	if (discriminant > 0)
		return [
			(-b + Math.sqrt(discriminant)) / (2 * a),
			(-b - Math.sqrt(discriminant)) / (2 * a),
		];
	else if (discriminant === 0) return [-b / (2 * a)];

	return [];
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let percentMonth = percent / 100 / 12;
	return +((amount - contribution) * (percentMonth + (percentMonth / (((1 + percentMonth) ** countMonths) - 1))) * countMonths).toFixed(2);
}