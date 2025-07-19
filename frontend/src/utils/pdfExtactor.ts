/* eslint-disable @typescript-eslint/no-explicit-any */
import * as pdfjsLib from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker?url"; 

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

export async function extractTextFromPDF(file: File): Promise<string> {
  const arrayBuffer = await file.arrayBuffer();

  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

  let fullText = '';

  for (let i = 1; i <= pdf.numPages; i++) {

    const page = await pdf.getPage(i);
    
    const content = await page.getTextContent();

    const strings = content.items.map((item: any) => item.str);

    fullText += strings.join(' ') + '\n\n';
  }

  return fullText.trim();
}
