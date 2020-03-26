import { subjects } from "../data/subjects.js";
import { fields } from "../data/fields.js";
import { mappings } from "../data/mappings.js";
import { Combination } from "./combination.js";

export class Choice extends Combination {
    constructor(advancedCourses: subjects[], basicCourses: subjects[]) {
        let advancedCoursesTranslated: fields[] = [];
        let basicCoursesTranslated: fields[] = [];
        advancedCourses.forEach((value, index) => {
            advancedCoursesTranslated[index] = mappings.get(value);
        });
        basicCourses.forEach((value, index) => {
            basicCoursesTranslated[index] = mappings.get(value);
        });
        super(advancedCoursesTranslated, basicCoursesTranslated);
    }
}
