import { subjects } from "./data/subjects.js";
import { fields } from "./data/fields.js";
import { Choice } from "./models/choice.js";
import { Option } from "./models/option.js";
import { options } from "./data/options.js";
import { mappings } from "./data/mappings.js";

let choice: Choice = new Choice([], []);
let possibleAdvancedCourses: fields[] = [];
let possibleBasicCourses: fields[] = [];

let LKButtons = $(".choice ul li .LK.button");
let GKButtons = $(".choice ul li .GK.button");

$(function () {
    attachClickEventChoice();
});

function attachClickEventChoice() {
    $(".choice ul li .button").click(function () {
        toggleButton($(this));
        updateChoice();
        updatePossibleCourses();
        updateButtons(LKButtons, possibleAdvancedCourses);
        updateButtons(GKButtons, possibleBasicCourses);
        lockNeighbour();
        hideUnavailable();
    })
}

function updateChoice() {
    let advancedCourses: subjects[] = [];
    let basicCourses: subjects[] = [];

    LKButtons.each(function () {
        if (getButtonState($(this)) === "active") {
            let id = $(this).parent().attr("id") as keyof typeof subjects;
            advancedCourses.push(subjects[id]);
        }
    });
    GKButtons.each(function () {
        if (getButtonState($(this)) === "active") {
            let id = $(this).parent().attr("id") as keyof typeof subjects;
            basicCourses.push(subjects[id]);
        }
    });

    choice = new Choice(advancedCourses, basicCourses);
}

function updatePossibleCourses() {
    possibleAdvancedCourses = [];
    possibleBasicCourses = [];
    options.forEach((option: Option, optionNumber: number) => {
        if (option.isSupersetOf(choice)) {
            if (option.equals(choice)) alert("Du hast dich für Kombination Nr. " + optionNumber + " entschieden!");
            option.possibleAdvancedCourses(choice).forEach((advancedCourse: fields) => {
                if (!possibleAdvancedCourses.includes(advancedCourse)) possibleAdvancedCourses.push(advancedCourse);
            });
            option.possibleBasicCourses(choice).forEach((basicCourse: fields) => {
                if (!possibleBasicCourses.includes(basicCourse)) possibleBasicCourses.push(basicCourse);
            });
        }
    });
}

function updateButtons(buttons: JQuery, possibleCourses: fields[]) {
    buttons.each(function () {
        if ($(this).hasClass("active")) return;
        if ($(this).hasClass("forbidden")) return;

        let id = $(this).parent().attr("id") as keyof typeof subjects;
        console.log("possible courses: " + possibleCourses);
        console.log("id: " + id);
        console.log("mappings.get: " + mappings.get(subjects[id]));
        if (possibleCourses.includes(mappings.get(subjects[id]))) {
            console.log("reached");
            setButtonState($(this), "none");
        }
        else {
            console.log("disabled");
            setButtonState($(this), "disabled");
        }
    });
}

function lockNeighbour() {
    $(".choice ul li .button").each(function () {
        if (!$(this).hasClass("active")) return;

        let opposite: string = $(this).hasClass("LK") ? "GK" : "LK";

        let otherButton = $(this).siblings("." + opposite + ".button");
        if (!otherButton.hasClass("forbidden")) setButtonState(otherButton, "disabled");
    });
}

function hideUnavailable() {
    $(".choice ul li").each(function () {
        let LK = $(this).children(".LK.button");
        let GK = $(this).children(".GK.button");

        if ((getButtonState(LK) === "disabled" || getButtonState(LK) === "forbidden") &&
            (getButtonState(GK) === "disabled" || getButtonState(GK) === "forbidden")) {
            $(this).fadeOut();
        }
        else {
            $(this).fadeIn();
        }
    })
}

function getButtonState(button: JQuery): string  {
    if (button.hasClass("active")) return "active";
    if (button.hasClass("disabled")) return "disabled";
    if (button.hasClass("forbidden")) return "forbidden";
    return "none";
}

function setButtonState(button: JQuery, state: string): void {
    button.removeClass("active").removeClass("disabled").removeClass("forbidden");
    if (state !== "none") button.addClass(state);
}

function toggleButton(button: JQuery) {
    switch (getButtonState(button)) {
        case "forbidden": break;
        case "disabled": break;
        case "active": {
            setButtonState(button, "none");
            break;
        }
        case "none": {
            setButtonState(button, "active");
            break;
        }
    }
}
