import {subjects as s} from "./data/subjects.js";
import {fields as f} from "./data/fields.js";
import {Choice} from "./scripts/choice.js";
import {Option} from "./scripts/option.js";

$(() => {
    let choice = new Choice(
        [s.BI, s.M, s.SN],
        [s.D, s.ER, s.SP, s.EKSK]);
    let option = new Option(
        [f.NW, f.M, f.FS],
        [f.D, f.GW, f.R, f.SP]);

    console.log("equals: " + option.equals(choice));
    console.log("is superset of: " + option.isSupersetOf(choice));
    console.log("possible advanced courses: " + option.possibleAdvancedCourses(choice).toString());
    console.log("possible basic courses: " + option.possibleBasicCourses(choice).toString());
});
