import {Combination} from "../scripts/combination.js";
import {fields} from "../data/fields.js";

import {expect} from "chai";
import "mocha";

describe("Combination", () => {
    describe("equal", () => {
        it("should equal the same combination", () => {
            let combination_A = new Combination([fields.FS, fields.NW, fields.D], []);
            let combination_B = new Combination([fields.D, fields.FS, fields.NW], []);
            expect(combination_A.equals(combination_B)).to.be.true;
        });
        it("shouldn't equal a different combination", () => {
            let combination_A = new Combination([fields.SP, fields.FS, fields.GW], []);
            let combination_B = new Combination([fields.GW, fields.D, fields.FS], []);
            expect(combination_A.equals(combination_B)).to.be.false;
        });
    });
});
