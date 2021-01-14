import { Container, Typography } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => createStyles({
  quoteText: {
    borderLeft: `solid ${theme.palette.warning.light} ${theme.spacing(1)}px`,
    padding: `0 ${theme.spacing(10)}px`
  }
}));

function Quote(props) {
  const classes = useStyles();

  return (
    <Container maxWidth='md' className={classes.quoteText}>
      <Typography variant="h4">
        "{ props.text }"
      </Typography>
    </Container>
  )
}

export default Quote;
