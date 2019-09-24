let wahl = new Kombination(
    faecher.BIOLOGIE,
    faecher.MATHEMATIK,
    faecher.ENGLISCH
);

let kombination_1 = new Kombination(
    faecher.ENGLISCH,
    faecher.MATHEMATIK,
    faecher.PHYSIK
);

$(() => {
    $('#output').text(wahl.equals(kombination_1));
});