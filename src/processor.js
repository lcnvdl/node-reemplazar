const glob = require('glob-fs')({ gitignore: true });
const fs = require("fs");
const path = require("path");
const colog = require("colog");

const Processor = {
    process(settings) {
        const isPattern = settings.file.indexOf("*") !== -1;
        const isDirectory = fs.lstatSync(settings.file).isDirectory();

        const files = (isPattern || isDirectory) ? glob.readdirSync(settings.file) : [settings.file];
        let outputIsDir = false;

        if (settings.output) {
            if (files.length > 1 || settings.output[settings.output.length - 1] === "\\" || settings.output[settings.output.length - 1] === "/") {
                fs.mkdirSync(settings.output);
                outputIsDir = true;
            }
        }

        files.forEach(f => {

            colog.info("Working in file " + f);

            let content = fs.readFileSync(f, "utf-8");

            do {
                content = content.replace(settings.getTextToReplace(), settings.getNewText());
            } while (settings.all && content.indexOf(settings.getTextToReplace()) > 0);

            let destination;

            if (settings.output) {
                if (outputIsDir) {
                    destination = path.join(settings.output, f);
                }
                else {
                    destination = settings.output;
                }
            }
            else {
                destination = f;
            }

            fs.writeFileSync(destination, content, "utf-8");
        });

        colog.success(`Replaced in ${files.length} files`);
    }
}

module.exports = Processor;