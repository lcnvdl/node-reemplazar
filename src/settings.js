class Settings {
    constructor() {
        this.mode = "all";
        this.showHelp = false;
        this.file = "";
        this.output = null;
        this.textToReplace = [];
        this.newText = [];
    }
}

module.exports = Settings;