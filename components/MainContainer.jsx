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
    <div className="">
      <div className="">
        <button onClick={getQuote} className="">
          Get a New Quote
        </button>
      </div>
      {quote && (
        <div className="">
          <h1 className="">"{quote.content}"</h1>
          <div>
            <p className="">Author :</p>
            <p className="">{quote.author}</p>
          </div>
          <div className="">
            <button className="">
              <ShareIcon />
            </button>
            <button className="">
              <StarIcon />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainContainer;
