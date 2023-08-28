"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripedTable = void 0;
const align_1 = require("../utils/align");
const stripedTable = (pdf, x, y, headers, headerheight, dataset, border = false) => {
    const widths = [];
    let newX = x;
    headers === null || headers === void 0 ? void 0 : headers.forEach(head => {
        var _a, _b;
        widths.push({ width: head.width, align: (_a = head.align) !== null && _a !== void 0 ? _a : undefined });
        pdf.setFillColor(100, 100, 100);
        pdf.rect(newX, y - (headerheight - 1.5), head.width, headerheight, border ? 'FD' : 'F');
        pdf.setTextColor(255, 255, 255);
        (0, align_1.align)(pdf, newX, y, head.text, head.width, (_b = head.align) !== null && _b !== void 0 ? _b : undefined);
        newX += head.width;
    });
    dataset === null || dataset === void 0 ? void 0 : dataset.forEach((data, index) => {
        y += headerheight;
        let newX = x;
        data === null || data === void 0 ? void 0 : data.forEach((element, i) => {
            var _a;
            const mod = (index % 2);
            if (mod === 0) {
                border ? pdf.rect(newX, y - (headerheight - 1.5), widths[i].width, headerheight, 'S') : '';
                pdf.setTextColor(0, 0, 0);
            }
            else {
                pdf.setFillColor(235, 235, 235);
                pdf.rect(newX, y - (headerheight - 1.5), widths[i].width, headerheight, border ? 'FD' : 'F');
                pdf.setTextColor(0, 0, 0);
            }
            (0, align_1.align)(pdf, newX, y, element, widths[i].width, (_a = widths[i].align) !== null && _a !== void 0 ? _a : undefined);
            newX += widths[i].width;
        });
    });
};
exports.stripedTable = stripedTable;
