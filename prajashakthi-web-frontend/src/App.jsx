import "./App.css";
import React from 'react';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Page Content</h1>
        <p>This is the main content area below the header.</p>
      </main>
    </div>
  );
}

export default App;