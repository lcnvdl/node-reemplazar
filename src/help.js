const colog = require("colog");

function showHelp() {
    colog.info(colog.u("Help"));
    colog.format("reemplazar <colorCyan>[filename]</colorCyan> --- <colorCyan>[text to replace]</colorCyan> --- for <colorCyan>[new text]</colorCyan>");
    colog.format("reemplazar <colorCyan>[filename]</colorCyan> --output <colorCyan>[new filename]</colorCyan> --- <colorCyan>[text to replace]</colorCyan> --- for <colorCyan>[new text]</colorCyan>");
    colog.info(" ");
}

module.exports = showHelp;