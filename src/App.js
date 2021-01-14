import { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import axios from 'axios';

import Quote from './Quote.js'

function App() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    axios.get('https://quote-garden.herokuapp.com/api/v3/quotes/random')
      .then(res => {
        const quoteText = res.data.data[0].quoteText;
        setQuote(quoteText);
      });
  }, []);

  return (
    <Container maxWidth='sm'>
      <Quote text={quote}/>
    </Container>
  )
}

export default App;
