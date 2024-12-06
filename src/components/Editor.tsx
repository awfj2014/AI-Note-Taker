import React from 'react';
import { Mic, Camera, Image, List, BrainCircuit } from 'lucide-react';
import ActionButton from './Editor/ActionButton';

export default function Editor() {
  return (
    <div className="flex-1 flex flex-col h-screen">
      <div className="border-b border-gray-200 p-4">
        <input
          type="text"
          placeholder="Note title..."
          className="text-2xl font-bold w-full focus:outline-none"
        />
        <div className="flex items-center space-x-4 mt-4">
          <ActionButton icon={Mic} label="Voice" />
          <ActionButton icon={Camera} label="Scan" />
          <ActionButton icon={Image} label="Image" />
          <ActionButton icon={List} label="Template" />
          <ActionButton icon={BrainCircuit} label="AI Assist" variant="primary" />
        </div>
      </div>

      <div className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          <textarea
            className="w-full h-full p-4 text-lg leading-relaxed focus:outline-none resize-none"
            placeholder="Start typing your notes here..."
          />
        </div>
      </div>
    </div>
  );
}