import {Choice, Combination} from "./scripts/combination.js";
import {subjects} from "./scripts/subjects.js";
import {fields} from "./scripts/fields.js";

$(() => {
    let choice = new Choice([subjects.BI, subjects.M, subjects.E]);
    let combination = new Combination([fields.NW, fields.M, fields.FS]);

    $("#output").text(combination.equals(choice));
});
