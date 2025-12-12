function getArrayParams(...arr) {
	return {
		min: Math.min(...arr),
		max: Math.max(...arr),
		avg: +(arr.reduce((total, current) => total + current, 0) / arr.length).toFixed(2),
	};
}

function summElementsWorker(...arr) {
	return arr.reduce((total, current) => total + current, 0)
}

function differenceMaxMinWorker(...arr) {
	return arr.length ? (Math.max(...arr) - Math.min(...arr)) : 0;
}

function differenceEvenOddWorker(...arr) {
	let sumOfOdd = 0;
	let sumOfEven = 0;
	for (let num of arr) {
		num % 2 ? (sumOfOdd += num) : (sumOfEven += num);
	}
	return sumOfEven - sumOfOdd;
}

function averageEvenElementsWorker(...arr) {
	if (!arr.length) return 0

	let countOfEven = 0;
	let sumOfEven = 0;
	for (let num of arr) {
		if (!(num % 2)) {
			sumOfEven += num;
			countOfEven++;
		}
	}
	return sumOfEven / countOfEven;
}

function makeWork(arrOfArr, func) {
	let result = []
	for (let arr of arrOfArr) {
		result.push(func(...arr));
	}

	return Math.max(...result);
}