const Settings = require("./settings");

/**
 * @returns {Settings}
 */
function parseArgs(p) {
    const args = p.argv.splice(2);
    const settings = new Settings();

    settings.showHelp = args.length === 0;

    let instance = 0;

    for (let i = 0; i < args.length; i++) {

        const a = args[i];
        console.log(a);
        
        if (a === "--help" || a === "-h" || a === "--version" || a === "-v") {
            settings.showHelp = true;
            break;
        }
        else if (i === 0) {
            settings.file = a;
        }
        else if (a === "--output" || a === "-o") {
            settings.output = args[++i];
        }
        else if (a === "--all") {
            settings.mode = "all";
        }
        else if (a === "--first") {
            settings.mode = "first";
        }
        else if (a === "---") {
            if (instance === 0) {
                instance = 1;
            }
            else if (instance === 1) {
                instance = 2;
                ++i;    //  Skip "for"
            }
            else {
                throw new Error("Invalid command");
            }
        }
        else if (instance === 1) {
            settings.textToReplace.push(a);
        }
        else if (instance === 2) {
            settings.newText.push(a);
        }
        else {
            throw new Error("Invalid command");
        }
    }

    return settings;
}

module.exports = parseArgs;