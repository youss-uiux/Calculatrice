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

class Multiplication {
    private a: number;
    private b: number;
    multiplication: number;

    constructor(n: number, m: number) {
        this.a = n;
        this.b = m;
        this.multiplication = this.a * this.b;
    }
}

class Subtraction {
    private a: number;
    private b: number;
    subtraction: number;

    constructor(n: number, m: number) {
        this.a = n;
        this.b = m;
        this.subtraction = this.a - this.b;
    }
}

class Division {
    private a: number;
    private b: number;
    division: number;

    constructor(n: number, m: number) {
        this.a = n;
        this.b = m;
        this.division = this.a / this.b;
    }
}

class Subtraction {
    private a: number;
    private b: number;
    subtraction: number;

    constructor(n: number, m: number) {
        this.a = n;
        this.b = m;
        this.subtraction = this.a - this.b;
    }
}

class Multiplication {
    private a: number;
    private b: number;
    multiplication: number;

    constructor(n: number, m: number) {
        this.a = n;
        this.b = m;
        this.multiplication = this.a * this.b;
    }
}

const calc = new Adittion(2, 3);
console.log(calc.addition);
