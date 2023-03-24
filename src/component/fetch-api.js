import { useEffect, useState } from 'react';
// import FormatQuoteOutlinedIcon from '@mui/icons-material/FormatQuoteOutlined';

const ApiQuote = () => {
  const quotesURL = 'https://api.api-ninjas.com/v1/quotes';
  const [quotes, setQuote] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${quotesURL}?limit=2&category=computers`, {
      headers: {
        'X-Api-Key': 'ypKGEI3Ec9bEFbsF6r+qyQ==ZrUXzXFATwVsAzRX',
      },
    })
      .then((result) => {
        setLoading(false);
        setError('');
        return result.json();
      })
      .then((data) => setQuote(data))
      .catch((crash) => {
        setError(crash);
        setLoading(false);
      });
  }, []);

  return (
    <div className="quotes">
      {error && <span className="error">Error while fetching data...</span>}
      {quotes.map((quote) => (
        <div className="quote-Contain" key={quote.quote}>
          <blockquote>{quote.quote}</blockquote>
          <cite>{quote.author}</cite>
        </div>
      ))}
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default ApiQuote;
