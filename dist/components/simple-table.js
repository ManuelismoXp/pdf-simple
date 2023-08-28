"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simpleTable = void 0;
const align_1 = require("../utils/align");
const simpleTable = (pdf, x, y, headers, headerheight, dataset, border = false) => {
    const widths = [];
    let newX = x;
    headers === null || headers === void 0 ? void 0 : headers.forEach(head => {
        var _a, _b;
        widths.push({ width: head.width, align: (_a = head.align) !== null && _a !== void 0 ? _a : undefined });
        border ? pdf.rect(newX, y - (headerheight - 1.5), head.width, headerheight, 'S') : '';
        (0, align_1.align)(pdf, newX, y, head.text, head.width, (_b = head.align) !== null && _b !== void 0 ? _b : undefined);
        newX += head.width;
    });
    dataset === null || dataset === void 0 ? void 0 : dataset.forEach(data => {
        y += headerheight;
        let newX = x;
        data === null || data === void 0 ? void 0 : data.forEach((element, index) => {
            border ? pdf.rect(newX, y - (headerheight - 1.5), widths[index].width, headerheight, 'D') : '';
            (0, align_1.align)(pdf, newX, y, element, widths[index].width, widths[index].align);
            newX += widths[index].width;
        });
    });
};
exports.simpleTable = simpleTable;
