import { BrowserRouter, Route } from 'react-router-dom';

import RandomQuote from './RandomQuote.js';
import AuthorQuote from './AuthorQuote.js';

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={RandomQuote} />
      <Route path='/author' component={AuthorQuote} />
    </BrowserRouter>
  )
}

export default App;
