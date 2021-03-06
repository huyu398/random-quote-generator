import { Grid } from '@material-ui/core';

import QuoteText from './QuoteText.js';
import QuoteAuthor from './QuoteAuthor.js';

function Quote(props) {
  return (
    props.data.quoteText === undefined
    ? ''
    : <Grid container spacing={10}>
      <Grid item xs={12}>
        <QuoteText text={props.data.quoteText} />
      </Grid>
      {
        props.data.quoteAuthor !== undefined &&
          <Grid item xs={12}>
            <QuoteAuthor author={props.data.quoteAuthor} genre={props.data.quoteGenre} />
          </Grid>
      }
    </Grid>
  )
}

export default Quote;
