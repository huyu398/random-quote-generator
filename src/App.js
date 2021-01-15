import { BrowserRouter, Route } from 'react-router-dom';

import RandomQuote from './RandomQuote.js';

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={RandomQuote} />
    </BrowserRouter>
  )
}

export default App;
