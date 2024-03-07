import { useState } from "react";

export default function Home() {
  const [quote, setQuote] = useState();

  const apiUrl = "https://api.quotable.io/random";

  const getQuote = async () => {
    try {
      const response = await fetch(apiUrl);
      const quoteData = await response.json();

      setQuote(quoteData);
    } catch (error) {
      console.log(
        "An error occurred while fetching the quote. Please try again later.",
        error,
      );
    }
  };

  return (
    <main className="body">
      <div>
        <div>
          <button onClick={getQuote}>Get a New Quote</button>
        </div>
        {/* If the fetch is successful... show this container */}
        {quote && (
          <div>
            <h1>"{quote.content}"</h1>
            <p>{quote.author}</p>
          </div>
        )}
      </div>
    </main>
  );
}
