import React, { useState } from "react";
import SummaryResult from "./SummaryResult";
import { handleSummary } from "../helper/handleSummary";
import { toast } from "react-toastify";

const ContentForm: React.FC = () => {
  
  const [textInput, setTextInput] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [summary, setSummary] = useState<string>("");

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextInput(e.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
    } else {
      toast.warning("Please select a PDF file");
      e.target.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleSummary({
      textInput,
      selectedFile,
      setIsLoading,
      setSummary,
    });
  };

  return (
    <>
      <div className="max-w-md mx-auto p-6 mt-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          Content Summarizer
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <label
                htmlFor="textInput"
                className="text-sm font-medium text-gray-700"
              >
                Input Your Text
              </label>
              {textInput && (
                <button
                  type="button"
                  onClick={() => setTextInput("")}
                  className="bg-blue-600 hover:bg-blue-700 duration-300 text-white text-sm px-5 py-1 rounded outline-none"
                >
                  Clear
                </button>
              )}
            </div>

            <textarea
              id="textInput"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              value={textInput}
              onChange={handleTextChange}
              placeholder="Enter text you want to summarize..."
            />
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <label
                htmlFor="fileInput"
                className="text-sm font-medium text-gray-700"
              >
                Or Upload PDF
              </label>
              {selectedFile && (
                <button
                  type="button"
                  onClick={() => setSelectedFile(null)}
                  className="bg-blue-600 hover:bg-blue-700 duration-300 text-white text-sm px-5 py-1 rounded outline-none"
                >
                  Remove
                </button>
              )}
            </div>

            <div className="border border-dashed border-gray-400 rounded-md p-4 bg-gray-50 hover:bg-gray-100 transition duration-150">
              
              {selectedFile ? (
                <p className="mt-2 text-sm text-gray-600">
                  Selected file: {selectedFile.name}
                </p>
              ) : (
                <input
                  id="fileInput"
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="w-full text-sm text-gray-700"
                />
              )}

            </div>
          </div>

          <button
            type="submit"
            disabled={(!textInput && !selectedFile) || isLoading}
            className={`w-full py-2 px-4 rounded-md text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              (!textInput && !selectedFile) || isLoading
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isLoading ? "Summarizing..." : "Summarize"}
          </button>
        </form>
      </div>

      {summary && <SummaryResult summary={summary} />}
    </>
  );
};

export default ContentForm;
