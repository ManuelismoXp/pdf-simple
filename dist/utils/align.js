"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.align = void 0;
const align = (pdf, x, y, text, width, position) => {
    if (position === 'center')
        pdf.text(text.toString(), x + (width - pdf.getTextWidth(text.toString())) / 2, y);
    if (position === 'left' || position === undefined)
        pdf.text(text.toString(), x + 1, y);
    if (position === 'right')
        pdf.text(text.toString(), (x + width) - pdf.getTextWidth(text.toString()) - 1, y);
};
exports.align = align;
