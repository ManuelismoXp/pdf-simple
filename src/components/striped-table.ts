import jsPDF from "jspdf";
import { align } from "../utils/align";

interface Header {
    text: string,
    width: number,
    align?: string
}

type DataSet = string | number

export const stripedTable = (pdf: jsPDF, x: number, y: number, headers: Header[], headerheight: number, dataset: DataSet[][], border: boolean = false): void => {

    const widths: Array<{ width: number, align: string | undefined }> = [];
    let newX: number = x;

    headers?.forEach(head => {
        widths.push({ width: head.width, align: head.align ?? undefined });

        pdf.setFillColor(100, 100, 100);
        pdf.rect(newX, y - (headerheight - 1.5), head.width, headerheight, border ? 'FD' : 'F');
        pdf.setTextColor(255, 255, 255);
        align(pdf, newX, y, head.text, head.width, head.align ?? undefined);

        newX += head.width;
    });

    dataset?.forEach((data, index) => {
        y += headerheight;
        let newX: number = x;

        data?.forEach((element, i) => {
            const mod = (index % 2);

            if (mod === 0) {
                border ? pdf.rect(newX, y - (headerheight - 1.5), widths[i].width, headerheight, 'S') : '';
                pdf.setTextColor(0, 0, 0);
            } else {
                pdf.setFillColor(235, 235, 235);
                pdf.rect(newX, y - (headerheight - 1.5), widths[i].width, headerheight, border ? 'FD' : 'F');
                pdf.setTextColor(0, 0, 0);
            }

            align(pdf, newX, y, element, widths[i].width, widths[i].align ?? undefined);

            newX += widths[i].width;
        })
    })

}