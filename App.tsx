import React, { useState } from 'react';
import { Brain, Clock, BookOpen, Settings, Plus } from 'lucide-react';
import Timer from './components/Timer';
import Flashcards from './components/Flashcards';
import Notes from './components/Notes';

function App() {
  const [activeTab, setActiveTab] = useState<'flashcards' | 'timer' | 'notes'>('flashcards');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">StudyAI</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Settings className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('flashcards')}
            className={`px-4 py-2 rounded-lg flex items-center ${
              activeTab === 'flashcards'
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <BookOpen className="h-5 w-5 mr-2" />
            Flashcards
          </button>
          <button
            onClick={() => setActiveTab('timer')}
            className={`px-4 py-2 rounded-lg flex items-center ${
              activeTab === 'timer'
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Clock className="h-5 w-5 mr-2" />
            Study Timer
          </button>
          <button
            onClick={() => setActiveTab('notes')}
            className={`px-4 py-2 rounded-lg flex items-center ${
              activeTab === 'notes'
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Plus className="h-5 w-5 mr-2" />
            Notes
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          {activeTab === 'flashcards' && <Flashcards />}
          {activeTab === 'timer' && <Timer />}
          {activeTab === 'notes' && <Notes />}
        </div>
      </main>
    </div>
  );
}

export default App;