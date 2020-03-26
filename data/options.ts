import { Option } from "../models/option.js";
import {fields as fields } from "./fields.js";

export let options = new Map();

let template: (fields[] | fields)[] = [
    fields.D,
    fields.FS,
    fields.GW,
    fields.GW,
    fields.M,
    fields.NW,
    fields.R,
    fields.SP,
    [fields.FS, fields.NW, fields.INF],
    [fields.FS, fields.NW, fields.INF, fields.KF, fields.PHI]
];

function translate(input: string): (fields[] | fields)[] {
    let translation: (fields[] | fields)[] = [];

    if (input.length !== template.length) {
        throw new Error("length of input does not match with length of template");
    }

    let split: string[] = input.split("");
    split.forEach(function (value, index) {
        if (value === "X") translation.push(template[index]);
    });

    return translation;
}

options.set(1, new Option([fields.FS, fields.M, fields.D], translate("--XX-XXXXX")));
options.set(2, new Option([fields.FS, fields.NW, fields.D], translate("--XXX-XXXX")));
options.set(3, new Option([fields.FS, fields.D, fields.GW], translate("--X-XXXXXX")));
options.set(4, new Option([fields.FS, fields.FS, fields.M], translate("X-XX-XXX-X")));
options.set(5, new Option([fields.FS, fields.FS, fields.NW], translate("X-XXX-XX-X")));
options.set(6, new Option([fields.FS, fields.FS, fields.GW], translate("X-X-XXOOOXX-X")));
options.set(7, new Option([fields.FS, fields.M, fields.NW], translate("X-XX--XXXX")));
options.set(8, new Option([fields.FS, fields.M, fields.INF], translate("X-XX-XXX-X")));
options.set(9, new Option([fields.FS, fields.M, fields.GW], translate("X-X--XXXXX")));
options.set(10, new Option([fields.FS, fields.NW, fields.NW], translate("X-XXX-XX-X")));
options.set(11, new Option([fields.FS, fields.NW, fields.GW], translate("X-X-X-XXXX")));
options.set(12, new Option([fields.FS, fields.NW, fields.INF], translate("X-XXX-XX-X")));
options.set(13, new Option([fields.M, fields.NW, fields.D], translate("-XXX--XXXX")));
options.set(14, new Option([fields.M, fields.D, fields.GW], translate("-XX--XXXXX")));
options.set(15, new Option([fields.M, fields.NW, fields.GW], translate("XXX---XXXX")));
options.set(16, new Option([fields.NW, fields.NW, fields.D], translate("-XXXX-XX-X")));
options.set(17, new Option([fields.M, fields.D, fields.INF], translate("-XXX-XXX-X")));
options.set(18, new Option([fields.NW, fields.D, fields.GW], translate("-XX-X-XXXX")));
options.set(19, new Option([fields.FS, fields.M, fields.SP], translate("X-XX-XX-XX")));
options.set(20, new Option([fields.FS, fields.M, fields.R], translate("X-XX-X-XXX")));
options.set(21, new Option([fields.FS, fields.M, fields.KF], translate("X-XX-XXXX-")));
options.set(22, new Option([fields.NW, fields.D, fields.INF], translate("-XXXX-XX-X")));
options.set(23, new Option([fields.FS, fields.NW, fields.SP], translate("X-XXX-X-XX")));
options.set(24, new Option([fields.FS, fields.NW, fields.R], translate("X-XXX--XXX")));
options.set(25, new Option([fields.FS, fields.NW, fields.KF], translate("X-XXX-XXX-")));
options.set(26, new Option([fields.M, fields.D, fields.SP], translate("-XXX-XX-XX")));
options.set(27, new Option([fields.M, fields.D, fields.R], translate("-XXX-X-XXX")));
options.set(28, new Option([fields.M, fields.D, fields.KF], translate("-XXX-XXXX-")));
options.set(29, new Option([fields.NW, fields.D, fields.SP], translate("-XXXX-X-XX")));
options.set(30, new Option([fields.NW, fields.D, fields.R], translate("-XXXX--XXX")));
options.set(31, new Option([fields.NW, fields.D, fields.KF], translate("-XXXX-XXX-")));

