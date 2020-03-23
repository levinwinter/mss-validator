import { subjects as s } from "./data/subjects.js";
import { fields } from "./data/fields.js";
import { Choice } from "./scripts/choice.js";
import { Option } from "./scripts/option.js";
import { options } from "./data/options.js";

$(() => {
    let choice = new Choice(
        [s.D, s.E, s.M],
        [s.EKSK, s.G, s.BI, s.CH, s.ER, s.SP, s.PI]);

    let possibleAdvancedCourses: fields[] = [];
    let possibleBasicCourses: fields[] = [];

    options.forEach((option: Option, optionNumber: number) => {
        if (option.isSupersetOf(choice)) {
            if (option.equals(choice)) alert("option " + optionNumber + " equals your choice!");
            option.possibleAdvancedCourses(choice).forEach((advancedCourse: fields) => {
                if (!possibleAdvancedCourses.includes(advancedCourse)) possibleAdvancedCourses.push(advancedCourse);
            });
            option.possibleBasicCourses(choice).forEach((basicCourse: fields) => {
                if (!possibleBasicCourses.includes(basicCourse)) possibleBasicCourses.push(basicCourse);
            });
        }
    });

    console.log("possible advanced courses: " + possibleAdvancedCourses);
    console.log("possible basic courses: " + possibleBasicCourses);
});
