import { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import axios from 'axios';

import Header from './Header.js'
import Quote from './Quote.js'

function App() {
  const [quote, setQuote] = useState('');

  const refreshQuote = () => {
    axios.get('https://quote-garden.herokuapp.com/api/v3/quotes/random')
      .then(res => {
        const quoteText = res.data.data[0].quoteText;
        setQuote(quoteText);
      });
  };

  useEffect(() => {
    refreshQuote();
  }, []);

  return (
    <Container maxWidth='lg'>
      <Header handleRefresh={refreshQuote}/>
      <Container maxWidth='sm'>
        <Quote text={quote}/>
      </Container>
    </Container>
  )
}

export default App;
