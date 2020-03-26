import { fields } from "../data/fields.js";
import { Choice } from "./choice.js";

export class Combination {
    advancedCourses: fields[];
    basicCourses: fields[];
    constructor(advancedCourses: fields[], basicCourses: fields[]) {
        this.advancedCourses = advancedCourses;
        this.basicCourses = basicCourses;
    }
    differenceOfArrays(minuendOriginal: fields[], subtrahend: fields[]): fields[] {
        let minuend = minuendOriginal.slice();
        subtrahend.forEach((value) => {
            if (minuend.indexOf(value) !== -1) {
                minuend.splice(minuend.indexOf(value), 1);
            }
        });
        return minuend;
    }
    possibleAdvancedCourses(choice: Choice): fields[] {
        return this.differenceOfArrays(this.advancedCourses, choice.advancedCourses);
    }
    possibleBasicCourses(choice: Choice): fields[] {
        return this.differenceOfArrays(this.basicCourses, choice.basicCourses);
    }
    isSupersetOf(choice: Choice): boolean {
        return this.differenceOfArrays(choice.advancedCourses, this.advancedCourses).length === 0 &&
            this.differenceOfArrays(choice.basicCourses, this.basicCourses).length === 0;
    }
    equals(choice: Choice): boolean {
        return this.possibleAdvancedCourses(choice).length === 0 &&
            this.possibleBasicCourses(choice).length === 0;
    }
}
