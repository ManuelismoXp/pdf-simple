"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.spacedTable = exports.stripedTable = exports.simpleTable = exports.save = exports.pdfSimple = void 0;
const jspdf_1 = __importDefault(require("jspdf"));
const simple_table_1 = require("./components/simple-table");
Object.defineProperty(exports, "simpleTable", { enumerable: true, get: function () { return simple_table_1.simpleTable; } });
const striped_table_1 = require("./components/striped-table");
Object.defineProperty(exports, "stripedTable", { enumerable: true, get: function () { return striped_table_1.stripedTable; } });
const spaced_table_1 = require("./components/spaced-table");
Object.defineProperty(exports, "spacedTable", { enumerable: true, get: function () { return spaced_table_1.spacedTable; } });
const pdfSimple = (options) => {
    return options ? new jspdf_1.default(options) : new jspdf_1.default();
};
exports.pdfSimple = pdfSimple;
const save = (pdf, filename) => {
    pdf.save(filename);
};
exports.save = save;
