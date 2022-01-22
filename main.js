var fs = require("fs");

var makeTheme = require("./theme.js");
var stillaTheme = require("./colors.js");

var stilla = makeTheme("stilla", stillaTheme);

function writeJSON(path, obj) {
    fs.writeFile(path, JSON.stringify(obj, null, 2), function(err) {
        if (err) {
            throw err;
        }
  });
}

writeJSON("./themes/stilla-color-theme.json", stilla);
