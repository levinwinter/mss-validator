let wahl = new Kombination(
    faecher.BI,
    faecher.M,
    faecher.E
);

let kombination_1 = new Kombination(
    faecher.BI,
    faecher.F,
    faecher.M
);

$(() => {
    $('#output').text(wahl.equals(kombination_1));
});