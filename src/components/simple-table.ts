import jsPDF from "jspdf";
import { align } from "../utils/align";

interface Header {
    text: string,
    width: number,
    align?: string
}

type DataSet = string | number

export const simpleTable = (pdf: jsPDF, x: number, y: number, headers: Header[], headerheight: number, dataset: DataSet[][], border: boolean = false): void => {

    const widths: Array<{ width: number, align: string | undefined }> = [];
    let newX: number = x;

    headers?.forEach(head => {
        widths.push({ width: head.width, align: head.align ?? undefined });

        border ? pdf.rect(newX, y - (headerheight - 1.5), head.width, headerheight, 'S') : '';
        align(pdf, newX, y, head.text, head.width, head.align ?? undefined);

        newX += head.width;
    });

    dataset?.forEach(data => {
        y += headerheight;
        let newX: number = x;

        data?.forEach((element, index) => {
            border ? pdf.rect(newX, y - (headerheight - 1.5), widths[index].width, headerheight, 'D') : '';
            align(pdf, newX, y, element, widths[index].width, widths[index].align);

            newX += widths[index].width;
        })
    })

}