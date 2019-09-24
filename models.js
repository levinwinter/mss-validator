const faecher = {
    DEUTSCH: 0,
    ENGLISCH: 1,
    BIOLOGIE: 2,
    MATHEMATIK: 3,
    PHYSIK: 4,
};

class Kombination {
    constructor(lk1, lk2, lk3) {
        this.lk = [];
        this.lk.push(lk1, lk2, lk3);
    }
    normalize() {
        this.lk.sort((a, b) => b - a);
    }
    equals(combination) {
        this.normalize();
        combination.normalize();
        return this.lk[0] === combination.lk[0] && this.lk[1] === combination.lk[1] && this.lk[2] === combination.lk[2];
    }
}