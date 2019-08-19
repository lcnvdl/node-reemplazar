class Settings {
    constructor() {
        this.mode = "all";
        this.showHelp = false;
        this.file = "";
        this.output = null;
        this.textToReplace = [];
        this.newText = [];
    }

    getTextToReplace() {
        return this.textToReplace.join(" ");
    }

    getNewText() {
        return this.newText.join(" ");
    }
}

module.exports = Settings;