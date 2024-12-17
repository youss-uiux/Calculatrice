console.log("First calculator")

class Substraction {
    private a: number;
    private b: number;

    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }

    public substract(): number {
        return this.a - this.b;
    }
}
