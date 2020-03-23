import { Option } from "../scripts/option.js";
import { fields as f } from "./fields.js";

export let options = new Map();

options.set(1, new Option(
    [f.FS, f.M, f.D],
    [f.GW, f.GW, f.NW, f.R, f.SP, [f.FS, f.NW, f.INF], [f.FS, f.NW, f.INF, f.KF, f.PHI]]
));
options.set(2, new Option(
    [f.FS, f.NW, f.D],
    [f.GW, f.GW, f.M, f.R, f.SP, [f.FS, f.NW, f.INF], [f.FS, f.NW, f.INF, f.KF, f.PHI]]
));
options.set(3, new Option(
    [f.FS, f.D, f.GW],
    [f.GW, f.M, f.NW, f.R, f.SP, [f.FS, f.NW, f.INF], [f.FS, f.NW, f.INF, f.KF, f.PHI]]
));
options.set(4, new Option(
    [f.FS, f.FS, f.M],
    [f.D, f.GW, f.GW, f.NW, f.R, f.SP, [f.FS, f.NW, f.INF, f.KF, f.PHI]]
));
options.set(5, new Option(
    [f.FS, f.FS, f.NW],
    [f.D, f.GW, f.GW, f.M, f.R, f.SP, [f.FS, f.NW, f.INF, f.KF, f.PHI]]
));
