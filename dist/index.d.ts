import jsPDF, { jsPDFOptions } from "jspdf";
import { simpleTable } from "./components/simple-table";
import { stripedTable } from './components/striped-table';
import { spacedTable } from "./components/spaced-table";
declare const SimplePDF: (options?: jsPDFOptions) => jsPDF;
declare const save: (pdf: jsPDF, filename: string) => void;
export { SimplePDF, save, simpleTable, stripedTable, spacedTable };
