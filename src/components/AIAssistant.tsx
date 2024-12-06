import React from 'react';
import { Sparkles, BookOpen, Brain, Library } from 'lucide-react';
import AIButton from './AIAssistant/AIButton';
import KeyConcepts from './AIAssistant/KeyConcepts';

export default function AIAssistant() {
  return (
    <div className="w-80 border-l border-gray-200 bg-gray-50 p-4 h-screen overflow-y-auto">
      <div className="space-y-4">
        <h2 className="text-lg font-semibold flex items-center">
          <Sparkles className="w-5 h-5 text-indigo-600 mr-2" />
          AI Assistant
        </h2>

        <div className="space-y-4">
          <AIButton icon={BookOpen} label="Summarize" />
          <AIButton icon={Brain} label="Mind Map" />
          <AIButton icon={Library} label="Generate Flashcards" />
        </div>

        <KeyConcepts />
      </div>
    </div>
  );
}