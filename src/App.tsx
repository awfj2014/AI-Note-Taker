import React from 'react';
import Sidebar from './components/Sidebar';
import Editor from './components/Editor';
import AIAssistant from './components/AIAssistant';

function App() {
  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <Editor />
      <AIAssistant />
    </div>
  );
}

export default App;