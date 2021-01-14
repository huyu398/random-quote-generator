import { Container, Typography } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => createStyles({
  quoteAuthor: {
    fontWeight: 'bold'
  }
}));

function QuoteAuthor(props) {
  const classes = useStyles();

  return (
    <Container maxWidth='sm'>
      <Typography variant="h4" className={classes.quoteAuthor}>
        { props.author }
      </Typography>
      <Typography variant="caption">
        { props.genre }
      </Typography>
    </Container>
  )
}

export default QuoteAuthor;
