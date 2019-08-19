const colog = require("colog");

function logo(pkg) {
    colog.log(" ");
    colog.log(colog.bgCyan("                    "));
    colog.log(colog.colorCyan(
        colog.bgWhite("     REEM") +
        colog.bgYellow("PL") +
        colog.bgWhite("AZAR     ")));
    colog.log(colog.colorBlue(colog.bgCyan(" lucianorasente.com ")));
    colog.log(" ");
    colog.log(colog.magenta("Version " + pkg.version));
    colog.log(" ");
}

module.exports = logo;