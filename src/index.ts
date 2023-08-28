import jsPDF, { jsPDFOptions } from "jspdf";

import { simpleTable } from "./components/simple-table";
import { stripedTable } from './components/striped-table';
import { spacedTable } from "./components/spaced-table";

const SimplePDF = (options?: jsPDFOptions): jsPDF => {
    return options ? new jsPDF(options) : new jsPDF();
}

const save = (pdf: jsPDF, filename: string): void => {
    pdf.save(filename);
}

export { SimplePDF, save, simpleTable, stripedTable, spacedTable }