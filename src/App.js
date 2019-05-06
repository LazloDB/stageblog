import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import FileExplorer from './components/FileExplorer';
import Document from './components/Document';

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={FileExplorer} />
        <Route path="/blog/:id" exact component={Document} />
      </div>
    </Router>
  );
}

export default App;
