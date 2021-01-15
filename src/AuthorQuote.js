import { useState, useEffect } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import axios from 'axios';

import Header from './Header.js'
import Quote from './Quote/Quote.js'

function AuthorQuote(props) {
  const author = props.match.params.author;
  const [quotes, setQuotes] = useState([]);

  const jumpToTop = () => {
    props.history.push('/')
  }

  useEffect(() => {
    axios.get(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${escape(author)}`)
      .then(res => {
        const quotes = res.data.data;
        for (const quote of quotes) {
          delete quote.quoteAuthor;
        }
        setQuotes(quotes);
      });
  }, [author])

  return (
    <Container maxWidth='lg'>
      <Header handleRefresh={jumpToTop}/>
      <Container maxWidth='sm' style={{marginBottom: '80px'}}>
        <Typography variant="h4" style={{fontWeight: 'bold'}}>
          { author }
        </Typography>
      </Container>
      <Grid container spacing={10}>
        {
          quotes.map((quote, i) => {
            return (
              <Grid item xs={12} key={i}>
                <Quote data={quote} key={i}/>
              </Grid>
            )
          })
        }
      </Grid>
    </Container>
  )
}

export default AuthorQuote;
