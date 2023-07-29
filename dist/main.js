var GPDATA = {
 "fileTemplate": {
  "src_index.js": {
   "data": "(function () {\n//ignore these variables, for the module stuff.\n    var module = {exports:null,filename:JSON.stringify(name)};\n    var var__gvbvdxx_pack_filedata = null; //prevent overwrite\n    var cur_file = \"src\\\\index.js\";\n    //test script\r\n    var log = require(\"log\");\r\n    var moduleThing = require(\"src/module.js\");\r\n    var fileLoader = require(\"file-loader\");\r\n    log.log(\"Hello World!\");\r\n    log.log(fileLoader.read(\"src/module.js\"));\r\n    log.log(\"This file is \"+cur_file);\n    return module;\n})();",
   "name": "src\\index.js",
   "dirname": "src_index.js",
   "realdir": "src_index.js",
   "realdirNoReplacer": "src\\index.js",
   "uncompileddata": "//test script\r\nvar log = require(\"log\");\r\nvar moduleThing = require(\"src/module.js\");\r\nvar fileLoader = require(\"file-loader\");\r\nlog.log(\"Hello World!\");\r\nlog.log(fileLoader.read(\"src/module.js\"));\r\nlog.log(\"This file is \"+cur_file);"
  },
  "src_index.js.bak": {
   "data": "(function () {\n//ignore these variables, for the module stuff.\n    var module = {exports:null,filename:JSON.stringify(name)};\n    var var__gvbvdxx_pack_filedata = null; //prevent overwrite\n    var cur_file = \"src\\\\index.js.bak\";\n    var log = require(\"log\");\r\n    log.log(\"Hello World!\");\n    return module;\n})();",
   "name": "src\\index.js.bak",
   "dirname": "src_index.js.bak",
   "realdir": "src_index.js.bak",
   "realdirNoReplacer": "src\\index.js.bak",
   "uncompileddata": "var log = require(\"log\");\r\nlog.log(\"Hello World!\");"
  },
  "src_module.js": {
   "data": "(function () {\n//ignore these variables, for the module stuff.\n    var module = {exports:null,filename:JSON.stringify(name)};\n    var var__gvbvdxx_pack_filedata = null; //prevent overwrite\n    var cur_file = \"src\\\\module.js\";\n    module.exports ={\r\n        a:\"test, a\",\r\n        b:\"test, b\",\r\n        functionTest: function () {\r\n            try{\r\n                if (log) {\r\n                    console.log(log);\r\n                }\r\n            }catch(e){}\r\n            var log = require(\"log\");\r\n            log.log(\"test\");\r\n        }\r\n    };\r\n    \n    return module;\n})();",
   "name": "src\\module.js",
   "dirname": "src_module.js",
   "realdir": "src_module.js",
   "realdirNoReplacer": "src\\module.js",
   "uncompileddata": "module.exports ={\r\n\ta:\"test, a\",\r\n\tb:\"test, b\",\r\n\tfunctionTest: function () {\r\n\t\ttry{\r\n\t\t\tif (log) {\r\n\t\t\t\tconsole.log(log);\r\n\t\t\t}\r\n\t\t}catch(e){}\r\n\t\tvar log = require(\"log\");\r\n\t\tlog.log(\"test\");\r\n\t}\r\n};\r\n"
  }
 },
 "files": [
  {
   "data": "(function () {\n//ignore these variables, for the module stuff.\n    var module = {exports:null,filename:JSON.stringify(name)};\n    var var__gvbvdxx_pack_filedata = null; //prevent overwrite\n    var cur_file = \"src\\\\index.js\";\n    //test script\r\n    var log = require(\"log\");\r\n    var moduleThing = require(\"src/module.js\");\r\n    var fileLoader = require(\"file-loader\");\r\n    log.log(\"Hello World!\");\r\n    log.log(fileLoader.read(\"src/module.js\"));\r\n    log.log(\"This file is \"+cur_file);\n    return module;\n})();",
   "name": "src\\index.js",
   "dirname": "src_index.js",
   "realdir": "src_index.js",
   "realdirNoReplacer": "src\\index.js",
   "uncompileddata": "//test script\r\nvar log = require(\"log\");\r\nvar moduleThing = require(\"src/module.js\");\r\nvar fileLoader = require(\"file-loader\");\r\nlog.log(\"Hello World!\");\r\nlog.log(fileLoader.read(\"src/module.js\"));\r\nlog.log(\"This file is \"+cur_file);"
  },
  {
   "data": "(function () {\n//ignore these variables, for the module stuff.\n    var module = {exports:null,filename:JSON.stringify(name)};\n    var var__gvbvdxx_pack_filedata = null; //prevent overwrite\n    var cur_file = \"src\\\\index.js.bak\";\n    var log = require(\"log\");\r\n    log.log(\"Hello World!\");\n    return module;\n})();",
   "name": "src\\index.js.bak",
   "dirname": "src_index.js.bak",
   "realdir": "src_index.js.bak",
   "realdirNoReplacer": "src\\index.js.bak",
   "uncompileddata": "var log = require(\"log\");\r\nlog.log(\"Hello World!\");"
  },
  {
   "data": "(function () {\n//ignore these variables, for the module stuff.\n    var module = {exports:null,filename:JSON.stringify(name)};\n    var var__gvbvdxx_pack_filedata = null; //prevent overwrite\n    var cur_file = \"src\\\\module.js\";\n    module.exports ={\r\n        a:\"test, a\",\r\n        b:\"test, b\",\r\n        functionTest: function () {\r\n            try{\r\n                if (log) {\r\n                    console.log(log);\r\n                }\r\n            }catch(e){}\r\n            var log = require(\"log\");\r\n            log.log(\"test\");\r\n        }\r\n    };\r\n    \n    return module;\n})();",
   "name": "src\\module.js",
   "dirname": "src_module.js",
   "realdir": "src_module.js",
   "realdirNoReplacer": "src\\module.js",
   "uncompileddata": "module.exports ={\r\n\ta:\"test, a\",\r\n\tb:\"test, b\",\r\n\tfunctionTest: function () {\r\n\t\ttry{\r\n\t\t\tif (log) {\r\n\t\t\t\tconsole.log(log);\r\n\t\t\t}\r\n\t\t}catch(e){}\r\n\t\tvar log = require(\"log\");\r\n\t\tlog.log(\"test\");\r\n\t}\r\n};\r\n"
  }
 ]
};/**
 * Genarated By: Gvbvdxx-Pack
 * do not copy or use this code for other programs, its only for this program,
 * do not edit or modify unless you know what your doing!
 **/
(function () {
    var dirname = "";
    var __gvbvdxx_pack_log = {
        log: function (a, b) {
            console.log("%c[" + a + "]:" + b, "color:black;font-weight:bold;");
        },
        warn: function (a, b) {
            console.warn("%c[" + a + "]:" + b, "color:#ffa94d;font-weight:bold;background:#d9480f;");
        },
        error: function (a, b) {
            console.error("%c[" + a + "]:" + b, "color:#ff8787;font-weight:bold;background:#c92a2a;");
        }
    };
    var require = (a) => {
        if (a == "log") {
   console.log(this);
            return {
                log: function (b) {
                    console.log("%c[" + "Gvbvdxx Pack Script" + "]:" + b, "color:black;font-weight:bold;");
                },
                warn: function (b) {
                    console.warn("%c[" + "Gvbvdxx Pack Script" + "]:" + b, "color:#e67700;font-weight:bold;background:yellow;");
                },
                error: function (b) {
                    console.error("%c[" + "Gvbvdxx Pack Script" + "]:" + b, "color:#f03e3e;font-weight:bold;background:#c92a2a;");
                }
            };
        }
        if (a == "html") {
            return class HTMLEmmitter {
                constructor() {
     /*support for writing html*/
     this.writeHTML = (contents, object) => {
      var subject = null;
      if (object) {
       subject = object;
      } else {
       subject = document.body;
      }
      subject.innerHTML += contents;
      return subject;
     };
     /*support for setting html*/
     this.setHTML = (contents, object) => {
      var subject = null;
      if (object) {
       subject = object;
      } else {
       subject = document.body;
      }
      subject.innerHTML = contents;
      return subject;
     };
    }

            };
        }
        if (a == "file-loader") {
            return {
                read: function (a) {
                    for (var i in var__gvbvdxx_pack_filedata) {
                        if (var__gvbvdxx_pack_filedata[i].realdirNoReplacer.replaceAll("\\", "/") == a) {
                            return var__gvbvdxx_pack_filedata[i].uncompileddata;
                        }
                    }
                    return null;
                }
            };
        }
        for (var i in var__gvbvdxx_pack_filedata) {
            if (var__gvbvdxx_pack_filedata[i].realdirNoReplacer.replaceAll("\\", "/") == a) {
    try{
     var module = eval(var__gvbvdxx_pack_filedata[i].data);
     if (module && module.filename) {
      return module.exports;
     } else {
      __gvbvdxx_pack_log.warn("Gvbvdxx Pack", "The current module \"+"+a+"+\" is using a old exporting method, please upgrade it to \"module.exports\" and not \"return\", the module value cannot be overwitten, this module will return null.");
      return null;
     }
    } catch(e) {
     __gvbvdxx_pack_log.error("Gvbvdxx Pack", "Failed To Extucute "+var__gvbvdxx_pack_filedata[i].realdirNoReplacer+". "+e);
     throw Error(e);
     return;
    }
            }
        }
        throw Error("Unable To Find Module " + a)
    };
    var dirs = () => {
        var dirsgen = [];
        for (var i in var__gvbvdxx_pack_filedata) {
            dirsgen.push(var__gvbvdxx_pack_filedata[i].name.replaceAll("\\", "/"));
        }
        return dirsgen;
    };
    var var__gvbvdxx_pack_filedata = {};
    var__gvbvdxx_pack_filedata = GPDATA.fileTemplate;
    __gvbvdxx_pack_log.log("Gvbvdxx Pack", "Loaded Files");
 try{
  require("src/index.js");
 }catch(e){}
 delete GPDATA;
})();
