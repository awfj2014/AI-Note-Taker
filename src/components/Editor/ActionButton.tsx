import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ActionButtonProps {
  icon: LucideIcon;
  label: string;
  variant?: 'default' | 'primary';
}

export default function ActionButton({ icon: Icon, label, variant = 'default' }: ActionButtonProps) {
  const baseClasses = "flex items-center px-3 py-1.5 text-sm rounded-lg";
  const variantClasses = variant === 'primary' 
    ? "text-white bg-indigo-600 hover:bg-indigo-700"
    : "text-gray-700 hover:bg-gray-100";

  return (
    <button className={`${baseClasses} ${variantClasses}`}>
      <Icon className="w-4 h-4 mr-2" />
      {label}
    </button>
  );
}