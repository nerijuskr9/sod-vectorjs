"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const element_js_1 = __importDefault(require("./element.js"));
const t_span_js_1 = __importDefault(require("./t-span.js"));
/**
* Text is a basic element containing string contents
*/
class Text extends element_js_1.default {
    /**
    * Constructs text at the position (x,y) with the provided string
    */
    constructor(x, y, str = '') {
        let text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttributeNS(null, 'x', x.toString());
        text.setAttributeNS(null, 'y', y.toString());
        if (str != undefined) {
            text.innerHTML = str;
        }
        super(text);
    }
    // comment inherited from base class
    setAttribute(name, value) {
        this.root.setAttribute(name, value);
        return this;
    }
    // comment inherited from base class
    getAttribute(name) {
        return this.root.getAttribute(name);
    }
    /**
    * Sets the contents of this element
    */
    set contents(str) {
        this.root.innerHTML = str;
    }
    /**
    * Sets the contents of this element
    */
    get contents() {
        return this.root.innerHTML;
    }
    /**
    * Gets the x position of this element
    */
    get x() {
        return Number(this.root.getAttribute('x'));
    }
    /**
    * Gets the y position of this element
    */
    get y() {
        return Number(this.root.getAttribute('y'));
    }
    /**
    * Sets the x position of this element
    */
    set x(value) {
        this.root.setAttribute('x', value.toString());
    }
    /**
    * Sets the y position of this element
    */
    set y(value) {
        this.root.setAttribute('y', value.toString());
    }
    /**
    * Returns the length of the text
    */
    get length() {
        const context = document.createElement("canvas").getContext("2d");
        return context.measureText(this.root.innerHTML).width;
    }
    text(x, y, str) {
        let text = new Text(x, y, str);
        this.root.appendChild(text.root);
        return text;
    }
    tspan(text) {
        let tspan = new t_span_js_1.default(text);
        this.root.appendChild(tspan.root);
        return tspan;
    }
}
exports.default = Text;
//# sourceMappingURL=text.js.map