import ShareIcon from "@/icons/ShareIcon";
import StarIcon from "@/icons/StarIcon";
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
        <button className="Button" onClick={getQuote}>
          Get a New Quote
        </button>
      </div>
      {quote && (
        <div>
          <h1 className="Quote">"{quote.content}"</h1>
          <div className="author_container">
            <p>Author :</p>
            <p className="author">{quote.author}</p>
          </div>
          <div className="bottom_buttons">
            <button>
              <ShareIcon />
            </button>
            <button>
              <StarIcon />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainContainer;
