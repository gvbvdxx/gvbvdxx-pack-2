var elements = require("elements");
elements.appendElements(
    document.body,
    elements.createElementsFromJSON([{
                element: "style",
                innerHTML: require("file-loader").read("src/mystylesheet.css")
            }, {
                element: "div",
                children: [
                    {
                        element: "div",
                        textContent: "this is first div",
						style:{
							color:"green",
							background:"darkgreen",
							fontFamily:"arial",
							fontSize:"30px",
							fontWeight:"bold"
						}
                    }, {
                        element: "div",
                        textContent: "this is second div"
                    }
                ]
            }
        ]));
