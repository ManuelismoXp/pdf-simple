import jsPDF, { jsPDFOptions } from "jspdf";
import { simpleTable } from "./components/simple-table";
import { stripedTable } from './components/striped-table';
import { spacedTable } from "./components/spaced-table";
declare const pdfSimple: (options?: jsPDFOptions) => jsPDF;
declare const save: (pdf: jsPDF, filename: string) => void;
export { pdfSimple, save, simpleTable, stripedTable, spacedTable };
