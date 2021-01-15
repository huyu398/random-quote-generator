import { Container } from '@material-ui/core';
import axios from 'axios';

import Header from './Header.js'

function AuthorQuote(props) {
  const jumpToTop = () => {
    props.history.push('/')
  }

  return (
    <Container maxWidth='lg'>
      <Header handleRefresh={jumpToTop}/>
    </Container>
  )
}

export default AuthorQuote;
