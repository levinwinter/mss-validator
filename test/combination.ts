import {Combination} from "../scripts/combination.js";
import {subjects} from "../scripts/subjects.js";
import {expect} from "chai";
import "mocha";

describe("Combination", () => {
    describe("normalize", () => {
        it("should sort majors correctly", () => {
            let combination = new Combination(subjects.BI, subjects.M, subjects.E);
            combination.normalize();
            let combination_sorted = new Combination(subjects.E, subjects.M, subjects.BI);
            expect(combination).to.deep.equal(combination_sorted);
        });
        it("should even sort them when all majors are the same", () => {
            let combination = new Combination(subjects.M, subjects.M, subjects.M);
            combination.normalize();
            let combination_sorted = new Combination(subjects.M, subjects.M, subjects.M);
            expect(combination).to.deep.equal(combination_sorted);
        });
    });
    describe("equal", () => {
        it("should equal the same combination", () => {
            let combination_A = new Combination(subjects.SP, subjects.E, subjects.F);
            let combination_B = new Combination(subjects.E, subjects.F, subjects.SP);
            expect(combination_A.equals(combination_B)).to.be.true;
        });
        it("shouldn't equal a different combination", () => {
            let combination_A = new Combination(subjects.SP, subjects.E, subjects.F);
            let combination_B = new Combination(subjects.E, subjects.BI, subjects.F);
            expect(combination_A.equals(combination_B)).to.be.false;
        });
    });
});
