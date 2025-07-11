
import React, { useState } from 'react';
import { Upload, File, CheckCircle, AlertTriangle, Info, X } from 'lucide-react';

interface AnalysisResult {
  fileName: string;
  summary: string;
  riskFlags: Array<{ type: 'high' | 'medium' | 'low'; message: string }>;
  extractedClauses: string[];
  suggestions: string[];
}

const sampleAnalysis: AnalysisResult = {
  fileName: 'Contract_001.pdf',
  summary: 'This is a standard service agreement between ABC Corporation and XYZ Services. The contract outlines terms for consulting services over a 12-month period with a total value of $120,000.',
  riskFlags: [
    { type: 'high', message: 'Missing liability limitation clause' },
    { type: 'medium', message: 'Vague termination conditions' },
    { type: 'low', message: 'Standard payment terms applied' }
  ],
  extractedClauses: [
    'Payment terms: Net 30 days from invoice date',
    'Contract duration: 12 months from effective date',
    'Confidentiality: Standard NDA provisions apply'
  ],
  suggestions: [
    'Consider adding a liability cap of $50,000',
    'Specify termination notice period (recommend 30 days)',
    'Include force majeure clause for unforeseen circumstances'
  ]
};

export const UploadAnalyze = () => {
  const [dragOver, setDragOver] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    setUploadedFiles(prev => [...prev, ...files]);
    
    // Simulate analysis
    if (files.length > 0) {
      simulateAnalysis();
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setUploadedFiles(prev => [...prev, ...files]);
    
    if (files.length > 0) {
      simulateAnalysis();
    }
  };

  const simulateAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setAnalysis(sampleAnalysis);
      setIsAnalyzing(false);
    }, 3000);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
    if (uploadedFiles.length === 1) {
      setAnalysis(null);
    }
  };

  const getRiskIcon = (type: string) => {
    switch (type) {
      case 'high':
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      case 'medium':
        return <Info className="w-4 h-4 text-yellow-500" />;
      case 'low':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      default:
        return <Info className="w-4 h-4 text-gray-500" />;
    }
  };

  const getRiskColor = (type: string) => {
    switch (type) {
      case 'high':
        return 'bg-red-50 border-red-200 text-red-800';
      case 'medium':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'low':
        return 'bg-green-50 border-green-200 text-green-800';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Upload & Analyze</h1>
        <p className="text-gray-600">Upload legal documents for AI-powered analysis</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upload Section */}
        <div className="space-y-6">
          {/* Drop Zone */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              dragOver 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            <div className="flex flex-col items-center">
              <Upload className={`w-12 h-12 mb-4 ${dragOver ? 'text-blue-500' : 'text-gray-400'}`} />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Drop files here or click to upload
              </h3>
              <p className="text-gray-600 mb-4">
                Supports PDF, DOCX, TXT files up to 10MB
              </p>
              <label className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer transition-colors">
                Choose Files
                <input
                  type="file"
                  multiple
                  accept=".pdf,.docx,.txt"
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* Uploaded Files */}
          {uploadedFiles.length > 0 && (
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="font-medium text-gray-900 mb-3">Uploaded Files</h3>
              <div className="space-y-2">
                {uploadedFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <File className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-900">{file.name}</span>
                      <span className="text-xs text-gray-500">
                        ({(file.size / 1024 / 1024).toFixed(1)} MB)
                      </span>
                    </div>
                    <button
                      onClick={() => removeFile(index)}
                      className="p-1 hover:bg-gray-200 rounded"
                    >
                      <X className="w-4 h-4 text-gray-500" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Analysis Section */}
        <div className="space-y-6">
          {isAnalyzing && (
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-gray-700">Analyzing document with Nora...</span>
              </div>
            </div>
          )}

          {analysis && (
            <div className="space-y-4">
              {/* Summary */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Document Summary</h3>
                <p className="text-gray-700 leading-relaxed">{analysis.summary}</p>
              </div>

              {/* Risk Flags */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Risk Analysis</h3>
                <div className="space-y-2">
                  {analysis.riskFlags.map((risk, index) => (
                    <div key={index} className={`flex items-start space-x-2 p-3 rounded-lg border ${getRiskColor(risk.type)}`}>
                      {getRiskIcon(risk.type)}
                      <span className="text-sm">{risk.message}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Extracted Clauses */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Key Clauses</h3>
                <div className="space-y-2">
                  {analysis.extractedClauses.map((clause, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-700">{clause}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Suggestions */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Nora's Suggestions</h3>
                <div className="space-y-2">
                  {analysis.suggestions.map((suggestion, index) => (
                    <div key={index} className="flex items-start space-x-2 p-3 bg-blue-50 rounded-lg">
                      <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-white text-xs font-bold">N</span>
                      </div>
                      <p className="text-sm text-blue-800">{suggestion}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {!analysis && !isAnalyzing && uploadedFiles.length === 0 && (
            <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <File className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No documents uploaded</h3>
              <p className="text-gray-600">Upload a document to see Nora's analysis</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
