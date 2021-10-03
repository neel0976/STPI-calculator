interface Sem1 {
	sub1: number;
	sub2: number;
	sub3: number;
	sub4: number;
	sub5: number;
	sub6: number;
}

function calc(sem1: Sem1) {
	return (
		sem1.sub1 + sem1.sub2 + sem1.sub3 + sem1.sub4 + sem1.sub5 + sem1.sub6
	);
}

let sem1_marks = {
	sub1: 80,
	sub2: 89,
	sub3: 67,
	sub4: 90,
	sub5: 98,
	sub6: 88,
};

calc(sem1_marks);
