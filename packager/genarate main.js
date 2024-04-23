var UglifyJS = require("uglify-js");
var fs = require("fs");
function minify(content) {
		var uglifyResult = UglifyJS.minify(content, {
			toplevel: true,
			warnings: true,
			parse: {
				
			},
			mangle: {
				reserved: ["window.GPDATA","GPDATA","window"]
			},
			compress: {
				passes: 10,
				v8:true
			},
			output: {
				beautify: false,
				preamble: "/* This file has been minimized to save space and load times, I don't recommend editing this directly. */"
			}
		});
		if (uglifyResult.error) {
			throw new Error(JSON.stringify(uglifyResult));
		}
		return uglifyResult.code;
	}
var contents = fs.readFileSync("./packager/main.js", {
    encoding: "UTF-8"
});
var extracted = contents.split("\n");
var comments = fs.readFileSync("./packager/comments.js", {
    encoding: "UTF-8"
});
var extractedcomments = comments.split("\n");
function makeText(text) {
    return JSON.stringify(text);
}
var contents = [
"module.exports = ["];
var strings = [];
for (var i in extractedcomments) {
    if (extractedcomments[i]) {
        var txt = makeText(extractedcomments[i]) + ",";
    } else {
        var txt = makeText(extractedcomments[i]) + "";
    }
    strings.push(txt);
    //console.log(`Added Line ${txt}`)
}
for (var i in extracted) {
    if (extracted[i]) {
        var txt = makeText(extracted[i]) + ",";
    } else {
        var txt = makeText(extracted[i]) + "";
    }
    strings.push(txt);
    //console.log(`Added Line ${txt}`);
}
for (var i in strings) {
    contents.push(strings[i]);
}
contents.push("];");

fs.writeFileSync("packager/mainarray.js",
[].join("\n")+"\n"+contents.join(""), {
    encoding: "UTF-8"
});
console.log("main gen complete.")