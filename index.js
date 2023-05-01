

var questions = [
    {
        type: "input",
        name: "text",
        message: "Which letters would you like in your SVG? (up to 3 letters)",
        validate: function(input) {
            if(input.length < 3) {
                return false
            } return true
        } 
    },
    {
        type: "input",
        name: "textColor",
        message: "What color would you like the text to be? (color keyword OR a hexadecimal number)",
    },
    {
        type: "list",
        name: "shape",
        message: "What shape would you like your SVG to be?",
        choices: ["Circle", "Triangle", "Square"] 
    },
    {
        type: "input",
        name: "shapeColor",
        message: "What color would you like your shape to be? (color keyword OR a hexadecimal number)",
    },

]