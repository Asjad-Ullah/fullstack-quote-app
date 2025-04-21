import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchQuote = () => {
    setLoading(true);
    fetch('/api/quote')
      .then(res => res.json())
      .then(data => {
        setQuote(data.quote);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching quote:', err);
        setQuote("Oops! Couldn't fetch quote.");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="app-container">
      <div className="quote-card">
        <h1>Quote of the Day</h1>
        <p className="quote-text">
          {loading ? 'Loading...' : `"${quote}"`}
        </p>
        <button onClick={fetchQuote}>Get New Quote</button>
      </div>
    </div>
  );
}

export default App;
