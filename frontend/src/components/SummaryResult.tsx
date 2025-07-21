import React from 'react';
import { toast } from 'react-toastify';

interface SummaryResultProps {
  summary: string;
}

const SummaryResult: React.FC<SummaryResultProps> = ({ summary }) => {

  const handleCopy = async () => {
  try {
    await navigator.clipboard.writeText(summary);
    toast("Text copied");
  } catch (error) {
    toast.error(error as string);
  }
};


  return (
    <div className="max-w-4xl m-auto mt-10 p-6 bg-white border border-gray-300 rounded-2xl shadow-lg mb-16">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4 border-b border-gray-200 pb-2">
        <h2 className="text-2xl font-bold text-blue-700">📝 Summarized Content</h2>
        <button
          onClick={handleCopy}
          className="bg-blue-600 hover:bg-blue-700 duration-300 text-white text-sm px-5 py-2 rounded w-full sm:w-auto"
        >
          Copy Text
        </button>
      </div>

      <div className="text-gray-800 whitespace-pre-line leading-relaxed tracking-wide max-h-[400px] overflow-y-auto px-1">
        {summary}
      </div>
      
    </div>
  );
};

export default SummaryResult;
