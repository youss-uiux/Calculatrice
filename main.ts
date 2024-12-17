console.log("First calculator");

class Adittion {
	private a: number;
    private b: number;
    addition: number;

	constructor(n: number, m: number) {
		this.a = n;
        this.b = m;
        this.addition = this.a + this.b;
	}
}

const calc = new Adittion(2, 3);
console.log(calc.addition);