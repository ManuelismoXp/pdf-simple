import jsPDF from "jspdf";

export const align = (pdf: jsPDF, x: number, y: number, text: string | number, width: number, position: string | undefined): void => {
    if (position === 'center')
        pdf.text(text.toString(), x + (width - pdf.getTextWidth(text.toString())) / 2, y);

    if (position === 'left' || position === undefined)
        pdf.text(text.toString(), x + 1, y);

    if (position === 'right')
        pdf.text(text.toString(), (x + width) - pdf.getTextWidth(text.toString()) - 1, y);
}