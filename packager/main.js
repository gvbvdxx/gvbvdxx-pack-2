(function () {
    var dirname = "";
	var __GP_elements = {};
	var __GP_global_vars = {};
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
    var gp_require = ((a,filename) => {
		if (!filename) {
			throw new Error("Do NOT use gp_require, instead use require.");
		}
		if (!a) {
			throw new Error("Module must have a path to the file.");
		}
        if (a == "log") {
            return {
                log: function (b) {
                    console.log("%c[" + filename + "]:" + b, "color:black;font-weight:bold;");
                },
                warn: function (b) {
                    console.warn("%c[" + filename + "]:" + b, "color:#e67700;font-weight:bold;background:yellow;");
                },
                error: function (b) {
                    console.error("%c[" + filename + "]:" + b, "color:#f03e3e;font-weight:bold;background:#c92a2a;");
                }
            };
        }
		if (a == "globalvars") { 
			return {
				setVar:function (name,val) {
					__GP_global_vars[name] = val;
					return val;
				},
				getVar:function () {
					return __GP_global_vars[name];
				}
			};
		}
		if (a == "elements") {
			return {
				appendElements: function (elm,appendArray) {
					for (var appendElm of appendArray) {
						elm.append(appendElm);
					}
				},
				createElementsFromJSON: function (jsonelmArray) { 
					function runElements(arry) {
						var myRealElms = [];
						for (var elm of arry) {
							var realElm = document.createElement(elm.element);
							for (var attriName of Object.keys(elm)) {
								if (!(
								(attriName == "element") ||
								(attriName == "children")
								)){
									var attributeValue = elm[attriName];
									var setattri = true;
									if (attriName == "gid") {
										__GP_elements[attributeValue] = realElm;
										setattri = false;
									}
									if (attriName == "style") {
										for (var styleName of Object.keys(attributeValue)) {
											var styleValue = attributeValue[styleName];
											realElm.style[styleName] = styleValue;
										}
										setattri = false;
									}
									if (attriName == "innerHTML") {
										realElm.innerHTML = attributeValue;
										setattri = false;
									}
									if (attriName == "textContent") {
										realElm.textContent = attributeValue;
										setattri = false;
									}
									if (attriName == "src") {
										realElm.src = attributeValue;
										setattri = false;
									}
									if (attriName == "value") {
										realElm.value = attributeValue;
										setattri = false;
									}
									if (attriName == "min") {
										realElm.min = attributeValue;
										setattri = false;
									}
									if (attriName == "max") {
										realElm.max = attributeValue;
										setattri = false;
									}
									if (attriName == "width") {
										realElm.width = attributeValue;
										setattri = false;
									}
									if (attriName == "height") {
										realElm.height = attributeValue;
										setattri = false;
									}
									if (attriName == "className") {
										realElm.className = attributeValue;
										setattri = false;
									}
									if (setattri) {
										realElm.setAttribute(attriName,attributeValue);
									}
								}
							}
							
							
							if (elm.children) {
								var elmsToAppend = runElements(elm.children);
								for (var elmAppend of elmsToAppend) {
									realElm.append(elmAppend);
								}
							}
							myRealElms.push(realElm);
						}
						return myRealElms;
					}
					return runElements(jsonelmArray);
				},
				getById: function (id) {
					return document.getElementById(id);
				},
				setGPId: function (el,id) {
					__GP_elements[id] = el;
					return el;
				},
				getGPId: function (id) {
					if (__GP_elements[id]) {
						return __GP_elements[id];
					}
					return null;
				},
				body:document.body
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
    });
    var dirs = () => {
        var dirsgen = [];
        for (var i in var__gvbvdxx_pack_filedata) {
            dirsgen.push(var__gvbvdxx_pack_filedata[i].name.replaceAll("\\", "/"));
        }
        return dirsgen;
    };
    var var__gvbvdxx_pack_filedata = {};
    var__gvbvdxx_pack_filedata = GPDATA.fileTemplate;
	try{
		gp_require("src/index.js","src/index.js");
	}catch(e){
		__gvbvdxx_pack_log.error("Gvbvdxx Pack", "Faild to start the program, check and make sure index.js is programmed correctly.");
	}
	delete GPDATA;
})();
