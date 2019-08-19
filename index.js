#!/usr/bin/env node

const { logo, parseArgs, help } = require("./src/program");
const Processor = require("./src/processor");

logo(require("./package.json"));

const settings = parseArgs(process);

if (settings.showHelp) {
    help();
}
else {
    Processor.process(settings);
}
