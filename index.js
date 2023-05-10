import inquirer from 'inquirer';
import { writeFile } from 'fs';
import Circle from "./lib/circle.js"
import Triangle from "./lib/triangle.js"
import Square from "./lib/square.js"
import SVG from './lib/svg.js';

inquirer.prompt([
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

]).then((data) => {
    let shape;
    if(data.shape === "Circle") {
        shape = new Circle()
       
    }
    if(data.shape === "Triangle") {
        shape = new Triangle()
       
    }
    if(data.shape === "Square") {
        shape = new Square()
        
    }
    shape.setColor(data.shapeColor)

    const svg = new SVG()
    svg.setText(data.text, data.textColor)
    svg.setShape(shape)
    const svgPath = `./examples/${data.shape}.svg`;

    //Generate the svg logo here.
    return writeFile(svgPath, svg.render(), (err) =>
      err ? console.error(err) : console.log('Generated logo.svg')
    )
  })
  .catch((err) => console.error(err));