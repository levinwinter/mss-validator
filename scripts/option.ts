import { fields } from "../data/fields.js";
import { Combination } from "./combination.js";
import {Choice} from "./choice.js";

export class Option {
    combinations: Combination[] = [];
    constructor(advancedCourses: fields[], basicCourses: (fields[] | fields)[]) {
        this.extendCourses(basicCourses).forEach((extendedBasicCourses) => {
            this.combinations.push(new Combination(advancedCourses, extendedBasicCourses));
        });
    }
    extendCourses(courses: (fields[] | fields)[]): fields[][] {
        let result: (fields[] | fields)[][] = [courses.slice()];
        let foundSubArray: boolean;
        do {
            foundSubArray = false;
            result.forEach((array, indexArray) => {
                array.forEach((subArray, indexSubArray) => {
                    // check whether element really is an array & prevent doubled results in result
                    if (Array.isArray(subArray)) {
                        foundSubArray = true;
                        // remove subArray
                        result.splice(indexArray, 1);
                        // for each element in the subArray append a newly created Array
                        subArray.forEach((field) => {
                            let extendedArray: (fields[] | fields)[] = array.slice();
                            extendedArray[indexSubArray] = field;
                            result.push(extendedArray);
                        });
                    }
                });
            });
        } while (foundSubArray);
        return result as fields[][];
    }
    possibleAdvancedCourses(choice: Choice): fields[] {
        let possibleAdvancedCourses: fields[] = [];
        this.combinations.forEach((combination) => {
            combination.possibleAdvancedCourses(choice).forEach((field) => {
                if (!possibleAdvancedCourses.includes(field)) possibleAdvancedCourses.push(field);
            });
        });
        return possibleAdvancedCourses;
    }
    possibleBasicCourses(choice: Choice): fields[] {
        let possibleBasicCourses: fields[] = [];
        this.combinations.forEach((combination) => {
            combination.possibleBasicCourses(choice).forEach((field) => {
                if (!possibleBasicCourses.includes(field)) possibleBasicCourses.push(field);
            });
        });
        return possibleBasicCourses;
    }
    isSupersetOf(choice: Choice): boolean {
        let isSupersetOf: boolean = false;
        this.combinations.forEach((combination) => {
            if (combination.isSupersetOf(choice)) isSupersetOf = true;
        });
        return isSupersetOf;
    }
    equals(choice: Choice): boolean {
        let equals: boolean = false;
        this.combinations.forEach((combination) => {
            if (combination.equals(choice)) equals = true;
        });
        return equals;
    }
}
