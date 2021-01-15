import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import { ArrowForward } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => createStyles({
  authorCard: {
    color: theme.palette.text.primary,
    paddingTop:    `${theme.spacing(5)}px`,
    paddingBottom: `${theme.spacing(5)}px`,
    '&:hover': {
      color: 'white',
      background: grey[900],
    }
  },
  quoteAuthor: {
    fontWeight: 'bold'
  }
}));

function QuoteAuthor(props) {
  const classes = useStyles();

  return (
    <Link to="/author" style={{textDecoration: 'none'}}>
      <Container maxWidth="sm" className={classes.authorCard}>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h4" className={classes.quoteAuthor}>
              { props.author }
            </Typography>
            <Typography variant="caption">
              { props.genre }
            </Typography>
          </Grid>
          <Grid>
            <ArrowForward style={{color: 'white'}}/>
          </Grid>
        </Grid>
      </Container>
    </Link>
  )
}

export default QuoteAuthor;
