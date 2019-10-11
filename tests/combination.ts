import {Combination} from "../scripts/combination.js";
import {fields} from "../scripts/fields.js";

import {expect} from "chai";
import "mocha";

describe("Combination", () => {
    describe("normalize", () => {
        it("should sort majors correctly", () => {
            let combination = new Combination([fields.FS, fields.M, fields.D]);
            combination.normalize();
            let combination_sorted = new Combination([fields.D, fields.FS, fields.M]);
            expect(combination).to.deep.equal(combination_sorted);
        });
        it("should even sort them when all majors are the same", () => {
            let combination = new Combination([fields.M, fields.M, fields.M]);
            combination.normalize();
            let combination_sorted = new Combination([fields.M, fields.M, fields.M]);
            expect(combination).to.deep.equal(combination_sorted);
        });
    });
    describe("equal", () => {
        it("should equal the same combination", () => {
            let combination_A = new Combination([fields.FS, fields.NW, fields.D]);
            let combination_B = new Combination([fields.D, fields.FS, fields.NW]);
            expect(combination_A.equals(combination_B)).to.be.true;
        });
        it("shouldn't equal a different combination", () => {
            let combination_A = new Combination([fields.SP, fields.FS, fields.GW]);
            let combination_B = new Combination([fields.GW, fields.D, fields.FS]);
            expect(combination_A.equals(combination_B)).to.be.false;
        });
    });
});
