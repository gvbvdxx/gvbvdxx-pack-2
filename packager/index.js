var main = require("./mainarray.js");
var mod = {
	packager:function (contents,name) {
		var code = contents.split("\n");
		var genaratedCode = [];
		genaratedCode.push(`(function () {`);
		genaratedCode.push(`//ignore these variables, for the module stuff.`);
		genaratedCode.push(`    var module = {exports:null,filename:JSON.stringify(name)};`);
		genaratedCode.push(`    var require = function (a) {return gp_require(a,${JSON.stringify(name)});};`);
		genaratedCode.push(`    var var__gvbvdxx_pack_filedata = null; //prevent overwrite`);
		genaratedCode.push(`    var cur_file = ${JSON.stringify(name)};`);
		for (var i in code) {
			genaratedCode.push(`    ${code[i].replaceAll("\t","    ")}`);
		}
		genaratedCode.push(`    return module;`);
		genaratedCode.push(`})();`);
		return genaratedCode.join("\n");
	},
	main:main,
	convertStringToFile: (string) => {
		var newtext = "";
		for (var t of string) {
			if (t == "/") {
				newtext += "_";
			} else {
				if (t == "\\") {
					newtext += "_";
				} else {
					newtext += t;
				}
			}
		}
		return newtext;
	},
	safeText: (text) => {
		return JSON.stringify(text)
	}
}
module.exports = mod;