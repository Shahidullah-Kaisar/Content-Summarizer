import { extractTextFromPDF } from "../utils/pdfExtactor";
import { generateText } from "./generateText";

interface HandleSummaryParams {
  textInput: string;
  selectedFile: File | null;
  setIsLoading: (loading: boolean) => void;
  setSummary: (summary: string) => void;
}

export const handleSummary = async ({
  textInput,
  selectedFile,
  setIsLoading,
  setSummary,
}: HandleSummaryParams) => {
  try {
    setIsLoading(true);

    let prompt = textInput;

    if (selectedFile) {
      const extractedText = await extractTextFromPDF(selectedFile);
      prompt = extractedText || prompt || "Summarize this PDF file in line";
    }

    if (!prompt.trim()) {
      alert("Please provide some text or upload a PDF to summarize.");

      setIsLoading(false);

      return;
    }

    const response = await generateText(prompt);
    setSummary(response);
  } catch (error) {
    console.error("Error:", error);

    alert("Something went wrong");
  } finally {
    setIsLoading(false);
  }
};
