import { Container, Typography } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => createStyles({
  quoteText: {
    borderLeft: `solid ${theme.palette.warning.light} ${theme.spacing(1)}px`,
  },
  quoteAuthor: {
    fontWeight: 'bold'
  }
}));

function Quote(props) {
  const classes = useStyles();

  return (
    <Container maxWidth='md'>
      <Container maxWidth='md' className={classes.quoteText}>
        <Container maxWidth='sm'>
        <Typography variant="h4">
          "{ props.data.quoteText }"
        </Typography>
        </Container>
      </Container>
      <Container maxWidth='sm'>
        <Typography variant="h4" className={classes.quoteAuthor}>
          { props.data.quoteAuthor }
        </Typography>
        <Typography variant="caption">
          { props.data.quoteGenre }
        </Typography>
      </Container>
    </Container>
  )
}

export default Quote;
