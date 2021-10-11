"use strict";
/**
* @ignore true
* @title Zoom and Pan Element
* @description
* @tags [elements, maps]
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zoom_pan_js_1 = __importDefault(require("./zoom-pan.js"));
const index_js_1 = require("../../index.js");
let interactive = new zoom_pan_js_1.default(index_js_1.getScriptName(), 600, 600);
// draw rectangles for debugging
let w = 25;
let h = 25;
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        let x = i * w;
        let y = j * h;
        let rect = interactive.rectangle(x, y, w, h);
        rect.style.stroke = '#999999';
        rect.root.setAttribute('vector-effect', 'non-scaling-stroke');
    }
}
interactive.text(0, -10, '(0,0)');
interactive.circle(0, 0, 3).style.fill = '#404040';
interactive.circle(100, 100, 50).style.fill = 'cornflowerblue';
interactive.circle(200, 100, 25).style.fill = 'grey';
interactive.control(300, 300);
//# sourceMappingURL=zoom-pan-element.js.map