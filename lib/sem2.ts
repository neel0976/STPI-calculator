interface Sem2 {
	sub1: number;
	sub2: number;
	sub3: number;
	sub4: number;
	sub5: number;
	sub6: number;
}

function calc(sem2: Sem2) {
	return (
		sem2.sub1 + sem2.sub2 + sem2.sub3 + sem2.sub4 + sem2.sub5 + sem2.sub6
	);
}

let sem2_marks = {
	sub1: 80,
	sub2: 89,
	sub3: 67,
	sub4: 90,
	sub5: 98,
	sub6: 88,
};

calc(sem2_marks);
