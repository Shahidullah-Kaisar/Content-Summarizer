import React from 'react';

interface SummaryResultProps {
  summary: string;
}

const SummaryResult: React.FC<SummaryResultProps> = ({ summary }) => {
  return (
    <div className="max-w-4xl m-auto mt-10 p-6 bg-white border border-gray-300 rounded-2xl shadow-lg mb-16">
      <h2 className="text-2xl font-bold text-blue-700 mb-4 border-b border-gray-200 pb-2">
        📝 Summarized Content
      </h2>
      <div className="text-gray-800 whitespace-pre-line leading-relaxed tracking-wide max-h-[400px] overflow-y-auto px-1">
        {summary}
      </div>
    </div>
  );
};

export default SummaryResult;
