import {mappings} from "./mappings.js";
import {fields} from "./fields.js";
import {subjects} from "./subjects.js";

export class Combination {
    majors: fields[];
    constructor(majors: fields[]) {
        this.majors = majors;
    }
    normalize(): void {
        this.majors.sort((a, b) => a - b);
    }
    equals(combination: Combination): boolean {
        this.normalize();
        combination.normalize();
        return this.majors[0] === combination.majors[0]
            && this.majors[1] === combination.majors[1]
            && this.majors[2] === combination.majors[2];
    }
}

export class Choice extends Combination {
    constructor(majors: subjects[]) {
        let translatedMajors: fields[] = [];
        majors.forEach((value, index) => {
            translatedMajors[index] = mappings.get(value);
        });
        super(translatedMajors);
    }
}
