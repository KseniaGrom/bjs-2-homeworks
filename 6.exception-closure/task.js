function parseCount(number) {
    number = Number.parseFloat(number);
    if (isNaN(number)) {
        throw new Error("Невалидное значение");
    } else {
        return number;
    }
}

function validateCount(number) {
    try {
       return parseCount(number);
    } catch (Error) {
        return Error;
    }
}

class Triangle {
    constructor(a,b,c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (this.a + this.b < this.c || this.b + this.c < this.a || this.c + this.a < this.b) {
            throw new Error("Треугольник с такими сторонами не существует")
        }
    }
    get perimeter() {
        return this.a + this.b + this.c;
    }
    get area() {
        let p = 0.5 * (this.a + this.b + this.c);
        let S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return Number(S.toFixed(3));
    }
}

function getTriangle(a,b,c) {
    try {
        let newTriangle = new Triangle(a,b,c);
        return newTriangle;
    } catch {
        return {
            get area() {
                return ("Ошибка! Треугольник не существует");
            },
            get perimeter() {
                return ("Ошибка! Треугольник не существует");
            }
        }
    }
}