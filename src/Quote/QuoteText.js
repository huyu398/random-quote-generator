import { Container, Typography } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => createStyles({
  quoteText: {
    borderLeft: `solid ${theme.palette.warning.light} ${theme.spacing(1)}px`
  }
}));

function QuoteText(props) {
  const classes = useStyles();

  return (
    <Container maxWidth='md' className={classes.quoteText}>
      <Container maxWidth='sm'>
        <Typography variant="h4">
          "{ props.text }"
        </Typography>
      </Container>
    </Container>
  )
}

export default QuoteText;
