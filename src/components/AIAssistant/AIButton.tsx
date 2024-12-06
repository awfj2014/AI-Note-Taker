import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AIButtonProps {
  icon: LucideIcon;
  label: string;
}

export default function AIButton({ icon: Icon, label }: AIButtonProps) {
  return (
    <button className="w-full flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors">
      <div className="flex items-center">
        <Icon className="w-5 h-5 text-indigo-600 mr-3" />
        <span>{label}</span>
      </div>
    </button>
  );
}