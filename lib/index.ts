function stpicalc(
	sem1: Array<number>,
	credit1: Array<number>,
	sem2: Array<number>,
	credit2: Array<number>,
): number {
	let mult1,
		mult2: number = 0;
	let sum1: number = 0,
		sum2: number = 0;
	let stpi: number = 0;
	let ans1: number = 0;
	let ans2: number = 0;
	for (let i: number = 0; i < sem1.length; i++) {
		mult1 = credit1[i] * sem1[i];
		sum1 += mult1;
		mult2 = credit2[i] * sem2[i];
		sum2 += mult2;
		ans1 += credit1[i];
		ans2 += credit2[i];
	}
	stpi = sum1 / ans1 + sum2 / ans2;
	return stpi;
}
