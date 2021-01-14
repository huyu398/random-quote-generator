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
        const quote = res.data.data[0];
        setQuote(quote);
      });
  };

  useEffect(() => {
    refreshQuote();
  }, []);

  return (
    <Container maxWidth='lg'>
      <Header handleRefresh={refreshQuote}/>
      <Quote data={quote}/>
    </Container>
  )
}

export default App;
