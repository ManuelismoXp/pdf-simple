import jsPDF from "jspdf";
interface Header {
    text: string;
    width: number;
    align?: string;
}
type DataSet = string | number;
export declare const simpleTable: (pdf: jsPDF, x: number, y: number, headers: Header[], headerheight: number, dataset: DataSet[][], border?: boolean) => void;
export {};
