import { subjects } from "./subjects.js";

export class Combination {
    majors: subjects[];
    constructor(major1: subjects, major2: subjects, major3: subjects) {
        this.majors = [];
        this.majors.push(major1, major2, major3);
    }
    normalize(): void {
        this.majors.sort((a, b) => a - b);
    }
    translate(): void {

    }
    equals(combination: Combination): boolean {
        this.translate();
        combination.translate();
        this.normalize();
        combination.normalize();
        return this.majors[0] === combination.majors[0]
            && this.majors[1] === combination.majors[1]
            && this.majors[2] === combination.majors[2];
    }
}
