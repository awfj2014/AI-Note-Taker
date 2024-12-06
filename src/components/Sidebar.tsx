import React from 'react';
import { FolderOpen, Plus, Settings, Search, BookOpen } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <BookOpen className="w-6 h-6 text-indigo-600" />
          <h1 className="text-xl font-bold text-gray-900">StudyAI</h1>
        </div>
      </div>

      <div className="p-4">
        <button className="w-full flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          <Plus className="w-5 h-5 mr-2" />
          New Note
        </button>
      </div>

      <div className="px-4 mb-4">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search notes..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto">
        <div className="px-4 py-2">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Folders</h2>
          <div className="mt-2 space-y-1">
            <button className="w-full flex items-center px-2 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100">
              <FolderOpen className="w-5 h-5 mr-2 text-gray-400" />
              All Notes
            </button>
            <button className="w-full flex items-center px-2 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100">
              <FolderOpen className="w-5 h-5 mr-2 text-gray-400" />
              Lectures
            </button>
          </div>
        </div>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <button className="w-full flex items-center px-2 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100">
          <Settings className="w-5 h-5 mr-2 text-gray-400" />
          Settings
        </button>
      </div>
    </aside>
  );
}