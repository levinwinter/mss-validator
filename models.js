class Kombination {
    constructor(lk1, lk2, lk3) {
        this.lk = [];
        this.lk.push(lk1, lk2, lk3);
    }
    normalize() {
        this.lk.sort((a, b) => b - a);
    }
    translate() {
        this.lk.forEach((value, index) => {
            this.lk[index] = mapping.get(value);
        });
    }
    equals(combination) {
        this.translate();
        combination.translate();
        this.normalize();
        combination.normalize();
        console.log(this.lk);
        console.log(combination.lk);
        return this.lk[0] === combination.lk[0] && this.lk[1] === combination.lk[1] && this.lk[2] === combination.lk[2];
    }
}