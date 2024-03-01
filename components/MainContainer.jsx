import React, { useState } from "react";

const MainContainer = () => {
  const [quote, setQuote] = useState();

  const apiUrl = "https://api.quotable.io/random";

  const getQuote = async () => {
    const response = await fetch(apiUrl);
    const quoteData = await response.json();

    setQuote(quoteData);
  };

  return (
    <div className="card">
      <div>
        <button onClick={getQuote}>Get a New Quote</button>
      </div>
      {quote && (
        <div>
          <h1 className="Quote">"{quote.content}"</h1>
          <div className="author">
            <p>Author :</p>
            <p>"{quote.author}"</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainContainer;
