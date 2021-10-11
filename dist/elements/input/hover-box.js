"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const text_js_1 = __importDefault(require("../svg/text.js"));
const input_js_1 = __importDefault(require("./input.js"));
/**
* A button that when pressed fires an onclick event.
*/
class HoverBox extends input_js_1.default {
    constructor(str) {
        super();
        this._xBound = null;
        this._yBound = null;
        // Create a text element
        this.label = new text_js_1.default(0, 1, str);
        this.label.root.setAttribute('alignment-baseline', 'middle');
        this.label.root.style.textAnchor = 'middle';
        this.box = this.rectangle(0, -16, this.label.length * 2 + 16, 32);
        this.box.root.setAttribute('rx', '2px');
        this.box.fill = 'white';
        this.box.stroke = 'black';
        this.box.style.fillOpacity = '0.9';
        this.label.x = this.box.x + this.box.width / 2;
        this.appendChild(this.label);
        this._x = this.box.x;
        this._y = this.box.y;
        this.root.setAttribute('visibility', 'hidden');
    }
    set x(value) {
        if (this._xBound) {
            if (value >= this._xBound - this.box.width)
                value = this._xBound - this.box.width;
        }
        this._x = value;
        this.box.x = this._x;
        this.label.x = this.box.x + this.box.width / 2;
    }
    set y(value) {
        if (this._yBound) {
            if (value >= this._yBound - this.box.height)
                value = this._yBound - this.box.height;
            else if (value <= this.box.height)
                value = this.box.height;
        }
        this._y = value;
        this.box.y = this._y - 37;
        this.label.y = this.box.y + this.box.height / 2;
    }
    setBounds(x, y) {
        this._xBound = x;
        this._yBound = y;
    }
    setText(str) {
        this.label.contents = str;
        this.label.x = this.box.x + this.box.width / 2;
        this.label.y = this.box.y + this.box.height / 2;
        this.box.width = this.label.length * 2 + 16;
    }
    updatePosition(x, y) {
        this.x = x;
        this.y = y;
    }
    showHoverBox() {
        this.root.removeAttribute('visibility');
    }
    hideHoverBox() {
        this.root.setAttribute('visibility', 'hidden');
    }
}
exports.default = HoverBox;
//# sourceMappingURL=hover-box.js.map