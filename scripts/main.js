import { Combination } from "./Combinations.js";
import { subjects } from './subjects.js';

let wahl = new Combination(
    subjects.BI,
    subjects.M,
    subjects.E
);

let kombination_1 = new Combination(
    subjects.BI,
    subjects.F,
    subjects.M
);

// $(() => {
//     $('#output').text(wahl.equals(kombination_1));
// });
